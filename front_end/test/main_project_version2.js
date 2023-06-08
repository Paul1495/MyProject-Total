const colorGrid = "#516361";
const fontFamily = "ChakraPetch,sans-serif";
const colorText = "#7defe6"; //Color for Title, ArgumentAxis, ValueAxis, Legend
const colorHighAver = "rgba(255, 159, 12, 0.65)";
const colorLowAver = "rgba(168, 182, 188, 0.65)";
const colorPaletteChart = [
  "rgba(48, 190, 255, 0.65)",
  "rgba(255, 96, 96, 0.65)",
  "rgba(30, 204, 51, 0.65)",
  "rgba(249, 232, 13, 0.65)",
];

$(() => {
  const highAverage = 70;
  const lowAverage = 50;
  $("#chart2").dxChart({
    dataSource,
    palette: colorPaletteChart,
    commonSeriesSettings: {
      argumentField: "WorkDate",
      valueField: "TotalQty",
      type: "bar",
      label: {
        visible: false,
      },
    },
    size: {
      height: 250,
    },
    commonAxisSettings: {
      grid: {
        color: colorGrid,
        opacity: "25%",
      },
    },
    argumentAxis: {
      label: {
        font: {
          color: "#7defe6",
          family: fontFamily,
        },
      },
    },
    customizeLabel(e) {
      if (
        e.value ===
        dataSource
          .filter((x) => x.Factory === e.data.Factory)
          .map((x) => x.TotalQty)
          .sort((a, b) => b - a)[0]
      ) {
        return {
          visible: true,
          //backgroundColor: '#ff7c7c',
          customizeText() {
            return `${e.data.Factory} - Highest - ${this.valueText}`;
          },
        };
      }
      if (
        e.value ===
        dataSource
          .filter((x) => x.Factory === e.data.Factory)
          .map((x) => x.TotalQty)
          .sort((a, b) => a - b)[0]
      ) {
        return {
          visible: true,
          //backgroundColor: '#8c8cff',
          customizeText() {
            return `${e.data.Factory} - Lowest - ${this.valueText}`;
          },
        };
      }
      return null;
    },
    valueAxis: {
      label: {
        customizeText() {
          return `${this.valueText}`;
        },
        font: {
          color: colorText,
          family: fontFamily,
        },
      },
    },
    seriesTemplate: {
      nameField: "Factory",
    },
    legend: {
      visible: true,
      horizontalAlignment: "center",
      verticalAlignment: "bottom",
      font: {
        color: colorText,
        family: fontFamily,
      },
      itemTextPosition: "right",
      margin: {
        top: 20,
      },
      markerSize: 20,
    },
  });
  $("#chart").dxChart({
    dataSource,
    palette: colorPaletteChart,
    commonSeriesSettings: {
      argumentField: "WorkDate",
      valueField: "Rate",
      type: "line",
      label: {
        visible: false,
      },
    },
    size: {
      height: 250,
    },
    commonAxisSettings: {
      grid: {
        color: colorGrid,
        opacity: "25%",
      },
    },
    argumentAxis: {
      label: {
        font: {
          color: colorText,
          family: fontFamily,
        },
      },
    },
    customizeLabel(e) {
      if (
        e.value ===
        dataSource
          .filter((x) => x.Factory === e.data.Factory)
          .map((x) => x.Rate)
          .sort((a, b) => b - a)[0]
      ) {
        return {
          visible: true,
          //backgroundColor: '#ff7c7c',
          customizeText() {
            return `${e.data.Factory} - Highest - ${this.valueText}%`;
          },
        };
      }
      if (
        e.value ===
        dataSource
          .filter((x) => x.Factory === e.data.Factory)
          .map((x) => x.Rate)
          .sort((a, b) => a - b)[0]
      ) {
        return {
          visible: true,
          //backgroundColor: '#8c8cff',
          customizeText() {
            return `${e.data.Factory} - Lowest - ${this.valueText}%`;
          },
        };
      }
      return null;
    },
    valueAxis: {
      visualRange: {
        startValue: null,
      },
      maxValueMargin: 0.01,
      label: {
        customizeText() {
          return `${this.valueText}%`;
        },
        font: {
          color: colorText,
          family: fontFamily,
        },
      },
      constantLines: [
        {
          label: {
            text: "Low Average",
            font: {
              family: fontFamily,
            },
          },
          width: 2,
          value: lowAverage,
          color: colorLowAver,
          dashStyle: "dash",
        },
        {
          label: {
            text: "High Average",
            font: {
              family: fontFamily,
            },
          },
          width: 2,
          value: highAverage,
          color: colorHighAver,
          dashStyle: "dash",
        },
      ],
    },
    seriesTemplate: {
      nameField: "Factory",
    },
    legend: {
      visible: false,
    },
  });
});

