// Initialize the echarts instance based on the prepared dom

$.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vRQSNcmrLtblII19RSmwU6rE6qJVERfc1h-z62dqxptHs9eOurLTlhTGMo1SAVVXIVS3JYl8BBcpcvk/pub?gid=1497781994&single=true&output=csv", function (csvStr) {
  // Specify the configuration items and data for the chart
  const data = parseDataByColumns(csvStr);
  // draw EChart 1 - Title Ethereum's Historical and Projected Issuance Rate
  drawEChart1(data);
});

$.get("data.csv", function (csvStr) {
  // Specify the configuration items and data for the chart
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
  // draw EChart 2
  drawEChart2(array_data,title,headers);
});

$.get("data-2.csv", function (csvStr) {
  // Specify the configuration items and data for the chart
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

$.get("data-3.csv", function (csvStr) {
  // Specify the configuration items and data for the chart
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
  // draw EChart 4
  drawEChart4(array_data,title,headers);
});
$.get("data-4.csv", function (csvStr) {
  // Specify the configuration items and data for the chart
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
  // draw EChart 5
  drawEChart5(array_data,title,headers);
});
$.get("data-5.csv", function (csvStr) {
  // Specify the configuration items and data for the chart
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
  // draw EChart 6
  drawEChart6(array_data,title,headers);
});
function parseDataByColumns(csvStr) {
  const rawData = Papa.parse(csvStr, {
    header: true,
  }).data;
  const data = rawData
    ?.sort(function (a, b) {
      return Number(new Date(a?.Date)) - Number(new Date(b?.Date));
    })
    ?.filter((d) => d?.Date);
  return data;
}
function parseNumbers(values){
  return values?.map((d) =>
    parseInt(d?.replaceAll(",", ""))
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
      symbol: "none",
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
    xAxis: {
      type: "category",
      data: dateList,
      name: 'Year #',
      nameLocation: 'middle',
      nameGap: '40',
      nameTextStyle: {
        color: '#333'
      }

    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: headers,
      bottom: '0%'
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
      nameGap: '70',
      nameTextStyle: {
        color: '#333'
      },
      axisLabel: {
        formatter: function (value, index) {
          return value/1000000;
      }
      }
    },
    series: series,
  };
  // Display the chart using the configuration items and data just specified.
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
        nameGap: index === 0 ?'50': '100',
        nameTextStyle: {
          color: '#333'
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
    xAxis: {
      type: "category",
      data: dateList,
      name: 'Year',
      nameLocation: 'middle',
      nameGap: '40',
      nameTextStyle: {
        color: '#333'
      }
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: headers,
      bottom: '0'
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
  // Display the chart using the configuration items and data just specified.
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
        type: h === 'Current Allocated' ? 'solid' :'dashed'
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
    xAxis: {
      type: "category",
      data: dateList,
      name: 'Year',
      nameLocation: 'middle',
      nameGap: '40',
      nameTextStyle: {
        color: '#333'
      }
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: headers,
      bottom: '0'
    },
    calculable: true,
    grid: {
      show: true,
      top: '70',
      bottom: '80',
    },
    yAxis: {
      type: 'value'
    },
    series: series,
  };
  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
}
function drawEChart3(data,title,headers){
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-3"));
  const series = [];
  delete data?.Date;
  headers?.filter(h => h != 'Date')?.forEach(h => {
    const _data = data?.[h];
    series.push({
      data: parseNumbers(_data),
      type: "line",
      name: h,
      smooth: true,
      smoothMonotone: "x",
      symbol: "none",
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
    xAxis: {
      type: "category",
      data: dateList,
      name: 'Year',
      nameLocation: 'middle',
      nameGap: '40',
      nameTextStyle: {
        color: '#333'
      }

    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: headers,
      bottom: '0%'
    },
    calculable: true,
    grid: {
      show: true,
      top: '60',
      bottom: '110',
    },
    yAxis: {
      type: 'value',
      name: 'maximun inflation + emission per year',
      nameLocation: 'middle',
      nameGap: '100',
      nameTextStyle: {
        color: '#333'
      }
    },
    series: series,
  };
  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
}
function drawEChart2(data,title,headers){
  const dateList = data?.Date;
  const myChart = echarts.init(document.getElementById("echarts-2"));
  const series = [];
  const color = ['#287AED','#F23B35','#FFB32C','#0D9E4E','#FF6221','#1EB5BD'];
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
      stack: 'Total',
      areaStyle: {
        opacity: 0.4,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: color[index]
          },
          {
            offset: 1,
            color: color[index]
          }
        ])
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
    xAxis: {
      type: "category",
      data: dateList,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: headers,
      bottom: '0'
    },
    calculable: true,
    grid: {
      show: true,
      top: '80'
    },
    yAxis: {
      type: 'value'
    },
    series: series,
  };

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
}
function drawEChart1(data){

  const dateList = JSON.parse(JSON.stringify(data))?.map((d) => d?.Date);
  const supplyList = JSON.parse(JSON.stringify(data))?.map((d) =>
    parseInt(d?.Supply?.replaceAll(",", ""))
  );
  const rateList = JSON.parse(JSON.stringify(data))?.map((d) =>
    parseInt(d?.["Issuance Rate"]?.replaceAll("%", ""))
  );
  const myChart = echarts.init(document.getElementById("echarts-1"), "dark");

  const option = {
    title: {
      text: "Ethereum's Historical and Projected Issuance Rate",
      textAlign: 'center',
      textVerticalAlign: 'auto',
      left: '50%',
      top: '4%'
    },
    color: ["#4172C3", "#FF990B"],
    xAxis: {
      type: "category",
      data: dateList,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Supply", "Days"],
      top: '10%'
    },
    calculable: true,
    grid: {
      show: true,
      top: '20%'
    },
    yAxis: [
      {
        type: "value",
        name: "Supply",
      },
      {
        type: "value",
        name: "Days",
        axisLabel: {
          formatter: function (value, index) {
            return value + "%";
          },
        },
      },
    ],
    series: [
      {
        data: supplyList,
        type: "line",
        name: "Supply",
        smooth: true,
        smoothMonotone: "x",
        symbol: "none",
        yAxisIndex: 0,
        emphasis: {
          focus: "series",
        },
        lineStyle: {
          width: 3,
          color: "#4172C3",
        },
      },
      {
        data: rateList,
        type: "line",
        id: "line2",
        name: "Days",
        step: false,
        smooth: false,
        smoothMonotone: "x",
        symbol: "none",
        yAxisIndex: 1,
        emphasis: {
          focus: "series",
        },
        lineStyle: {
          width: 3,
          color: "#FF990B",
        },
        markPoint: {
          data: [
            {
              yAxis: 13,
              xAxis: "9/23/2015",
              label: {
                width: 100,
                formatter: ["Homestead ", "(Block time increase)"].join("\n"),
              },
              symbolSize: [110, 40],
              symbolOffset: [0, 10],
            },
            {
              yAxis: 16,
              xAxis: "6/20/2016",
              label: {
                width: 100,
                formatter: ["DDOS"].join("\n"),
              },
              symbolSize: [40, 20],
              symbolOffset: [0, -15],
            },
            {
              yAxis: 15,
              xAxis: "10/27/2016",
              label: {
                width: 100,
                formatter: ["Difficulty Bomb"].join("\n"),
              },
              symbolSize: [80, 20],
              symbolOffset: [0, -15],
            },
            {
              yAxis: 6,
              xAxis: "10/21/2017",
              label: {
                width: 100,
                formatter: ["Byzantium","5>3 reward drop + bomb delay"].join("\n"),
              },
              symbolSize: [80, 20],
              symbolOffset: [0, 25],
            },
            {
              yAxis: 8,
              xAxis: "5/17/2018",
              label: {
                width: 100,
                formatter: ["Difficulty Bomb"].join("\n"),
              },
              symbolSize: [80, 20],
              symbolOffset: [0, -15],
            },
            {
              yAxis: 7,
              xAxis: "12/11/2018",
              label: {
                width: 100,
                formatter: ["Constantinople","3 > 2 reward drop + bomb delay"].join("\n"),
              },
              symbolSize: [80, 20],
              symbolOffset: [-40, 60],
            },
            {
              yAxis: 5,
              xAxis: "10/22/2019",
              label: {
                width: 100,
                formatter: ["Difficulty Bomb"].join("\n"),
              },
              symbolSize: [80, 20],
              symbolOffset: [0, 55],
            },
            {
              yAxis: 5,
              xAxis: "11/29/2019",
              label: {
                width: 100,
                formatter: ["Muir Glacier","(Bomb delay)"].join("\n"),
              },
              symbolSize: [80, 20],
              symbolOffset: [0, -45],
            },
            {
              yAxis: 5,
              xAxis: "7/27/2020",
              label: {
                width: 100,
                formatter: ["Eth2 Phase 0*","(Beacon Chain)"].join("\n"),
              },
              symbolSize: [80, 20],
              symbolOffset: [0, 5],
            },
            {
              yAxis: 6,
              xAxis: "4/20/2021",
              label: {
                width: 100,
                formatter: ["Eth2 Phase 1.5*","(Eth1 folded into Eth2)"].join("\n"),
              },
              symbolSize: [80, 20],
              symbolOffset: [0, -15],
            },
          ],
          label: {
            show: true,
            fontSize: 10,
            overflow: "breakAll",
          },
          itemStyle: {
            color: "#333333",
            opacity: 0.8,
          },
          symbol: "roundRect",
        },
      },
    ],
  };

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
}

