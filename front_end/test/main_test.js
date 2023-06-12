// import { VIEW_GRID_OPTION } from "../config_dataGrid/VIEW_GRID_OPTION.js";

const description_data1 = [
  {
    Problem: "",
    Zdcode: "000020143667",
    SaleNo: "20143667",
    PlanQuantity: "Không có kế hoạch",
    ActualQuantity: 1,
  },
  {
    Problem: "",
    Zdcode: "000020143667",
    SaleNo: "20143667",
    PlanQuantity: "Không có kế hoạch",
    ActualQuantity: 1,
  },
  {
    Problem: "",
    Zdcode: "000020143667",
    SaleNo: "20143667",
    PlanQuantity: "Không có kế hoạch",
    ActualQuantity: 1,
  },
  {
    Problem: "",
    Zdcode: "000020143667",
    SaleNo: "20143667",
    PlanQuantity: 188,
    ActualQuantity: 92,
  },
  {
    Problem: "",
    Zdcode: "000020143667",
    SaleNo: "20143667",
    PlanQuantity: 129,
    ActualQuantity: 214,
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
    // ...VIEW_GRID_OPTION,
    dataSource: description_data1,
    columns: columns_data1,
    showBorders: true,
    showRowLines: true,
    onRowPrepared: function (e) {
      if (e.rowType == "header") {
        e.rowElement.css("background", "#f8cbad");
        return;
      }
    },
    onCellPrepared: function (e) {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("color", "#000000");
        e.cellElement.css("font-weight", "bold");
        if (
          e.column.dataField === "ProductOrder" ||
          e.column.dataField === "Description"
        ) {
          e.cellElement.css({ background: "yellow" });
        }
        return;
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
    // ...VIEW_GRID_OPTION,
    dataSource: description_data2,
    columns: columns_data2,
    showBorders: true,
    showRowLines: true,
    onRowPrepared: function (e) {
      if (e.rowType == "header") {
        e.rowElement.css("background", "#f8cbad");
        return;
      }
    },
    onCellPrepared: function (e) {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("color", "#000000");
        e.cellElement.css("font-weight", "bold");
        if (
          e.column.dataField === "ProductOrder" ||
          e.column.dataField === "Description"
        ) {
          e.cellElement.css({ background: "yellow" });
        }
        return;
      }
    },
  })
  .dxDataGrid("instance");

const dataSource = [
  {
    day: "Monday",
    oranges: 3,
  },
  {
    day: "Tuesday",
    oranges: 2,
  },
  {
    day: "Wednesday",
    oranges: 3,
  },
  {
    day: "Thursday",
    oranges: 4,
  },
  {
    day: "Friday",
    oranges: 6,
  },
  {
    day: "Saturday",
    oranges: 11,
  },
  {
    day: "Sunday",
    oranges: 4,
  },
];

const grid3 = $("#grid3")
  .dxChart({
    dataSource: dataSource,
    series: {
      argumentField: "day",
      valueField: "oranges",
      name: "My oranges",
      type: "bar",
      color: "#ffaa66",
    },
  })
  .dxChart("instance");

const dataPie = [
  {
    name: "OK",
    area: 3,
  },
  {
    name: "NG",
    area: 1,
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
    valueField: "area",
    label: {
      visible: true,
      connector: {
        visible: true,
      },
      format: "fixedPoint",
      backgroundColor: "none",
      customizeText(e) {
        return `${e.argumentText}\n${e.valueText}`;
      },
    },
  },
];

const grid4 = $("#grid4")
  .dxPieChart({
    // sizeGroup: sizeGroupName,
    palette: ["#a9d08e", "#c00000"],
    type: "doughnut",
    title: "Frequency",
    legend: legendSettings,
    dataSource: dataPie,
    series: seriesOptions,
  })
  .dxPieChart("instance");
