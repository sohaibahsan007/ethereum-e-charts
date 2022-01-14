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
//           width: 2.5,
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
//           width: 2.5,
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

function drawEChart7(data, title, headers) {
  const dateList = data?.["Date based on block height"];
  const blockHeight = data?.["Block Height"];
  const myChart = echarts.init(document.getElementById("echarts-7"));
  const series = [];
  headers?.forEach((h) => {
    if (h === "Bitcoins" || h === "% Monetary Inflation") {
      const _data = data?.[h];
      series.push({
        data: parseNumbers(_data),
        type: "line",
        name: h === "Bitcoins"? "Total Money Supply": "Growth Rate %",
        smooth: false,
        smoothMonotone: "x",
        symbol: "none",
        yAxisIndex: h === "Bitcoins" ? 1 : 0,
        xAxisIndex: h === "Bitcoins" ? 0 : 1,
        lineStyle: {
          type: "solid",
          width: 2.5,
        },
        emphasis: {
          focus: "series",
        },
      });
    }
  });
  const _color = ["#AF69C5", "#009E96"];
  const _media = JSON.parse(JSON.stringify(media));
  _media[0].option.grid.bottom = "80";

  const option = {
    title: {
      text: title,
      ...titleStyle,
    },
    color: _color,
    textStyle,
    xAxis: [
      {
        type: "category",
        name: "Blocks (thousand)",
        nameLocation: "center",
        nameGap: "30",
        nameTextStyle: {
          color: "#333",
        },
        data: parseNumbers(blockHeight)?.map(d => parseInt(d/1000)),
        axisTick: {
          alignWithLabel: true,
        },
         axisLabel: {
          interval: 200,
        },
      },
      {
        type: "category",
        data: dateList,
        position: "top",
        axisLine: {
          lineStyle: {
            color: "auto",
          },
        },
        splitLine: {
          show: true,
          onGap: null,
        },
        axisLabel: {
          interval: 200,
        },
        axisTick: {
          alignWithLabel: true,
        },
        minorTick: {
          show: true,
        },
      },
    ],
    tooltip: {
      trigger: "axis",
      confine: true,
      formatter: (params) => {
        let label = "";
        for (let index = 0; index < params?.length; index++) {
          label += `${index == 0 ? params[index]?.axisValue + " Blocks (thousand)" : ""}  <br/>
          ${params[index].marker} ${params[index].seriesName}:  <b>${params[
            index
          ].value?.toLocaleString()}${index === 0 ? ' (Millions)': '%'}</b>`;
        }
        return label;
      },
    },
    legend: {
      ...legendStyle,
    },
    calculable: true,
    grid: [
      {
        show: true,
        top: "100",
        bottom: "20",
      },
    ],
    yAxis: [
      {
        type: "value",
        name: " Growth Rate %",
        nameLocation: "middle",
        nameGap: "80",
        max: 100,
        min: 0,
        nameTextStyle: {
          color: "#333",
        },
        nameTextStyle: {
          fontSize: 14,
        },
        axisLabel: {
          formatter: function (value, index) {
            return value + "%";
          },
        },
      },
      {
        type: "value",
        name: "Total Money Supply",
        nameLocation: "middle",
        nameGap: "30",
        nameTextStyle: {
          color: "#333",
        },
        nameTextStyle: {
          fontSize: 14,
        },
        axisLabel,
      },
    ],
    series: series,
    media: _media,
  };
  myChart.setOption(option);
  resizeChart(myChart);
}
function drawEChart6(data, title, headers) {
  const dateList = data?.["USD Value"];
  const myChart = echarts.init(document.getElementById("echarts-6"));
  const series = [];
  delete data?.Date;
  const _color = [
    "#12BC81",
    "#F54A4A",
    "#0071C6",
    "#DE2F8F",
    "#AF52C7",
    "#254294",
  ];
  headers
    ?.filter((h) => h != "USD Value" && h != "Date" && h != "Total Rewards")
    ?.forEach((h) => {
      const _data = data?.[h];
      series.push({
        data: parseNumbers(_data),
        type: "line",
        name: h,
        smooth: false,
        smoothMonotone: "x",
        symbol: h === "$STORE Price" ? "circle" : "none",
        symbolSize: h === "$STORE Price" ? 14 : 2,
        yAxisIndex: h === "$STORE Price" ? 1 : 0,
        label: {
          show: h === "$STORE Price" ? true : false,
          position: "top",
          fontSize: "14",
          fontWeight: 'bold',
          distance: 10,
          color: _color[0],
          formatter: (params) => {
            return "$" + params?.data;
          },
        },
        emphasis: {
          focus: "series",
        },
        lineStyle: {
          width: h === "$STORE Price" ? 3 : 2.5,
          type: h === "$STORE Price" ? "dotted" : "solid",
        },
      });
    });
    const _media = JSON.parse(JSON.stringify(media));
    _media[0].option.grid.bottom = "110";
    _media[0].option.grid.left = "40";
  const option = {
    title: {
      text: "Revenue per Governance Fund (USD Value)",
      ...titleStyle,
    },
    textStyle,
    color: _color,
    xAxis: {
      type: "category",
      data: dateList,
      name: "Value (in USD)",
      nameLocation: "middle",
      nameGap: "40",
      nameTextStyle: {
        color: "#333",
      },
      axisTick: {
        alignWithLabel: true,
      },
    },
    tooltip: {
      trigger: "axis",
      confine: true,
      formatter: (params) => {
        let label = "";
        for (let index = 0; index < params?.length; index++) {
          label += `${index == 0 ? params[index]?.axisValue : ""} <br/>
          ${params[index].marker} ${params[index].seriesName}:  <b>$${params[
            index
          ].value?.toLocaleString()}</b>`;
        }
        return label;
      },
    },
    legend: {
      data: headers,
      ...legendStyle,
    },
    calculable: true,
    grid: {
      show: true,
      top: "60",
      bottom: "80",
    },
    yAxis: [
      {
        type: "value",
        name: "Revenue (USD)",
        nameLocation: "middle",
        nameGap: "80",
        max: 150000000,
        nameTextStyle: {
          color: "#333",
        },
        nameTextStyle: {
          fontSize: 14,
        },
        axisLabel,
      },
      {
        type: "value",
        name: "$STORE Price",
        nameLocation: "middle",
        nameGap: "30",
        max: 15,
        nameTextStyle: {
          color: "#333",
        },
        nameTextStyle: {
          fontSize: 14,
        },
        axisLabel: {
          formatter: function (value, index) {
            return "$" + value;
          },
        },
      },
    ],
    series: series,
    media: _media,
  };
  myChart.setOption(option);
  resizeChart(myChart);
}
function drawEChart5(data, title, headers) {
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-5"));
  const series = [];
  delete data?.Date;
  headers?.forEach((h) => {
    const _data = data?.[h];
    series.push({
      data: parseNumbers(_data),
      type: "line",
      name: h,
      smooth: true,
      smoothMonotone: "x",
      symbol: "none",
      symbolSize: 2,
      lineStyle: {
        width: 2.5,
      },
      emphasis: {
        focus: "series",
      },
    });
  });
  const _media = JSON.parse(JSON.stringify(media));
  _media[0].option.grid.bottom = "110";
  _media[0].option.grid.left = "40";
  const option = {
    title: {
      text: title,
      ...titleStyle,
    },
    color: ["#DE2F8F", "#12BC81", "#254294", "#0071C6", "#F54A4A", "#AF52C7"],
    textStyle,
    xAxis: {
      type: "category",
      data: dateList,
      name: "Age of Network in Years",
      nameLocation: "middle",
      nameGap: "40",
      nameTextStyle: {
        color: "#333",
      },
      axisTick: {
        alignWithLabel: true,
      },
    },
    tooltip: {
      trigger: "axis",
      confine: true,
    },
    legend: {
      data: headers,
      ...legendStyle,
    },
    calculable: true,
    grid: {
      show: true,
      top: "70",
      bottom: "90",
    },
    yAxis: {
      type: "value",
      name: "Inflationary Rewards Plus Emissions (in millions)",
      nameLocation: "middle",
      max: 1000000000,
      nameGap: "80",
      nameTextStyle: {
        color: "#333",
      },
      nameTextStyle: {
        fontSize: 14,
      },
      axisLabel: {
        formatter: function (value, index) {
          return (value / 1000000)?.toLocaleString();
        },
      },
    },
    series: series,
    media: _media,
  };
  myChart.setOption(option);
  resizeChart(myChart);
}
function drawEChart4(data, title, headers) {
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-4"));
  const series = [];
  const yAxis = [];
  headers?.forEach((h) => {
    const _data = data?.[h];
    const index = headers?.findIndex((header) => header === h);
    series.push({
      data: parseNumbers(_data),
      type: "line",
      name: h,
      smooth: false,
      smoothMonotone: "x",
      symbol: "none",
      yAxisIndex: index,
      lineStyle: {
        width: 2.5,
      },
      emphasis: {
        focus: "series",
      },
    });
    yAxis.push({
      type: "value",
      name:
        index === 0 ? "Annual Money Supply Growth Rate" : "Allocated Supply",
      nameLocation: "middle",
      nameGap: "80",
      nameTextStyle: {
        //color: '#333',
        fontSize: 12,
      },
      axisLabel:
        index === 0
          ? {
              formatter: function (value, index) {
                return value + "%";
              },
            }
          : axisLabel,
    });
  });
  const _media = JSON.parse(JSON.stringify(media));
  _media[0].option.grid.bottom = "80";
  _media[0].option.grid.right = "60";
  const option = {
    title: {
      text: title,
      ...titleStyle,
    },
    textStyle,
    xAxis: {
      type: "category",
      data: dateList,
      axisTick: {
        alignWithLabel: true,
      },
    },
    tooltip: {
      trigger: "axis",
      confine: true,
      formatter: (params) => {
        return `
                  ${params[0]?.axisValue} <br />
                 ${params[0].marker} ${params[0].seriesName}: ${
          params[0].value
        }%<br/>
                 ${params[1].marker} ${
          params[1].seriesName
        }: ${params[1].value?.toLocaleString()}
                  `;
      },
    },
    legend: {
      data: headers,
      ...legendStyle,
    },
    calculable: true,
    grid: {
      show: true,
      top: "70",
      bottom: "80",
    },
    yAxis,
    series: series,
    media: _media,
  };
  myChart.setOption(option);
  resizeChart(myChart);
}
function drawEChart3(data, title, headers) {
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-3"));
  const series = [];
  headers?.forEach((h) => {
    const _data = data?.[h];
    series.push({
      data: parseNumbers(_data),
      type: "line",
      name: h,
      smooth: false,
      smoothMonotone: "x",
      symbol: "none",
      lineStyle: {
        type: h === "Current Allocated" ? "solid" : "dotted",
        width: 2.5,
      },
      emphasis: {
        focus: "series",
      },
    });
  });
  const _color = ["#009E96", "#062587", "#AF69C5"];
  const _media = JSON.parse(JSON.stringify(media));
  _media[0].option.grid.bottom = "80";
  const option = {
    title: {
      text: title,
      ...titleStyle,
    },
    color: _color,
    textStyle,
    xAxis: {
      type: "category",
      data: dateList,
      axisTick: {
        alignWithLabel: true,
      },
    },
    tooltip: {
      trigger: "axis",
      confine: true,
    },
    legend: {
      ...legendStyle,
      data: [
        {
          name: "Current Allocated",
        },
        {
          name: "Projected Allocated",
          icon: "path://M335 1316 c-63 -28 -125 -122 -125 -191 0 -71 62 -164 127 -192 18 -7 58 -13 90 -13 72 0 125 28 168 88 27 39 30 52 30 117 0 65 -3 78 -30 117 -43 61 -95 88 -170 87 -33 0 -73 -6 -90 -13z, M1035 1313 c-76 -40 -115 -103 -115 -188 0 -121 85 -205 205 -205 121 0 205 84 205 205 0 84 -39 148 -112 186 -46 24 -140 25 -183 2z, M1714 1298 c-61 -42 -94 -102 -94 -173 0 -71 33 -131 94 -172 41 -28 57 -33 107 -33 76 0 115 16 161 68 76 84 76 190 0 274 -46 52 -85 68 -161 68 -50 0 -66 -5 -107 -32z",
        },
        {
          name: "Total Authorized",
          icon: "path://M335 1316 c-63 -28 -125 -122 -125 -191 0 -71 62 -164 127 -192 18 -7 58 -13 90 -13 72 0 125 28 168 88 27 39 30 52 30 117 0 65 -3 78 -30 117 -43 61 -95 88 -170 87 -33 0 -73 -6 -90 -13z, M1035 1313 c-76 -40 -115 -103 -115 -188 0 -121 85 -205 205 -205 121 0 205 84 205 205 0 84 -39 148 -112 186 -46 24 -140 25 -183 2z, M1714 1298 c-61 -42 -94 -102 -94 -173 0 -71 33 -131 94 -172 41 -28 57 -33 107 -33 76 0 115 16 161 68 76 84 76 190 0 274 -46 52 -85 68 -161 68 -50 0 -66 -5 -107 -32z",
        },
      ],
    },
    calculable: true,
    grid: {
      show: true,
      top: "70",
      bottom: "60",
    },
    yAxis: {
      type: "value",
      name: "$STORE Tokens Issued",
      nameLocation: "middle",
      nameGap: "80",
      nameTextStyle: {
        color: "#333",
      },
      nameTextStyle: {
        fontSize: 14,
      },
      axisLabel,
    },
    series: series,
    media: _media,
  };
  myChart.setOption(option);
  resizeChart(myChart);
}
function drawEChart2(data, title, headers) {
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-2"));
  const series = [];
  delete data?.Date;
  headers
    ?.filter(
      (h) =>
        h != "Date" &&
        !h?.includes("Total Allocated") &&
        !h?.includes("Emissions from Actual Token Sales")
    )
    ?.forEach((h) => {
      const _data = data?.[h];
      series.push({
        data: parseNumbers(_data),
        type: "line",
        name: h,
        smooth: false,
        smoothMonotone: "x",
        symbol: "none",
        symbolSize: 2,
        emphasis: {
          focus: "series",
        },
        lineStyle: {
          width: 2.5,
        },
      });
    });

  const option = {
    title: {
      text: title,
      ...titleStyle,
    },
    textStyle,
    color,
    xAxis: {
      type: "category",
      data: dateList,
      axisTick: {
        alignWithLabel: true,
      },
    },
    tooltip: {
      trigger: "axis",
      confine: true,
    },
    legend: {
      data: headers,
      ...legendStyle,
    },
    calculable: true,
    grid: {
      show: true,
      top: "60",
      bottom: "80",
    },
    yAxis: {
      type: "value",
      name: "Maximun inflation + emission per year",
      nameLocation: "middle",
      nameGap: "80",
      nameTextStyle: {
        color: "#333",
      },
      nameTextStyle: {
        fontSize: 14,
      },
      axisLabel,
    },
    series: series,
    media,
  };
  myChart.setOption(option);
  resizeChart(myChart);
}
function drawEChart1(data, title, headers) {
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-1"));
  const series = [];
  headers?.forEach((h) => {
    const _data = data?.[h];
    series.push({
      data: parseNumbers(_data),
      type: "line",
      name: h,
      smooth: true,
      smoothMonotone: "x",
      symbol: "none",
      symbolSize: 2,
      stack: "Total",
      areaStyle: {
        opacity: 0.5,
      },
      emphasis: {
        focus: "series",
      },
    });
  });
  const _color = JSON.parse(JSON.stringify(color));
  _color[0] = "#dfdf02";
  const option = {
    title: {
      text: title,
      ...titleStyle,
    },
    textStyle,
    color: _color,
    xAxis: {
      type: "category",
      data: dateList?.map((date) => date?.replace(/\,/g, "-")),
      axisTick: {
        alignWithLabel: true,
      },
    },
    tooltip: {
      trigger: "axis",
      confine: true,
    },
    legend: {
      data: headers,
      bottom: "0",
      itemGap: 15,
      textStyle: {
        fontSize: 12,
        fontFamily: "sans-serif",
        color: "#6e7079e8",
      },
    },
    calculable: true,
    grid: {
      show: true,
      top: "80",
      bottom: "80",
    },
    yAxis: {
      type: "value",
      name: "Cumulative $STORE Tokens",
      nameLocation: "middle",
      nameGap: "80",
      nameTextStyle: {
        color: "#333",
      },
      nameTextStyle: {
        fontSize: 14,
      },
      axisLabel,
    },
    series: series,
    media,
  };
  myChart.setOption(option);
  resizeChart(myChart);
}

