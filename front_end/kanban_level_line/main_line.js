const colorText = "#7defe6";
const colorBorder = "rgba(81, 99, 97, 0.25)";
const colorHeader = "rgba(125, 239, 230, 0.2)";
const fontText = "ChakraPetch,sans-serif";
const colorGrid = "#516361";
const colorPallete = ["#7defe6", "rgba(125, 239, 230, 0.2)"];

const description_data1 = [
  {
    Problem: "",
    Zdcode: "000020143667",
    SaleNo: "20143667",
    PlanQuantity: "Không có kế hoạch",
    ActualQuantity: 1,
    Rate: "",
    Noted: "NG",
  },
  {
    Problem: "",
    Zdcode: "000020143667",
    SaleNo: "20143667",
    PlanQuantity: "Không có kế hoạch",
    ActualQuantity: 1,
    Rate: "",
    Noted: "NG",
  },
  {
    Problem: "",
    Zdcode: "000020143667",
    SaleNo: "20143667",
    PlanQuantity: "Không có kế hoạch",
    ActualQuantity: 1,
    Rate: "",
    Noted: "NG",
  },
  {
    Problem: "",
    Zdcode: "000020143667",
    SaleNo: "20143667",
    PlanQuantity: 188,
    ActualQuantity: 92,
    Rate: "48.93%",
    Noted: "OK",
  },
  {
    Problem: "",
    Zdcode: "000020143667",
    SaleNo: "20143667",
    PlanQuantity: 129,
    ActualQuantity: 214,
    Rate: "165.89%",
    Noted: "OK",
  },
];

const columns_data1 = [
  {
    dataField: "Problem",
    caption: "Vấn đề",
  },
  {
    dataField: "SaleNo",
    caption: "Đơn sản xuất",
  },
  {
    dataField: "Zdcode",
    caption: "Mã đơn sản xuất",
  },
  {
    dataField: "PlanQuantity",
    caption: "Kế hoạch",
  },
  {
    dataField: "ActualQuantity",
    caption: "Thực tế",
  },
  {
    dataField: "Rate",
    caption: "Tỷ lệ",
  },
  {
    dataField: "Noted",
    caption: "Ghi chú",
  },
];

const grid1 = $("#grid1")
  .dxDataGrid({
    dataSource: description_data1,
    columns: columns_data1,
    wordWrapEnabled: true,
    // showBorders: true,
    showRowLines: true,
    onRowPrepared: function (e) {
      if (e.rowType == "header") {
        e.rowElement.css("background", colorHeader);
        e.rowElement.css("font-family", fontText);
        return;
      }
    },
    onCellPrepared: function (e) {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("color", colorText);
        e.cellElement.css("font-weight", "bold");
        e.cellElement.css("border-color", colorBorder);
      }
      if (e.rowType == "data") {
        e.cellElement.css("color", colorText);
        e.cellElement.css("border-color", colorBorder);
        e.cellElement.css("font-family", fontText);
        // if (e.column.valueField === "NG") {
        //   e.cellElement.css("background", "rgba(125, 239, 230, 0.2)");
        // }
      }
    },
  })
  .dxDataGrid("instance");

const description_data2 = [
  {
    Zdcode: "20143667",
    Name: "Mr.A",
    Quantity: 300,
    Sam: 400,
    GxNo: "697",
    Rate: "75%",
  },
  {
    Zdcode: "20143667",
    Name: "Mr.B",
    Quantity: 200,
    Sam: 400,
    GxNo: "698",
    Rate: "50%",
  },
  {
    Zdcode: "20143667",
    Name: "Mr.C",
    Quantity: 150,
    Sam: 400,
    GxNo: "700",
    Rate: "37.5%",
  },
  {
    Zdcode: "20143667",
    Name: "Mr.D",
    Quantity: 170,
    Sam: 400,
    GxNo: "697,698",
    Rate: "42.5%",
  },
  {
    Zdcode: "20143667",
    Name: "Mr.E",
    Quantity: 400,
    Sam: 400,
    GxNo: "697,700",
    Rate: "100%",
  },
];

const columns_data2 = [
  {
    dataField: "Zdcode",
    caption: "Mã",
  },
  {
    dataField: "Name",
    caption: "Tên nhân viên",
  },
  {
    dataField: "GxNo",
    caption: "Công đoạn",
  },
  {
    dataField: "Quantity",
    caption: "Sản lượng",
  },
  {
    dataField: "Sam",
    caption: "Tổng SAM",
  },
  {
    dataField: "Rate",
    caption: "Hiệu suất",
  },
];

const grid2 = $("#grid2")
  .dxDataGrid({
    dataSource: description_data2,
    columns: columns_data2,
    showRowLines: true,
    wordWrapEnabled: true,
    onRowPrepared: function (e) {
      if (e.rowType == "header") {
        e.rowElement.css("background", colorHeader);
        e.rowElement.css("font-family", fontText);
        return;
      }
    },
    onCellPrepared: function (e) {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("color", colorText);
        e.cellElement.css("font-weight", "bold");
        e.cellElement.css("border-color", colorBorder);
      }
      if (e.rowType == "data") {
        e.cellElement.css("color", colorText);
        e.cellElement.css("border-color", colorBorder);
        e.cellElement.css("font-family", fontText);
      }
    },
  })
  .dxDataGrid("instance");

