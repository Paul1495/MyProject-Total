import { VIEW_GRID_OPTION } from "../config_dataGrid/VIEW_GRID_OPTION.js";
const colorHeader = "#ffcccc";
const colorText = "#000000";
const colorPalleteWorkshop = ["#a9d08e", "#c00000"];
const colorPalleteDepartment = ["#a9d08e", "#c00000", "#ffc000", "#ed7d31"];

const form = $("#form")
  .dxForm({
    formData: [],
    items: [
      {
        itemType: "group",
        caption:
          "看板系统使用情况分析报表 521B - Báo biểu phân tích tình hình sử dụng KANBAN ",
        colCount: 6,
        items: [
          {
            dataField: "FromDate",
            label: {
              text: "Từ ngày",
              // template: labelTemplate("event"),
            },
            editorType: "dxDateBox",
            editorOptions: {
              value: null,
              width: "90%",
            },
            validationRules: [
              {
                type: "required",
                message: "Date is required",
              },
            ],
          },
          {
            dataField: "ToDate",
            label: {
              text: "Đến ngày",
              // template: labelTemplate("event"),
            },
            editorType: "dxDateBox",
            editorOptions: {
              value: null,
              width: "90%",
            },
            validationRules: [
              {
                type: "required",
                message: "Date is required",
              },
            ],
          },
          {
            dataField: "Factory",
            editorType: "dxSelectBox",
            editorOptions: {
              items: ["VNA", "VNB", "VNC", "VND", "VNE"],
              searchEnabled: true,
              value: "",
              width: "90%",
            },
            validationRules: [
              {
                type: "required",
                message: "Factory is required",
              },
            ],
            label: {
              text: "Chọn nhà máy",
            },
          },
          {
            dataField: "Type",
            editorType: "dxSelectBox",
            editorOptions: {
              items: [
                {
                  id: 0,
                  text: "后工序产线看板 Kanban chuyền công đoạn sau ",
                },
                {
                  id: 1,
                  text: "其他部门看板 Kanban bộ phận khác",
                },
              ],
              displayExpr: "text",
              valueExpr: "id",
              value: 0,
              onValueChanged(e) {
                if (e.value === 0) {
                  chart.option("palette", colorPalleteWorkshop);
                  chart.option("dataSource", dataChartWorkshop);
                  chart.option("commonSeriesSettings", commonSeriesWorkshop);
                  chart.option("series", seriesWorkshop);
                  chart.option("valueAxis", valueAixsWorkshop);
                  chart.option("title", titleWorkshop);
                  grid.option("dataSource", dataGridWorkshop);
                  grid.option("columns", columnsWorkshop);
                } else if (e.value === 1) {
                  chart.option("palette", colorPalleteDepartment);
                  chart.option("dataSource", dataChartDepartment);
                  chart.option("commonSeriesSettings", commonSeriesDepartment);
                  chart.option("series", seriesDeparment);
                  chart.option("valueAxis", valueAixsDepartment);
                  chart.option("title", titleDepartment);
                  grid.option("dataSource", dataDepartment);
                  grid.option("columns", columnsDepartment);
                }
              },
              searchEnabled: true,
              width: "100%",
            },
            validationRules: [
              {
                type: "required",
                message: "Type is required",
              },
            ],
            label: {
              text: "Phân loại",
            },
          },
          {
            editorType: "dxButton",
            editorOptions: {
              icon: "find",
              text: "Tra cứu",
              width: "40%",
              type: "default",
              onClick: function () {
                console.log(form.option("formData"));
              },
            },
          },
        ],
      },
    ],
  })
  .dxForm("instance");