function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 10000) {
    var suffixes = ["", "K", "M", "B", "T"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = "";
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      );
      var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}

const dataYearTotalVNA = 50000000;
const dataYearTargetVNA = 10000000000;
const dailyQuantityVNA = 70000;
$("#yearTotalVNA").text(`${abbreviateNumber(dataYearTotalVNA)}`);
$("#yearTargetVNA").text(`${abbreviateNumber(dataYearTargetVNA)}`);
$("#dailyQuantityVNA").text(`${abbreviateNumber(dailyQuantityVNA)}`);

const dataYearTotalVNE = 45500000;
const dataYearTargetVNE = 9120000000;
const dailyQuantityVNE = 75000;
$("#yearTotalVNE").text(`${abbreviateNumber(dataYearTotalVNE)}`);
$("#yearTargetVNE").text(`${abbreviateNumber(dataYearTargetVNE)}`);
$("#dailyQuantityVNE").text(`${abbreviateNumber(dailyQuantityVNE)}`);

const dataYearTotalVNC = 56700000;
const dataYearTargetVNC = 12000000000;
const dailyQuantityVNC = 63000;
$("#yearTotalVNC").text(`${abbreviateNumber(dataYearTotalVNC)}`);
$("#yearTargetVNC").text(`${abbreviateNumber(dataYearTargetVNC)}`);
$("#dailyQuantityVNC").text(`${abbreviateNumber(dailyQuantityVNC)}`);

const dataYearTotalVND = 50000000;
const dataYearTargetVND = 10000000000;
const dailyQuantityVND = 70000;
$("#yearTotalVND").text(`${abbreviateNumber(dataYearTotalVND)}`);
$("#yearTargetVND").text(`${abbreviateNumber(dataYearTargetVND)}`);
$("#dailyQuantityVND").text(`${abbreviateNumber(dailyQuantityVND)}`);

