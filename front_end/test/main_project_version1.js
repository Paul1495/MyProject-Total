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
    Quantity: 100,
    TargetQuantity: 150,
    Abnormal: "",
    Overtime: "Có tăng ca",
    Attandent: 25,
  },
  {
    Quantity: 10,
    TargetQuantity: 100,
    Abnormal: "",
    Overtime: "Có tăng ca",
    Attandent: 30,
  },
  {
    Quantity: 120,
    TargetQuantity: 100,
    Abnormal: "",
    Overtime: "Không tăng ca",
    Attandent: 35,
  },
  {
    Quantity: 90,
    TargetQuantity: 150,
    Abnormal: "",
    Overtime: "Không tăng ca",
    Attandent: 30,
  },
  {
    Quantity: 100,
    TargetQuantity: 150,
    Abnormal: "",
    Overtime: "Có tăng ca",
    Attandent: 25,
  },
];

const columns_data2 = [
  {
    dataField: "Quantity",
    caption: "Sản lượng",
  },
  {
    dataField: "TargetQuantity",
    caption: "Mục tiêu",
  },
  {
    dataField: "Efficiency",
    caption: "Hiệu suất",
  },
  {
    dataField: "Abnomarl",
    caption: "Bất thường",
  },
  {
    dataField: "Overtime",
    caption: "Tăng ca",
  },
  {
    dataField: "Attandent",
    caption: "Công nhân đi làm",
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
    Name: "Duy",
    Quantity: 300,
  },
  {
    Name: "Thanh",
    Quantity: 200,
  },
  {
    Name: "Tùng",
    Quantity: 150,
  },
  {
    Name: "Hồng",
    Quantity: 170,
  },
  {
    Name: "Dương",
    Quantity: 400,
  },
  {
    Name: "Thắng",
    Quantity: 450,
  },
  {
    Name: "Hiếu",
    Quantity: 210,
  },
  {
    Name: "Dung",
    Quantity: 200,
  },
  {
    Name: "Tuyên",
    Quantity: 130,
  },
  {
    Name: "Hoàn",
    Quantity: 170,
  },
  {
    Name: "Hưng",
    Quantity: 55,
  },
  {
    Name: "Hoa",
    Quantity: 600,
  },
  {
    Name: "Loan",
    Quantity: 800,
  },
];

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
        customizeText() {
          return `${this.valueText}`;
        },
        font: {
          //Chỉnh định dạng của trục tung
          color: colorText,
          family: fontText,
        },
      },
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
    series: {
      argumentField: "Name",
      valueField: "Quantity",
      name: "Quantity",
      type: "bar",
      color: "rgba(125, 239, 230, 0.8)",
    },
    size: {
      height: 300,
    },
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
      height: 300,
      width: 440,
    },
    innerRadius: 0.48,
    legend: legendSettings,
    dataSource: dataPie,
    series: seriesOptions,
  })
  .dxPieChart("instance");