const dataChartWorkshop = [
  {
    workshop: "A1",
    OK: 18,
    NG: 2,
    TotalOk: 18,
  },
  {
    workshop: "A2",
    OK: 19,
    NG: 1,
    TotalOk: 19,
  },
  {
    workshop: "A3",
    OK: 20,
    NG: 0,
    TotalOk: 20,
  },
  {
    workshop: "A5",
    OK: 17,
    NG: 3,
    TotalOk: 17,
  },
  {
    workshop: "A6",
    OK: 15,
    NG: 5,
    TotalOk: 15,
  },
  {
    workshop: "A7",
    OK: 17,
    NG: 3,
    TotalOk: 17,
  },
  {
    workshop: "A8",
    OK: 20,
    NG: 0,
    TotalOk: 20,
  },
  {
    workshop: "A9",
    OK: 20,
    NG: 0,
    TotalOk: 20,
  },
  {
    workshop: "A10",
    OK: 20,
    NG: 0,
    TotalOk: 20,
  },
];

const dataChartDepartment = [
  {
    department: "Kho NL",
    dontTurnOn: 1,
    dontLoad: 0,
    update: 0,
    OK: 19,
  },
  {
    department: "Thí nghiệm",
    dontTurnOn: 0,
    dontLoad: 0,
    update: 0,
    OK: 20,
  },
  {
    department: "Xả vảo",
    dontTurnOn: 0,
    dontLoad: 0,
    update: 0,
    OK: 20,
  },
  {
    department: "Cut",
    dontTurnOn: 2,
    dontLoad: 1,
    update: 2,
    OK: 15,
  },
  {
    department: "TTPL",
    dontTurnOn: 0,
    dontLoad: 2,
    update: 1,
    OK: 17,
  },
  {
    department: "Kho TP",
    dontTurnOn: 0,
    dontLoad: 1,
    update: 1,
    OK: 18,
  },
];

const commonSeriesWorkshop = {
  argumentField: "workshop",
  type: "fullStackedBar",
};

const seriesWorkshop = [
  {
    valueField: "OK",
    name: "OK",
    axis: "total",
  },
  {
    valueField: "NG",
    name: "NG",
    axis: "total",
  },
  {
    axis: "percent",
    type: "line",
    valueField: "TotalOk",
    name: "Tỷ lệ SD",
    color: "#2e75b6",
  },
];

const commonSeriesDepartment = {
  argumentField: "department",
  type: "fullStackedBar",
};

const seriesDeparment = [
  {
    valueField: "OK",
    name: "OK",
    axis: "total",
  },
  {
    valueField: "dontTurnOn",
    name: "Không bật",
    axis: "total",
  },
  {
    valueField: "dontLoad",
    name: "Không tải",
    axis: "total",
  },
  {
    valueField: "update",
    name: "Cập nhật muộn",
    axis: "total",
  },
];

const valueAixsWorkshop = [
  {
    name: "percent",
    position: "left",
    valueMarginsEnabled: false,
  },
  {
    name: "total",
    position: "right",
  },
];

const valueAixsDepartment = [
  {
    name: "percent",
    position: "left",
    valueMarginsEnabled: false,
  },
  {
    name: "total",
    position: "right",
  },
];

const titleWorkshop = {
  text: "VNA 后工序产线中控看板各车间使用情况（天)",
  font: {
    size: 20,
    weight: 500,
  },
  subtitle: {
    text: "Tình hình sử dụng kanban công đoạn sau của các xưởng VNA ( Ngày )",
    font: {
      size: 20,
      weight: 600,
    },
  },
};

const titleDepartment = {
  text: "VNA 各部门看板使用情况（天)",
  font: {
    size: 20,
    weight: 500,
  },
  subtitle: {
    text: "Tình hình sử dụng kanban các bộ phận VNA ( Ngày ) ",
    font: {
      size: 20,
      weight: 600,
    },
  },
};

const chart = $("#chart")
  .dxChart({
    palette: colorPalleteWorkshop,
    dataSource: dataChartWorkshop,
    commonSeriesSettings: commonSeriesWorkshop,
    series: seriesWorkshop,
    valueAxis: valueAixsWorkshop,
    title: titleWorkshop,
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center",
    },
  })
  .dxChart("instance");

