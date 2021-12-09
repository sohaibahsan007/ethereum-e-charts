// Initialize the echarts instance based on the prepared dom

// $.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vRQSNcmrLtblII19RSmwU6rE6qJVERfc1h-z62dqxptHs9eOurLTlhTGMo1SAVVXIVS3JYl8BBcpcvk/pub?gid=1497781994&single=true&output=csv", function (csvStr) {
//
//   const data = parseDataByColumns(csvStr);
//   // draw EChart 1 - Title Ethereum's Historical and Projected Issuance Rate
//   drawEChart1(data);
// });

// function parseDataByColumns(csvStr) {
//   const rawData = Papa.parse(csvStr, {
//     header: true,
//   }).data;
//   const data = rawData
//     ?.sort(function (a, b) {
//       return Number(new Date(a?.Date)) - Number(new Date(b?.Date));
//     })
//     ?.filter((d) => d?.Date);
//   return data;
// }
// function drawEChart1(data){

//   const dateList = JSON.parse(JSON.stringify(data))?.map((d) => d?.Date);
//   const supplyList = JSON.parse(JSON.stringify(data))?.map((d) =>
//     parseInt(d?.Supply?.replaceAll(",", ""))
//   );
//   const rateList = JSON.parse(JSON.stringify(data))?.map((d) =>
//     parseInt(d?.["Issuance Rate"]?.replaceAll("%", ""))
//   );
//   const myChart = echarts.init(document.getElementById("echarts-1"), "dark");

//   const option = {
//     title: {
//       text: "Ethereum's Historical and Projected Issuance Rate",
//       textAlign: 'center',
//       textVerticalAlign: 'auto',
//       left: '50%',
//       top: '4%'
//     },
//     color: ["#4172C3", "#FF990B"],
//     xAxis: {
//       type: "category",
//       data: dateList,
//     },
//     tooltip: {
//       trigger: "axis",
//     },
//     legend: {
//       data: ["Supply", "Days"],
//       top: '10%'
//     },
//     calculable: true,
//     grid: {
//       show: true,
//       top: '20%'
//     },
//     yAxis: [
//       {
//         type: "value",
//         name: "Supply",
//       },
//       {
//         type: "value",
//         name: "Days",
//         axisLabel: {
//           formatter: function (value, index) {
//             return value + "%";
//           },
//         },
//       },
//     ],
//     series: [
//       {
//         data: supplyList,
//         type: "line",
//         name: "Supply",
//         smooth: true,
//         smoothMonotone: "x",
//         symbol: "none",
//         yAxisIndex: 0,
//         emphasis: {
//           focus: "series",
//         },
//         lineStyle: {
//           width: 3,
//           color: "#4172C3",
//         },
//       },
//       {
//         data: rateList,
//         type: "line",
//         id: "line2",
//         name: "Days",
//         step: false,
//         smooth: false,
//         smoothMonotone: "x",
//         symbol: "none",
//         yAxisIndex: 1,
//         emphasis: {
//           focus: "series",
//         },
//         lineStyle: {
//           width: 3,
//           color: "#FF990B",
//         },
//         markPoint: {
//           data: [
//             {
//               yAxis: 13,
//               xAxis: "9/23/2015",
//               label: {
//                 width: 100,
//                 formatter: ["Homestead ", "(Block time increase)"].join("\n"),
//               },
//               symbolSize: [110, 40],
//               symbolOffset: [0, 10],
//             },
//             {
//               yAxis: 16,
//               xAxis: "6/20/2016",
//               label: {
//                 width: 100,
//                 formatter: ["DDOS"].join("\n"),
//               },
//               symbolSize: [40, 20],
//               symbolOffset: [0, -15],
//             },
//             {
//               yAxis: 15,
//               xAxis: "10/27/2016",
//               label: {
//                 width: 100,
//                 formatter: ["Difficulty Bomb"].join("\n"),
//               },
//               symbolSize: [80, 20],
//               symbolOffset: [0, -15],
//             },
//             {
//               yAxis: 6,
//               xAxis: "10/21/2017",
//               label: {
//                 width: 100,
//                 formatter: ["Byzantium","5>3 reward drop + bomb delay"].join("\n"),
//               },
//               symbolSize: [80, 20],
//               symbolOffset: [0, 25],
//             },
//             {
//               yAxis: 8,
//               xAxis: "5/17/2018",
//               label: {
//                 width: 100,
//                 formatter: ["Difficulty Bomb"].join("\n"),
//               },
//               symbolSize: [80, 20],
//               symbolOffset: [0, -15],
//             },
//             {
//               yAxis: 7,
//               xAxis: "12/11/2018",
//               label: {
//                 width: 100,
//                 formatter: ["Constantinople","3 > 2 reward drop + bomb delay"].join("\n"),
//               },
//               symbolSize: [80, 20],
//               symbolOffset: [-40, 60],
//             },
//             {
//               yAxis: 5,
//               xAxis: "10/22/2019",
//               label: {
//                 width: 100,
//                 formatter: ["Difficulty Bomb"].join("\n"),
//               },
//               symbolSize: [80, 20],
//               symbolOffset: [0, 55],
//             },
//             {
//               yAxis: 5,
//               xAxis: "11/29/2019",
//               label: {
//                 width: 100,
//                 formatter: ["Muir Glacier","(Bomb delay)"].join("\n"),
//               },
//               symbolSize: [80, 20],
//               symbolOffset: [0, -45],
//             },
//             {
//               yAxis: 5,
//               xAxis: "7/27/2020",
//               label: {
//                 width: 100,
//                 formatter: ["Eth2 Phase 0*","(Beacon Chain)"].join("\n"),
//               },
//               symbolSize: [80, 20],
//               symbolOffset: [0, 5],
//             },
//             {
//               yAxis: 6,
//               xAxis: "4/20/2021",
//               label: {
//                 width: 100,
//                 formatter: ["Eth2 Phase 1.5*","(Eth1 folded into Eth2)"].join("\n"),
//               },
//               symbolSize: [80, 20],
//               symbolOffset: [0, -15],
//             },
//           ],
//           label: {
//             show: true,
//             fontSize: 10,
//             overflow: "breakAll",
//           },
//           itemStyle: {
//             color: "#333333",
//             opacity: 0.8,
//           },
//           symbol: "roundRect",
//         },
//       },
//     ],
//   };