$( document ).ready(function() {
  // drawEChart1
$.get(googleSheetUrl + "0&single=true&output=csv", function (csvStr) {
  // parse data using Papa Parse
  let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false,
  })?.data;
  const title = data?.[0]?.[0];
  let headers = data?.[1];
  data = data?.slice(2);
  const array_data = [];

  // prepapre data
  headers?.forEach((h) => {
    const index = headers?.findIndex((header) => header === h);
    const _d = [];
    data?.forEach((d) => {
      _d.push(d[index]);
    });
    array_data[h] = _d;
  });
  headers = headers?.slice(1);
  // draw data
  drawEChart1(array_data, title, headers);
});

// drawEChart2
$.get(googleSheetUrl + "1694942319&single=true&output=csv", function (csvStr) {
  // parse data using Papa Parse
  let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false,
  })?.data;
  const title = data?.[0]?.[1];
  const array_data = [];
  array_data["Date"] = data?.[2]?.slice(2);
  data = data?.slice(3);

  // prepapre data
  data?.forEach((d) => {
    array_data[d[1]] = d.slice(2);
  });
  const headers = Object.keys(array_data);
  // draw EChart 2
  drawEChart2(array_data, title, headers);
});

// drawEChart3
$.get(googleSheetUrl + "1834631508&single=true&output=csv", function (csvStr) {
  // parse data using Papa Parse
  let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false,
  })?.data;
  const title = data?.[0]?.[0];
  let headers = data?.[1];
  data = data?.slice(2);
  const array_data = [];

  // prepapre data
  headers?.forEach((h) => {
    const index = headers?.findIndex((header) => header === h);
    const _d = [];
    data?.forEach((d) => {
      _d.push(d[index]);
    });
    array_data[h] = _d;
  });
  headers = headers?.slice(1);

  // draw data
  drawEChart3(array_data, title, headers);
});

