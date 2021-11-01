      // Initialize the echarts instance based on the prepared dom
      var myChart = echarts.init(document.getElementById('main'),'dark');

      $.get('data.csv', function (csvStr) {
          const data = Papa.parse(csvStr).data?.slice(1).sort(function(a,b){
            return Number(new Date(a[0])) - Number(new Date(b[0]));
           })?.filter(d => d[0]);
           const data1 = JSON.parse(JSON.stringify(data))?.map(d => {
            d[0] = d[0];
            delete d[2];
            return [d[0],d[1]];
          });
          const data2 =  JSON.parse(JSON.stringify(data))?.map(d => {
            d[0] = d[0];
            delete d[1];
            return [d[0],d[2]];
          });
            // Specify the configuration items and data for the chart
          var option = {
            color: ['#4172C3','#FF990B'],
            xAxis: {
              type: 'category',
            },
            tooltip: {
              trigger: 'axis',
            },
            calculable : true,
            legend: {},
            grid: {show: true},
            yAxis: [
              {
                type: 'value',
                name: 'Supply',
                showGrid: true,
              },
              {
                type: 'value',
                name: 'Days',
                showGrid: true,
                max: function (value) {
                  return value.max + 20;
                },
                axisLabel:{
                  formatter: function (value, index) {
                      return value+"%";
                  },
              },
              }
            ],
            series: [
              {
                data: data1,
                type: 'line',
                smooth: true,
                symbol: 'none',
                yAxisIndex: 0,
                lineStyle: {
                  width: 3,
                  color: '#4172C3'
                }
              },
              {
                data: data2,
                type: 'line',
                smooth: true,
                symbol: 'none',
                yAxisIndex: 1,
                lineStyle: {
                  width: 3,
                  color: '#FF990B'
                },
                markPoint: {
                  data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                  ]
                },
                markLine: {
                  data: [{ type: 'average', name: 'Avg' }]
                }
              },
            ]
          };

      // Display the chart using the configuration items and data just specified.
      myChart.setOption(option);
      });