const dataGridWorkshop = [
  {
    VNA: "OK",
    A1: 18,
    A2: 19,
    A3: 20,
    A5: 17,
    A6: 15,
    A7: 17,
    A8: 20,
    A9: 20,
    A10: 20,
  },
  {
    VNA: "NG",
    A1: 2,
    A2: 1,
    A3: 0,
    A5: 3,
    A6: 5,
    A7: 3,
    A8: 3,
    A9: 0,
    A10: 0,
  },
  {
    VNA: "NG",
    A1: 2,
    A2: 1,
    A3: 0,
    A5: 3,
    A6: 5,
    A7: 3,
    A8: 3,
    A9: 0,
    A10: 0,
  },
  {
    VNA: "使用比例 - Tỷ lệ SD",
    A1: "90%",
    A2: "95%",
    A3: "100%",
    A5: "85%",
    A6: "75%",
    A7: "85%",
    A8: "100%",
    A9: "100%",
    A10: "100%",
  },
  {
    VNA: "异常明细 - Chi tiết bất thường",
    A1: "A1-L1",
    A2: "A2-L1",
    A3: "A3-L1",
    A5: "A5-L1",
    A6: "A6-L1",
    A7: "A7-L1",
    A8: "A8-L1",
    A9: "A9-L1",
    A10: "A10-L1",
  },
];

const columnsWorkshop = [
  {
    dataField: "VNA",
  },
  {
    dataField: "A1",
  },
  {
    dataField: "A2",
  },
  {
    dataField: "A3",
  },
  {
    dataField: "A5",
  },
  {
    dataField: "A6",
  },
  {
    dataField: "A7",
  },
  {
    dataField: "A8",
  },
  {
    dataField: "A8",
  },
  {
    dataField: "A9",
  },
  {
    dataField: "A10",
  },
];

const dataDepartment = [
  {
    VNA: "OK",
    storageMaterial: 19,
    experiment: 20,
    soften: 20,
    cut: 15,
    ttpl: 17,
    storageProduction: 18,
  },
  {
    VNA: "Không bật",
    storageMaterial: 1,
    experiment: 0,
    soften: 0,
    cut: 2,
    ttpl: 0,
    storageProduction: 0,
  },
  {
    VNA: "Không tải",
    storageMaterial: 0,
    experiment: 0,
    soften: 0,
    cut: 1,
    ttpl: 2,
    storageProduction: 1,
  },
  {
    VNA: "Cập nhật",
    storageMaterial: 0,
    experiment: 0,
    soften: 0,
    cut: 2,
    ttpl: 1,
    storageProduction: 1,
  },
  {
    VNA: "Tỷ lệ SD",
    storageMaterial: 0.95,
    experiment: 1,
    soften: 1,
    cut: 0.75,
    ttpl: 0.85,
    storageProduction: 0.9,
  },
  {
    VNA: "Ngày bất thường",
    storageMaterial: 20230201,
    experiment: "",
    soften: "",
    cut: 20230203,
    ttpl: 20230204,
    storageProduction: 20230203,
  },
];

const columnsDepartment = [
  {
    dataField: "VNA",
    caption: "",
  },
  {
    dataField: "storageMaterial",
    caption: "Kho NL",
  },
  {
    dataField: "experiment",
    caption: "Thí nghiệm",
  },
  {
    dataField: "soften",
    caption: "Xả vải",
  },
  {
    dataField: "cut",
    caption: "Cut",
  },
  {
    dataField: "ttpl",
    caption: "TTPL",
  },
  {
    dataField: "storageProduction",
    caption: "Kho TP",
  },
];

const grid = $("#grid")
  .dxDataGrid({
    ...VIEW_GRID_OPTION,
    dataSource: dataGridWorkshop,
    columns: columnsWorkshop,
    headerFilter: {
      visible: true,
    },
    onRowPrepared: (e) => {
      if (e.rowType == "header") {
        e.rowElement.css("background", colorHeader);
        return;
      }
      if (e.rowType == "group") {
        e.rowElement.hide();
        return;
      }
    },

    onCellPrepared: (e) => {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("color", colorText);
        e.cellElement.css("font-weight", "bold");
      }
    },
  })
  .dxDataGrid("instance");