// drawEChart4
$.get(googleSheetUrl + "1895040396&single=true&output=csv", function (csvStr) {
  // parse data using Papa Parse
  let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false,
  })?.data;
  const title = data?.[0]?.[0];
  let headers = data?.[1];
  data = data?.slice(2);
  const array_data = [];

  // prepapre data
  headers?.forEach((h) => {
    const index = headers?.findIndex((header) => header === h);
    const _d = [];
    data?.forEach((d) => {
      _d.push(d[index]);
    });
    array_data[h || "Date"] = _d;
  });

  headers = headers?.slice(1)?.sort((a, b) => a?.localeCompare(b?.firstname));

  // draw data
  drawEChart4(array_data, title, headers);
});

// drawEChart5
$.get(googleSheetUrl + "694509505&single=true&output=csv", function (csvStr) {
  // parse data using Papa Parse
  let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false,
  })?.data;
  const title = data?.[0]?.[0];
  let headers = data?.[1];
  data = data?.slice(2);
  const array_data = [];

  // prepapre data
  headers?.forEach((h) => {
    const index = headers?.findIndex((header) => header === h);
    const _d = [];
    data?.forEach((d) => {
      _d.push(d[index]);
    });
    array_data[h || "Date"] = _d;
  });
  headers = headers?.slice(1)?.sort((a, b) => a?.localeCompare(b?.firstname));

  // draw data
  drawEChart5(array_data, title, headers);
});
// drawEChart6
$.get(googleSheetUrl + "476815357&single=true&output=csv", function (csvStr) {
  // parse data using Papa Parse
  let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false,
  })?.data;
  const title = data?.[0]?.[1];
  const array_data = [];
  array_data["Date"] = data?.[2]?.slice(2);
  data = data?.slice(1);
  // prepapre data
  data?.forEach((d) => {
    if(d[1] === "Rewards to STORE Foundation (25%)"){
      array_data["Rewards to Foundation"] = d.slice(2);
    } else if(d[1] === "Rewards to Miners and Voters (70%)"){
      array_data["Rewards to Miners and Voters"] = d.slice(2);
    } else if(d[1] === "Rewards to Markets (5%)"){
      array_data["Rewards to Markets"] = d.slice(2);
    } else{
      array_data[d[1]] = d.slice(2);
    }

  });
  const headers = Object.keys(array_data);
  // draw EChart 2
  drawEChart6(array_data, title, headers);
});

$.get(googleSheetUrl + "1709681637&single=true&output=csv", function (csvStr) {
  // parse data using Papa Parse
  let data = Papa.parse(csvStr, {
    skipEmptyLines: true,
    header: false,
  })?.data;
  const title = data?.[0]?.[0];
  let headers = data?.[1];
  data = data?.slice(2);
  const array_data = [];
  const dateIndex = headers?.findIndex(
    (header) => header === "Date based on block height"
  );
  data = data?.filter((d) => d[dateIndex] <= 2038);
  // prepapre data
  headers?.forEach((h) => {
    const index = headers?.findIndex((header) => header === h);
    const _d = [];
    data?.forEach((d) => {
      _d.push(d[index]);
    });
    array_data[h] = _d;
  });
  headers = headers;
  // draw data
  drawEChart7(array_data, title, headers);
});
});

