const colorText = "#7defe6";
const colorBorder = "rgba(81, 99, 97, 0.25)";
const colorHeader = "rgba(125, 239, 230, 0.2)";
const fontText = "ChakraPetch,sans-serif";
const colorGrid = "#516361";
const colorPallete = ["#7defe6", "rgba(125, 239, 230, 0.2)"];

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

const efficiencyWorkshop1 = "88.77%";
const quantityWorkshop1 = 8700;
const targetWorkshop1 = 9800;
const workerWorkshop1 = 5000;
$("#efficiencyWorkshop1").text(`${efficiencyWorkshop1}`);
$("#quantityWorkshop1").text(`${abbreviateNumber(quantityWorkshop1)}`);
$("#targetWorkshop1").text(`${abbreviateNumber(targetWorkshop1)}`);
$("#workerWorkshop1").text(`${abbreviateNumber(workerWorkshop1)}`);

const efficiencyWorkshop2 = "65.30%";
const quantityWorkshop2 = 6400;
const targetWorkshop2 = 9800;
const workerWorkshop2 = 7000;
$("#efficiencyWorkshop2").text(`${efficiencyWorkshop2}`);
$("#quantityWorkshop2").text(`${abbreviateNumber(quantityWorkshop2)}`);
$("#targetWorkshop2").text(`${abbreviateNumber(targetWorkshop2)}`);
$("#workerWorkshop2").text(`${abbreviateNumber(workerWorkshop2)}`);

const efficiencyWorkshop3 = "75.51%";
const quantityWorkshop3 = 7400;
const targetWorkshop3 = 9800;
const workerWorkshop3 = 3400;
$("#efficiencyWorkshop3").text(`${efficiencyWorkshop3}`);
$("#quantityWorkshop3").text(`${abbreviateNumber(quantityWorkshop3)}`);
$("#targetWorkshop3").text(`${abbreviateNumber(targetWorkshop3)}`);
$("#workerWorkshop3").text(`${abbreviateNumber(workerWorkshop3)}`);

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
    Name: "Duy",
    Quantity: 300,
    Sam: 400,
    GxNo: "697",
    Rate: "75%",
  },
  {
    Zdcode: "20143667",
    Name: "Thanh",
    Quantity: 200,
    Sam: 400,
    GxNo: "698",
    Rate: "50%",
  },
  {
    Zdcode: "20143667",
    Name: "Tùng",
    Quantity: 150,
    Sam: 400,
    GxNo: "700",
    Rate: "37.5%",
  },
  {
    Zdcode: "20143667",
    Name: "Hồng",
    Quantity: 170,
    Sam: 400,
    GxNo: "697,698",
    Rate: "42.5%",
  },
  {
    Zdcode: "20143667",
    Name: "Dương",
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
      height: 280,
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
      height: 265,
      width: 440,
    },
    innerRadius: 0.48,
    legend: legendSettings,
    dataSource: dataPie,
    series: seriesOptions,
  })
  .dxPieChart("instance");

function CallPopup() {
  popup.option("visible", true);
  //load dataGrid
}

const popup = $("#popup")
  .dxPopup({
    visible: false,
    fullScreen: true,
    toolbarItems: [
      {
        location: "center",
        text: "BẢNG TỔNG HỢP DỮ LIỆU",
      },
    ],
  })
  .dxPopup("instance");