const dataSource = [
  {
    Name: "541",
    Quantity: 300,
  },
  {
    Name: "542",
    Quantity: 200,
  },
  {
    Name: "544",
    Quantity: 150,
  },
  {
    Name: "546",
    Quantity: 170,
  },
  {
    Name: "547",
    Quantity: 400,
  },
  {
    Name: "548",
    Quantity: 450,
  },
  {
    Name: "549",
    Quantity: 210,
  },
  {
    Name: "550",
    Quantity: 200,
  },
  {
    Name: "601",
    Quantity: 130,
  },
  {
    Name: "602",
    Quantity: 170,
  },
  {
    Name: "604",
    Quantity: 55,
  },
  {
    Name: "606",
    Quantity: 600,
  },
  {
    Name: "607",
    Quantity: 800,
  },
];

const maxQuantity = Math.max(...dataSource.map((o) => o.Quantity));
const minQuantity = Math.min(...dataSource.map((o) => o.Quantity));

const grid3 = $("#grid3")
  .dxChart({
    dataSource: dataSource,
    commonAxisSettings: {
      //chỉnh độ sáng tối, màu sắc của dòng kẻ
      grid: {
        color: colorGrid,
        opacity: "25%",
      },
    },
    argumentAxis: {
      //Chỉnh định dạng của chữ và giá trị của trục hoành
      label: {
        font: {
          color: colorText,
          family: fontText,
        },
      },
    },
    valueAxis: {
      label: {
        customizeText(e) {
          return `${e.valueText}`;
        },
        font: {
          //Chỉnh định dạng của trục tung
          color: colorText,
          family: fontText,
        },
      },
      visualRange: [0, 1000],
    },
    legend: {
      //Chỉnh định dạng của ô ghi chú VNA,VND, VNC, VNE
      visible: true,
      horizontalAlignment: "center",
      verticalAlignment: "bottom",
      font: {
        color: colorText,
        family: fontText,
      },
      itemTextPosition: "right",
      margin: {
        top: 20,
      },
      markerSize: 30,
    },
    customizePoint(e) {
      //Define màu sắc của cột đạt giá trị cao nhất, thấp nhất
      if (e.value === maxQuantity) {
        return { color: "#7defe6", hoverStyle: { color: "#7defe6" } };
      }
      if (e.value === minQuantity) {
        return {
          color: "rgb(255, 173, 11)",
          hoverStyle: { color: "rgb(255, 173, 11)" },
        };
      }
      return null;
    },
    customizeLabel() {
      //Define nhán dãn của cột đạt giá trị cao nhất thấp nhất
      if (this.value === maxQuantity) {
        return {
          visible: true,
          backgroundColor: "transparent",
          postion: "outside",
          font: {
            color: "#7defe6",
          },
          customizeText(e) {
            return `MAX ${e.valueText}`;
          },
        };
      }
      if (this.value === minQuantity) {
        return {
          visible: true,
          backgroundColor: "transparent",
          font: {
            color: "rgb(255, 173, 11)",
          },
          // color: "rgb(255, 173, 11)",
          customizeText(e) {
            return `MIN ${e.valueText}`;
          },
        };
      }
      return null;
    },
    series: {
      argumentField: "Name",
      valueField: "Quantity",
      name: "Quantity",
      type: "bar",
      color: "rgba(125, 239, 230, 0.4)",
    },
    size: {
      height: 280,
    },
    // margin: {
    //   top: 15,
    // },
  })
  .dxChart("instance");

const dataPie = [
  {
    name: "Đi làm",
    quantity: 7000,
  },
  {
    name: "Không đi làm",
    quantity: 3000,
  },
];

const legendSettings = {
  verticalAlignment: "bottom",
  horizontalAlignment: "center",
  itemTextPosition: "right",
  visible: false,
};

const seriesOptions = [
  {
    argumentField: "name",
    valueField: "quantity",
    label: {
      visible: true,
      connector: {
        visible: true,
      },
      font: {
        family: fontText,
        color: colorText,
        size: 15,
      },
      format: "fixedPoint",
      backgroundColor: "none",
      wordWrap: "breakWord",
      customizeText(e) {
        return `${e.argumentText}\n${e.valueText}`;
      },
    },
  },
];

const grid4 = $("#grid4")
  .dxPieChart({
    // sizeGroup: sizeGroupName,
    palette: colorPallete,
    type: "doughnut",
    size: {
      height: 265,
      width: 440,
    },
    innerRadius: 0.48,
    legend: legendSettings,
    dataSource: dataPie,
    series: seriesOptions,
  })
  .dxPieChart("instance");

$.getScript("/particles.js-master/particles.min.js", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 500,
        },
      },
      color: {
        value: "#7defe6", //màu sắc hình chấm tròn
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.2, //tùy chỉnh độ bóng của màu sắc
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#7defe6", //màu đường nối
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 100,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