//   myChart.setOption(option);
// }

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTWQ-hIY86B-xRlAoLPOQc1L0-Dmb59AUtp-_declUDUtr2FEOGjQgDBGP9rJbmiqQcVocGRV1ugxEr/pub?gid=';
const color = ['#287AED','#F23B35','#FFB32C','#0D9E4E','#FF6221','#1EB5BD'];
const textStyle= {
  fontFamily: 'Montserrat',
  fontSize: 10

}
function parseNumbers(values){
  return values?.map((d) =>
    parseFloat(d?.replaceAll(",", ""))
  );
}
function drawEChart6(data,title,headers){
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-6"));
  const series = [];
  delete data?.Date;
  headers?.forEach(h => {
    const _data = data?.[h];
    series.push({
      data: parseNumbers(_data),
      type: "line",
      name: h,
      smooth: true,
      smoothMonotone: "x",
      symbol: "rect",
      symbolSize: 2,
      emphasis: {
        focus: "series",
      },
    },);
  });
  const option = {
    title: {
      text: title,
      textAlign: 'center',
      textVerticalAlign: 'auto',
      left: '50%',
      top: '4%'
    },
    color,
    textStyle,
    xAxis: {
      type: "category",
      data: dateList,
      name: 'Age of Network in Years',
      nameLocation: 'middle',
      nameGap: '40',
      nameTextStyle: {
        color: '#333'
      },
      axisTick:{
        alignWithLabel: true
      }

    },
    tooltip: {
       trigger: "axis",
    },
    legend: {
      data: headers,
      bottom: '0',
      itemGap: 15,
      textStyle:{
        fontSize: 11,
        fontFamily: 'sans-serif',
        color: '#6e7079e8'
      }
    },
    calculable: true,
    grid: {
      show: true,
      top: '70',
      bottom: '90',
    },
    yAxis: {
      type: 'value',
      name: 'Inflationary Rewards Plus Emissions (in millions)',
      nameLocation: 'middle',
      max: 1000000000,
      nameGap: '120',
      nameTextStyle: {
        color: '#333'
      },
      nameTextStyle:{
        fontSize: 14
      },
      axisLabel: {
        formatter: function (value, index) {
          return (value/1000000)?.toLocaleString();
      }
      }
    },
    series: series,
  };
  myChart.setOption(option);
}
function drawEChart5(data,title,headers){
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-5"));
  const series = [];
  const yAxis = [];
  headers?.forEach(h => {
    const _data = data?.[h];
    const index = headers?.findIndex(header => header === h);
    series.push({
      data: parseNumbers(_data),
      type: "line",
      name: h,
      smooth: true,
      smoothMonotone: "x",
      symbol: "none",
      yAxisIndex: index,
      emphasis: {
        focus: "series",
      },
    });
    yAxis.push(
      {
        type: 'value',
        name: index === 0 ? 'Annual Money Supply Growth Rate': 'Allocated Supply',
        nameLocation: 'middle',
        nameGap: '120',
        nameTextStyle: {
          //color: '#333',
          fontSize: 12
        },

        axisLabel: index === 0 ? {
          formatter: function (value, index) {
              return value + '%';
          },
        }: {},
      }
    );
  });
  const option = {
    title: {
      text: title,
      textAlign: 'center',
      textVerticalAlign: 'auto',
      left: '50%',
      top: '4%'
    },
    textStyle,
    xAxis: {
      type: "category",
      data: dateList,
      axisTick:{
        alignWithLabel: true
      }
    },
    tooltip: {
      trigger: "axis",
      formatter: (params) => {
        return `
                  ${params[0]?.axisValue} <br />
                 ${params[0].marker} ${params[0].seriesName}: ${params[0].value}%<br/>
                 ${params[1].marker} ${params[1].seriesName}: ${params[1].value?.toLocaleString()}
                  `;
      },
    },
    legend: {
      data: headers,
      bottom: '0',
      itemGap: 15,
      textStyle:{
        fontSize: 11,
        fontFamily: 'sans-serif',
        color: '#6e7079e8'
      }
    },
    calculable: true,
    grid: {
      show: true,
      top: '70',
      bottom: '80',
    },
    yAxis,
    series: series,
  };
  myChart.setOption(option);
}
function drawEChart4(data,title,headers){
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-4"));
  const series = [];
  headers?.forEach(h => {
    const _data = data?.[h];
    series.push({
      data: parseNumbers(_data),
      type: "line",
      name: h,
      smooth: true,
      smoothMonotone: "x",
      symbol: "none",
      lineStyle: {
        type: h === 'Current Allocated' ? 'solid' :'dotted'
      },
      emphasis: {
        focus: "series",
      },
    },);
  });
  const option = {
    title: {
      text: title,
      textAlign: 'center',
      textVerticalAlign: 'auto',
      left: '50%',
      top: '4%'
    },
    textStyle,
    xAxis: {
      type: "category",
      data: dateList,
      axisTick:{
        alignWithLabel: true
      }
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: headers,
      bottom: '0',
      itemGap: 15,
      textStyle:{
        fontSize: 11,
        fontFamily: 'sans-serif',
        color: '#6e7079e8'
      },
      data:[
        {
          name: 'Current Allocated',
        },
        {
          name: 'Projected Allocated',
          icon: 'path://M335 1316 c-63 -28 -125 -122 -125 -191 0 -71 62 -164 127 -192 18 -7 58 -13 90 -13 72 0 125 28 168 88 27 39 30 52 30 117 0 65 -3 78 -30 117 -43 61 -95 88 -170 87 -33 0 -73 -6 -90 -13z, M1035 1313 c-76 -40 -115 -103 -115 -188 0 -121 85 -205 205 -205 121 0 205 84 205 205 0 84 -39 148 -112 186 -46 24 -140 25 -183 2z, M1714 1298 c-61 -42 -94 -102 -94 -173 0 -71 33 -131 94 -172 41 -28 57 -33 107 -33 76 0 115 16 161 68 76 84 76 190 0 274 -46 52 -85 68 -161 68 -50 0 -66 -5 -107 -32z',
        },
        {
          name: 'Total Authorized',
          icon: 'path://M335 1316 c-63 -28 -125 -122 -125 -191 0 -71 62 -164 127 -192 18 -7 58 -13 90 -13 72 0 125 28 168 88 27 39 30 52 30 117 0 65 -3 78 -30 117 -43 61 -95 88 -170 87 -33 0 -73 -6 -90 -13z, M1035 1313 c-76 -40 -115 -103 -115 -188 0 -121 85 -205 205 -205 121 0 205 84 205 205 0 84 -39 148 -112 186 -46 24 -140 25 -183 2z, M1714 1298 c-61 -42 -94 -102 -94 -173 0 -71 33 -131 94 -172 41 -28 57 -33 107 -33 76 0 115 16 161 68 76 84 76 190 0 274 -46 52 -85 68 -161 68 -50 0 -66 -5 -107 -32z',
        }
      ]
    },
    calculable: true,
    grid: {
      show: true,
      top: '70',
      bottom: '60',
    },
    yAxis: {
      type: 'value',
      name: '$STORE Tokens Issued',
      nameLocation: 'middle',
      nameGap: '120',
      nameTextStyle: {
        color: '#333'
      },
      nameTextStyle:{
        fontSize: 14
      },
    },
    series: series,
  };
  myChart.setOption(option);
}
function drawEChart3(data,title,headers){
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-3"));
  const series = [];
  delete data?.Date;
  headers?.filter(h => h != 'Date' && !h?.includes('Total Allocated') && !h?.includes('Emissions from Actual Token Sales'))?.forEach(h => {
    const _data = data?.[h];
    series.push({
      data: parseNumbers(_data),
      type: "line",
      name: h,
      smooth: true,
      smoothMonotone: "x",
      symbol: "rect",
      symbolSize: 2,
      emphasis: {
        focus: "series",
      },
    },);
  });

  const option = {
    title: {
      text: title,
      textAlign: 'center',
      textVerticalAlign: 'auto',
      left: '50%',
      top: '4%'
    },
    textStyle,
    color,
    xAxis: {
      type: "category",
      data: dateList,
      axisTick:{
        alignWithLabel: true
      }
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: headers,
      bottom: '0',
      itemGap: 15,
      textStyle:{
        fontSize: 11,
        fontFamily: 'sans-serif',
        color: '#6e7079e8'
      }
    },
    calculable: true,
    grid: {
      show: true,
      top: '60',
      bottom: '80',
    },
    yAxis: {
      type: 'value',
      name: 'Maximun inflation + emission per year',
      nameLocation: 'middle',
      nameGap: '120',
      nameTextStyle: {
        color: '#333'
      },
      nameTextStyle:{
        fontSize: 14
      }
    },
    series: series,
  };
  myChart.setOption(option);
}
function drawEChart2(data,title,headers){
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-2"));
  const series = [];
  const color = ['#287AED','#F23B35','#FFB32C','#0D9E4E','#FF6221','#1EB5BD'];
  headers?.forEach(h => {
    const _data = data?.[h];
    series.push({
      data: parseNumbers(_data),
      type: "line",
      name: h,
      smooth: true,
      smoothMonotone: "x",
      symbol: "rect",
      symbolSize: 2,
      stack: 'Total',
      areaStyle: {
        opacity: 0.4,
      },
      emphasis: {
        focus: "series",
      },
    },);
  });
  const option = {
    title: {
      text: title,
      textAlign: 'center',
      textVerticalAlign: 'auto',
      left: '50%',
      top: '4%'
    },
    textStyle,
    color,
    xAxis: {
      type: "category",
      data: dateList?.map(date => date?.replaceAll(',','-')),
      axisTick:{
        alignWithLabel: true
      }
    },
    tooltip: {
     trigger: 'axis',
    },
    legend: {
      data: headers,
      bottom: '0',
      itemGap: 15,
      textStyle:{
        fontSize: 12,
        fontFamily: 'sans-serif',
        color: '#6e7079e8'
      }
    },
    calculable: true,
    grid: {
      show: true,
      top: '80',
      bottom: '80',
    },
    yAxis: {
      type: 'value',
      name: 'Cumulative $STORE Tokens',
      nameLocation: 'middle',
      nameGap: '120',
      nameTextStyle: {
        color: '#333'
      },
      nameTextStyle:{
        fontSize: 14
      }
    },
    series: series,
  };
  myChart.setOption(option);
}
$.get(url+"0&single=true&output=csv", function (csvStr) {
  let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false
  })?.data;
  const title = data?.[0]?.[0];
  let headers = data?.[1];
  data = data?.slice(2);
  const array_data = [];
  headers?.forEach(h => {
    const index = headers?.findIndex(header => header === h);
    const _d = [];
    data?.forEach(d => {
      _d.push(d[index]);
    });
    array_data[h] = _d;
  });
  headers = headers?.slice(1);
  drawEChart2(array_data,title,headers);
});

