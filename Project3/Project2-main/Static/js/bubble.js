var trace1 = {
    x:[	'Aubrite', 'CO3.2',	'Eucrite-mmict', 'H3-6', 'H4', 'H6', 'L/LL4', 'L/LL5', 'L/LL6',	'L4', 'L5-6', 'L5',	'LL5', 'LL6', 'Mesosiderite-A3/4'],
    y:[	1206743, 200000, 553722.2, 184000, 1305967,	1152954, 338000, 501945, 247350.5, 322266.5, 306913, 1165466.2, 726958,	809127.2, 320000],
    mode: 'markers',
    marker: {
    size:[	120, 20, 60, 20, 130, 120, 30, 50, 20, 30, 30, 120,	70,	80,	30],
        //   color: ['blue','indigo','green','yellow','orange','red'],
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Meteorite Mass (gms)',
    showlegend: false,
    height: 600,
    width: 1300
  };


//HEAD
Plotly.newPlot('bubble', data, layout);
// -----------------------------------


  // d3.json("..Data/meteorite_mass.json").then((data) => {

  // var sampleIDs=data.samples.filter(row => row.id.toString()=== id)[0];

  // var otuData=sampleIDs.recclass;
  
  // var sampleValues=sampleIDs.mass;

  // var trace1 = {
  //     x: otuData,
  //     y: sampleValues,
  //     mode: 'markers',
  //     text: otuLabels,
  //     marker: {
  //         size: sampleValues,
  //         color:otuData,
  //         colorscale: "Earth"
  //     }
  // };
        
  // var data = [trace1];
        
  // var layout = {
  //     showlegend: false,
  //     height: 600,
  //     width: 1200,
  //     sizemode:"area",
  //     hovermode:"closet",
  //     xaxis:{title:"OTU_IDS"}
  // };
        
  // Plotly.newPlot('bubble', data, layout);

  // });


// =======
// Plotly.newPlot('bubble', data, layout);
// >>>>>>> 2a23c63ab9d91afe68ab7648ee4bd80387960eb9