const dataSource = JSON.parse(
  `[{"Factory":"VNA","WorkDate":"2023-05-03","WorkTime":2140553.0000,"TotalSam":1304863.2600,"TotalQty":101221,"Rate":60.96},{"Factory":"VND","WorkDate":"2023-05-03","WorkTime":974942.0000,"TotalSam":596840.3310,"TotalQty":105409,"Rate":61.22},{"Factory":"VNC","WorkDate":"2023-05-03","WorkTime":1715739.0000,"TotalSam":1004763.0530,"TotalQty":91348,"Rate":58.56},{"Factory":"VNE","WorkDate":"2023-05-03","WorkTime":333444.0000,"TotalSam":205492.2930,"TotalQty":15672,"Rate":61.63},{"Factory":"VNA","WorkDate":"2023-05-04","WorkTime":2167123.0000,"TotalSam":1356305.7880,"TotalQty":105183,"Rate":62.59},{"Factory":"VNE","WorkDate":"2023-05-04","WorkTime":362857.0000,"TotalSam":217013.4300,"TotalQty":16784,"Rate":59.81},{"Factory":"VNC","WorkDate":"2023-05-04","WorkTime":1762876.0000,"TotalSam":1035350.2800,"TotalQty":94349,"Rate":58.73},{"Factory":"VND","WorkDate":"2023-05-04","WorkTime":1040878.0000,"TotalSam":609771.1110,"TotalQty":109311,"Rate":58.58},{"Factory":"VNA","WorkDate":"2023-05-05","WorkTime":2181357.0000,"TotalSam":1398663.6130,"TotalQty":108391,"Rate":64.12},{"Factory":"VNE","WorkDate":"2023-05-05","WorkTime":370734.0000,"TotalSam":224608.2090,"TotalQty":17873,"Rate":60.58},{"Factory":"VNC","WorkDate":"2023-05-05","WorkTime":1766891.0000,"TotalSam":1058132.9860,"TotalQty":96098,"Rate":59.89},{"Factory":"VND","WorkDate":"2023-05-05","WorkTime":1044655.0000,"TotalSam":647843.8650,"TotalQty":117427,"Rate":62.02},{"Factory":"VNC","WorkDate":"2023-05-06","WorkTime":1688824.0000,"TotalSam":1026364.3830,"TotalQty":90842,"Rate":60.77},{"Factory":"VNE","WorkDate":"2023-05-06","WorkTime":367980.0000,"TotalSam":211662.7500,"TotalQty":17193,"Rate":57.52},{"Factory":"VNA","WorkDate":"2023-05-06","WorkTime":2159976.0000,"TotalSam":1406835.8880,"TotalQty":109263,"Rate":65.13},{"Factory":"VND","WorkDate":"2023-05-06","WorkTime":1016791.0000,"TotalSam":656147.0980,"TotalQty":117807,"Rate":64.53},{"Factory":"VNA","WorkDate":"2023-05-08","WorkTime":2326839.0000,"TotalSam":1493727.7270,"TotalQty":116362,"Rate":64.20},{"Factory":"VND","WorkDate":"2023-05-08","WorkTime":988127.0000,"TotalSam":601963.1650,"TotalQty":111281,"Rate":60.92},{"Factory":"VNC","WorkDate":"2023-05-08","WorkTime":1763017.0000,"TotalSam":1002489.6150,"TotalQty":88962,"Rate":56.86},{"Factory":"VNE","WorkDate":"2023-05-08","WorkTime":365828.0000,"TotalSam":220994.1770,"TotalQty":17963,"Rate":60.41},{"Factory":"VND","WorkDate":"2023-05-09","WorkTime":1013766.0000,"TotalSam":639041.7700,"TotalQty":116982,"Rate":63.04},{"Factory":"VNC","WorkDate":"2023-05-09","WorkTime":1816856.0000,"TotalSam":1065401.8660,"TotalQty":96075,"Rate":58.64},{"Factory":"VNE","WorkDate":"2023-05-09","WorkTime":369735.0000,"TotalSam":197705.5840,"TotalQty":15843,"Rate":53.47},{"Factory":"VNA","WorkDate":"2023-05-09","WorkTime":2341751.0000,"TotalSam":1521810.9960,"TotalQty":118703,"Rate":64.99},{"Factory":"VNA","WorkDate":"2023-05-10","WorkTime":2338390.0000,"TotalSam":1519067.2950,"TotalQty":118791,"Rate":64.96},{"Factory":"VND","WorkDate":"2023-05-10","WorkTime":960970.0000,"TotalSam":627257.8550,"TotalQty":115219,"Rate":65.27},{"Factory":"VNC","WorkDate":"2023-05-10","WorkTime":1796631.0000,"TotalSam":1037078.6620,"TotalQty":92231,"Rate":57.72},{"Factory":"VNE","WorkDate":"2023-05-10","WorkTime":364956.0000,"TotalSam":210454.3540,"TotalQty":17059,"Rate":57.67},{"Factory":"VNA","WorkDate":"2023-05-11","WorkTime":2338393.0000,"TotalSam":1530548.3570,"TotalQty":118650,"Rate":65.45},{"Factory":"VND","WorkDate":"2023-05-11","WorkTime":982911.0000,"TotalSam":653091.6070,"TotalQty":119786,"Rate":66.44},{"Factory":"VNC","WorkDate":"2023-05-11","WorkTime":1800523.0000,"TotalSam":1092083.1370,"TotalQty":96046,"Rate":60.65},{"Factory":"VNE","WorkDate":"2023-05-11","WorkTime":361957.0000,"TotalSam":211708.3710,"TotalQty":17191,"Rate":58.49},{"Factory":"VNA","WorkDate":"2023-05-12","WorkTime":2332451.0000,"TotalSam":1521210.5010,"TotalQty":118591,"Rate":65.22},{"Factory":"VND","WorkDate":"2023-05-12","WorkTime":979486.0000,"TotalSam":641670.7890,"TotalQty":115739,"Rate":65.51},{"Factory":"VNC","WorkDate":"2023-05-12","WorkTime":1810854.0000,"TotalSam":1096720.9360,"TotalQty":97041,"Rate":60.56},{"Factory":"VNE","WorkDate":"2023-05-12","WorkTime":362324.0000,"TotalSam":205202.5000,"TotalQty":16669,"Rate":56.64},{"Factory":"VNA","WorkDate":"2023-05-13","WorkTime":2304989.0000,"TotalSam":1507922.5260,"TotalQty":117984,"Rate":65.42},{"Factory":"VNC","WorkDate":"2023-05-13","WorkTime":1681882.0000,"TotalSam":1036415.7270,"TotalQty":90326,"Rate":61.62},{"Factory":"VND","WorkDate":"2023-05-13","WorkTime":929150.0000,"TotalSam":624993.5830,"TotalQty":111707,"Rate":67.27},{"Factory":"VNE","WorkDate":"2023-05-13","WorkTime":355806.0000,"TotalSam":221787.9330,"TotalQty":17848,"Rate":62.33},{"Factory":"VNC","WorkDate":"2023-05-15","WorkTime":1825110.0000,"TotalSam":1105235.8080,"TotalQty":94871,"Rate":60.56},{"Factory":"VNE","WorkDate":"2023-05-15","WorkTime":344709.0000,"TotalSam":209500.9180,"TotalQty":16818,"Rate":60.78},{"Factory":"VND","WorkDate":"2023-05-15","WorkTime":976049.0000,"TotalSam":628154.3010,"TotalQty":110609,"Rate":64.36},{"Factory":"VNA","WorkDate":"2023-05-15","WorkTime":2335818.0000,"TotalSam":1467638.2370,"TotalQty":115738,"Rate":62.83},{"Factory":"VNA","WorkDate":"2023-05-16","WorkTime":2329019.0000,"TotalSam":1487342.7040,"TotalQty":117494,"Rate":63.86},{"Factory":"VNC","WorkDate":"2023-05-16","WorkTime":1814697.0000,"TotalSam":1097146.4740,"TotalQty":93504,"Rate":60.46},{"Factory":"VNE","WorkDate":"2023-05-16","WorkTime":361954.0000,"TotalSam":215097.7430,"TotalQty":17528,"Rate":59.43},{"Factory":"VND","WorkDate":"2023-05-16","WorkTime":998483.0000,"TotalSam":634982.9630,"TotalQty":110438,"Rate":63.59},{"Factory":"VNC","WorkDate":"2023-05-17","WorkTime":1745260.0000,"TotalSam":1053271.2480,"TotalQty":89314,"Rate":60.35},{"Factory":"VND","WorkDate":"2023-05-17","WorkTime":1039991.0000,"TotalSam":657666.6260,"TotalQty":117846,"Rate":63.24},{"Factory":"VNA","WorkDate":"2023-05-17","WorkTime":2321774.0000,"TotalSam":1467016.1990,"TotalQty":115930,"Rate":63.19},{"Factory":"VNE","WorkDate":"2023-05-17","WorkTime":353430.0000,"TotalSam":211199.8880,"TotalQty":17157,"Rate":59.76},{"Factory":"VNA","WorkDate":"2023-05-18","WorkTime":1092056.0000,"TotalSam":693190.4300,"TotalQty":54572,"Rate":63.48},{"Factory":"VNC","WorkDate":"2023-05-18","WorkTime":791444.0000,"TotalSam":382733.9150,"TotalQty":31951,"Rate":48.36},{"Factory":"VND","WorkDate":"2023-05-18","WorkTime":452923.0000,"TotalSam":278428.8980,"TotalQty":51184,"Rate":61.47},{"Factory":"VNE","WorkDate":"2023-05-18","WorkTime":148460.0000,"TotalSam":93606.2570,"TotalQty":7425,"Rate":63.05},{"Factory":"VND","WorkDate":"2023-05-19","WorkTime":1043501.0000,"TotalSam":700539.0560,"TotalQty":124870,"Rate":67.13},{"Factory":"VNA","WorkDate":"2023-05-19","WorkTime":2334694.0000,"TotalSam":1470846.8420,"TotalQty":116041,"Rate":63.00},{"Factory":"VNC","WorkDate":"2023-05-19","WorkTime":1702348.0000,"TotalSam":1061478.7220,"TotalQty":88640,"Rate":62.35},{"Factory":"VNE","WorkDate":"2023-05-19","WorkTime":368374.0000,"TotalSam":231442.6440,"TotalQty":18453,"Rate":62.83},{"Factory":"VNA","WorkDate":"2023-05-20","WorkTime":2137744.0000,"TotalSam":1368036.9100,"TotalQty":109159,"Rate":63.99},{"Factory":"VNC","WorkDate":"2023-05-20","WorkTime":1676770.0000,"TotalSam":1029698.3450,"TotalQty":85520,"Rate":61.41},{"Factory":"VNE","WorkDate":"2023-05-20","WorkTime":357211.0000,"TotalSam":221614.9720,"TotalQty":17820,"Rate":62.04},{"Factory":"VND","WorkDate":"2023-05-20","WorkTime":959666.0000,"TotalSam":664155.9100,"TotalQty":117488,"Rate":69.21},{"Factory":"VNC","WorkDate":"2023-05-22","WorkTime":1705031.0000,"TotalSam":1021068.3030,"TotalQty":84114,"Rate":59.89},{"Factory":"VND","WorkDate":"2023-05-22","WorkTime":988160.0000,"TotalSam":646632.9500,"TotalQty":112476,"Rate":65.44},{"Factory":"VNA","WorkDate":"2023-05-22","WorkTime":2337729.0000,"TotalSam":1434616.1730,"TotalQty":116513,"Rate":61.37},{"Factory":"VNE","WorkDate":"2023-05-22","WorkTime":359555.0000,"TotalSam":213464.6140,"TotalQty":16896,"Rate":59.37},{"Factory":"VNC","WorkDate":"2023-05-23","WorkTime":1695789.0000,"TotalSam":1030217.0890,"TotalQty":84525,"Rate":60.75},{"Factory":"VNE","WorkDate":"2023-05-23","WorkTime":363648.0000,"TotalSam":201058.0020,"TotalQty":16140,"Rate":55.29},{"Factory":"VND","WorkDate":"2023-05-23","WorkTime":1010173.0000,"TotalSam":626795.5900,"TotalQty":111456,"Rate":62.05},{"Factory":"VNA","WorkDate":"2023-05-23","WorkTime":2336675.0000,"TotalSam":1457698.5890,"TotalQty":117356,"Rate":62.38},{"Factory":"VNA","WorkDate":"2023-05-24","WorkTime":2294825.0000,"TotalSam":1435242.6430,"TotalQty":117185,"Rate":62.54},{"Factory":"VNC","WorkDate":"2023-05-24","WorkTime":1698327.0000,"TotalSam":1032110.9000,"TotalQty":84471,"Rate":60.77},{"Factory":"VNE","WorkDate":"2023-05-24","WorkTime":352631.0000,"TotalSam":210370.5080,"TotalQty":16824,"Rate":59.66},{"Factory":"VND","WorkDate":"2023-05-24","WorkTime":995147.0000,"TotalSam":593705.5710,"TotalQty":101136,"Rate":59.66},{"Factory":"VNC","WorkDate":"2023-05-25","WorkTime":1718561.0000,"TotalSam":1031267.6390,"TotalQty":84633,"Rate":60.01},{"Factory":"VND","WorkDate":"2023-05-25","WorkTime":987556.0000,"TotalSam":639497.4960,"TotalQty":109127,"Rate":64.76},{"Factory":"VNE","WorkDate":"2023-05-25","WorkTime":345519.0000,"TotalSam":200376.9350,"TotalQty":15998,"Rate":57.99},{"Factory":"VNA","WorkDate":"2023-05-25","WorkTime":2307656.0000,"TotalSam":1471801.7480,"TotalQty":121744,"Rate":63.78},{"Factory":"VNA","WorkDate":"2023-05-26","WorkTime":2317593.0000,"TotalSam":1495031.8710,"TotalQty":124515,"Rate":64.51},{"Factory":"VND","WorkDate":"2023-05-26","WorkTime":955411.0000,"TotalSam":602930.9930,"TotalQty":104901,"Rate":63.11},{"Factory":"VNC","WorkDate":"2023-05-26","WorkTime":1688954.0000,"TotalSam":1018481.7720,"TotalQty":83123,"Rate":60.30},{"Factory":"VNE","WorkDate":"2023-05-26","WorkTime":353851.0000,"TotalSam":200331.1440,"TotalQty":16234,"Rate":56.61},{"Factory":"VNA","WorkDate":"2023-05-27","WorkTime":2119702.0000,"TotalSam":1396425.6580,"TotalQty":116080,"Rate":65.88},{"Factory":"VND","WorkDate":"2023-05-27","WorkTime":888216.0000,"TotalSam":566484.5080,"TotalQty":96744,"Rate":63.78},{"Factory":"VNC","WorkDate":"2023-05-27","WorkTime":1595024.0000,"TotalSam":942734.2150,"TotalQty":78453,"Rate":59.10},{"Factory":"VNE","WorkDate":"2023-05-27","WorkTime":340060.0000,"TotalSam":195807.2590,"TotalQty":15856,"Rate":57.58},{"Factory":"VND","WorkDate":"2023-05-29","WorkTime":931725.0000,"TotalSam":618244.5490,"TotalQty":112071,"Rate":66.35},{"Factory":"VNE","WorkDate":"2023-05-29","WorkTime":337151.0000,"TotalSam":188270.3490,"TotalQty":15497,"Rate":55.84},{"Factory":"VNC","WorkDate":"2023-05-29","WorkTime":1698182.0000,"TotalSam":962368.5860,"TotalQty":78870,"Rate":56.67},{"Factory":"VNA","WorkDate":"2023-05-29","WorkTime":2318070.0000,"TotalSam":1456448.5740,"TotalQty":121905,"Rate":62.83},{"Factory":"VND","WorkDate":"2023-05-30","WorkTime":956942.0000,"TotalSam":626286.0410,"TotalQty":110773,"Rate":65.45},{"Factory":"VNC","WorkDate":"2023-05-30","WorkTime":1696180.0000,"TotalSam":936422.9790,"TotalQty":77171,"Rate":55.21},{"Factory":"VNE","WorkDate":"2023-05-30","WorkTime":343169.0000,"TotalSam":194570.6670,"TotalQty":16251,"Rate":56.70},{"Factory":"VNA","WorkDate":"2023-05-30","WorkTime":2290208.0000,"TotalSam":1452369.9600,"TotalQty":121745,"Rate":63.42},{"Factory":"VNC","WorkDate":"2023-05-31","WorkTime":1678844.0000,"TotalSam":890984.1100,"TotalQty":72965,"Rate":53.07},{"Factory":"VNE","WorkDate":"2023-05-31","WorkTime":334415.0000,"TotalSam":193831.6980,"TotalQty":15916,"Rate":57.96},{"Factory":"VND","WorkDate":"2023-05-31","WorkTime":975665.0000,"TotalSam":622910.4190,"TotalQty":110094,"Rate":63.84},{"Factory":"VNA","WorkDate":"2023-05-31","WorkTime":2285931.0000,"TotalSam":1438358.4860,"TotalQty":121414,"Rate":62.92}]`
);