$.get(url+"1694942319&single=true&output=csv", function (csvStr) {
    let data = Papa.parse(csvStr, {
      skipEmptyLines: true,
      header: false
    })?.data;
  const title = data?.[0]?.[1];
  const array_data = [];
  array_data['Date'] = data?.[2]?.slice(2);
  data = data?.slice(3);
  data?.forEach(d => {
    array_data[d[1]] = d.slice(2);
  });
  const headers = Object.keys(array_data);
  // draw EChart 3
  drawEChart3(array_data,title,headers);
});

$.get(url+"1834631508&single=true&output=csv", function (csvStr) {
  let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false
  })?.data;
  const title = data?.[0]?.[0];
  let headers = data?.[1];
  data = data?.slice(2);
  const array_data = [];
  headers?.forEach(h => {
    const index = headers?.findIndex(header => header === h);
    const _d = [];
    data?.forEach(d => {
      _d.push(d[index]);
    });
    array_data[h] = _d;
  });
  headers = headers?.slice(1);
  drawEChart4(array_data,title,headers);
});
$.get(url+"1895040396&single=true&output=csv", function (csvStr) {
     let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false
  })?.data;
  const title = data?.[0]?.[0];
  let headers = data?.[1];
  data = data?.slice(2);
  const array_data = [];
  headers?.forEach(h => {
    const index = headers?.findIndex(header => header === h);
    const _d = [];
    data?.forEach(d => {
      _d.push(d[index]);
    });
    array_data[h || 'Date'] = _d;
  });
  headers = headers?.slice(1)?.sort((a, b) => a?.localeCompare(b?.firstname));
  drawEChart5(array_data,title,headers);
});
$.get(url+"694509505&single=true&output=csv", function (csvStr) {
     let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false
  })?.data;
  const title = data?.[0]?.[0];
  let headers = data?.[1];
  data = data?.slice(2);
  const array_data = [];
  headers?.forEach(h => {
    const index = headers?.findIndex(header => header === h);
    const _d = [];
    data?.forEach(d => {
      _d.push(d[index]);
    });
    array_data[h || 'Date'] = _d;
  });
  headers = headers?.slice(1)?.sort((a, b) => a?.localeCompare(b?.firstname));
  drawEChart6(array_data,title,headers);
});



