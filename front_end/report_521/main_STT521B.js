import { VIEW_GRID_OPTION } from "../config_dataGrid/VIEW_GRID_OPTION.js";
const colorHeader = "#ffcccc";
const colorText = "#000000";
const colorPallete = ["#a9d08e", "#c00000"];

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
                  grid.columnOption("WorkShop", "visible", true);
                  pie.option(
                    "title",
                    "Tình hình bất thường sử dụng Kanban chuyền công đoạn sau"
                  );
                } else if (e.value === 1) {
                  grid.columnOption("WorkShop", "visible", false);
                  pie.option(
                    "title",
                    "Tình hình bất thường sử dụng Kanban bộ phận khác"
                  );
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

const dataChart = [
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

const chart = $("#chart")
  .dxChart({
    palette: colorPallete,
    dataSource: dataChart,
    commonSeriesSettings: {
      argumentField: "workshop",
      type: "fullstackedbar",
    },
    series: [
      {
        valueField: "OK",
        name: "OK",
      },
      {
        valueField: "NG",
        name: "NG",
      },
      {
        axis: "total",
        type: "line",
        valueField: "TotalOk",
        name: "Tỷ lệ SD",
        color: "#2e75b6",
      },
    ],
    // valueAxis: [
    //   {
    //     // name: "percent",
    //     // position: "left",
    //     // label: {
    //     //   customizeText: function (info) {
    //     //     return info.valueText * 100 + "%";
    //     //   },
    //     // },
    //     // grid: {
    //     //   visible: true,
    //     // },
    //   },
    //   {
    //     name: "total",
    //     position: "right",

    //     grid: {
    //       visible: true,
    //     },
    //   },
    // ],
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center",
    },
  })
  .dxChart("instance");

const dataGrid = [
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

const columnsGrid = [
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

const grid = $("#grid")
  .dxDataGrid({
    ...VIEW_GRID_OPTION,
    dataSource: dataGrid,
    columns: columnsGrid,
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
