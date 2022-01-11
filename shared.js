//#region - static code region, shared code between charts, will go inside of <head> tag section on webflow.

const googleSheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWQ-hIY86B-xRlAoLPOQc1L0-Dmb59AUtp-_declUDUtr2FEOGjQgDBGP9rJbmiqQcVocGRV1ugxEr/pub?gid=";
const color = [
  "#F54A4A",
  "#0071C6",
  "#DE2F8F",
  "#AF52C7",
  "#254294",
  "#12BC81",
];
const textStyle = {
  fontFamily: "Montserrat",
  fontSize: 10,
};
const titleStyle = {
    textAlign: "center",
    textVerticalAlign: "auto",
    left: "50%",
    top: "4%",
    textStyle: {
      lineHeight: 24,
      overflow: 'break',
    }
}
const legendStyle = {
    bottom: "0",
    itemGap: 15,
    textStyle: {
      fontSize: 11,
      fontFamily: "sans-serif",
      color: "#6e7079e8",
    }
}
const axisLabel = {
    formatter: function (value, index) {
      const ranges = [
        { divider: 1e6, suffix: 'M' },
        { divider: 1e3, suffix: 'k' }
      ];
      for (var i = 0; i < ranges.length; i++) {
        if (value >= ranges[i].divider) {
           return (value / ranges[i].divider).toString() + ranges[i].suffix;
        }
       }
     return value;
  }
}
const media = [
  {
    query: {
      maxAspectRatio: 1, // when length-to-width ratio is less than 1
    },
    option: {
      title: {
        textStyle: {
          width: '300',
          fontSize: 13
        }
      },
      tooltip: {
        textStyle: {
          overflow: 'truncate',
          fontSize: 10
        }
      },
      grid: {
        show: true,
        top: "85",
        left: 55,
        right: 20,
        bottom: "185",
      },
    },
  },
  {
    query: {
      minWidth: 600,
    },
    option: {
      title: {
        textStyle: {
          width: '600',
          fontSize: 16
        }
      },
      tooltip: {
        textStyle: {
          overflow: 'truncate',
          fontSize: 12
        }
      },
      grid: {
        right: 50,
        bottom: "110",
      },
    },
  },
  {
    query: {
      minWidth: 900,
    },
    option: {
      title: {
        textStyle: {
          width: '900',
          fontSize: 18
        }
      },
      tooltip: {
        textStyle: {
          overflow: 'truncate',
          fontSize: 14
        }
      },
      grid: {
        right: 50,
        bottom: "80",
      },
    },
  },
];
function parseNumbers(values) {
  return values?.map((d) => parseFloat(d?.replace(/\,/g,"")?.replace(/\$/g,"")));
}
function resizeChart(chart){
  $(window).on('resize', function(){
    if(chart != null && chart != undefined){
      chart.resize();
    }
});
}

//#endregion - static code region.
