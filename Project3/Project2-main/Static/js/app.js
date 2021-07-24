// Define SVG area dimensions
var svgWidth = 1300;
var svgHeight = 500;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 40
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data 
d3.csv("Data/impacts.csv").then(function(Data) {

  // make an array with the unitoptions for dropdown menu
  unitOptions = Data.map((d) => d.Start).filter((item, i, ar) => {
    return ar.indexOf(item) == i;
  })
  var unitMenu = d3.select("#dropdown")

  unitMenu.append("select")
      .selectAll("option")
          .data(unitOptions)
          .enter()
          .append("option")
          .attr("value", (d) => {return d;})
          .text((d) => {return d;});


 var updateGraph = function(selectedUnit){
    
  
    //get the data of the year inputed by the user
    Data = Data.filter(function(d){
    return d.Start == selectedUnit
    });

    // Cast the impacts value to a number for each piece of Data
    Data.forEach(function(d) {
      d.impacts = +d.impacts;
    });

    // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
    var xBandScale = d3.scaleBand()
      .domain(Data.map(d => d.name))
      .range([0, chartWidth])
      .padding(0.1);

    // Create a linear scale for the vertical axis.
    var yLinearScale = d3.scaleLinear()
      .domain([0, d3.max(Data, d => d.impacts)])
      .range([chartHeight, 0]);

    // Create two new functions passing our scales in as arguments
    // These will be used to create the chart's axes
    var bottomAxis = d3.axisBottom(xBandScale);
    var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

    // Append two SVG group elements to the chartGroup area,
    // and create the bottom and left axes inside of them
    chartGroup.append("g")
      .call(leftAxis);

    chartGroup.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(bottomAxis);

    // Create one SVG rectangle per piece of Data
    // Use the linear and band scales to position each rectangle within the chart
    chartGroup.selectAll(".bar")
      .data(Data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => xBandScale(d.name))
      .attr("y", d => yLinearScale(d.impacts))
      .attr("width", xBandScale.bandwidth())
      .attr("height", d => chartHeight - yLinearScale(d.impacts));
  };
      unitMenu.on('change', function() {

        // find which unit was selected from the dropdown
        var selectedUnit = d3.select(this)
            .select("select")
            .property("value");

        // run update with selected unit
        updateGraph(selectedUnit);

   });   
  
 }).catch(function(error) {
  console.log(error);
});


