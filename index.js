// Initialize the echarts instance based on the prepared dom

$.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vRQSNcmrLtblII19RSmwU6rE6qJVERfc1h-z62dqxptHs9eOurLTlhTGMo1SAVVXIVS3JYl8BBcpcvk/pub?gid=1497781994&single=true&output=csv", function (csvStr) {
  // Specify the configuration items and data for the chart
  const data = parseDataByColumns(csvStr);

  // draw EChart 1 - Title Ethereum's Historical and Projected Issuance Rate
  drawEChart1(data);
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
