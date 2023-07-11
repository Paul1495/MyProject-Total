// Set up column (permanent)
import { VIEW_GRID_OPTION } from "../config_dataGrid/VIEW_GRID_OPTION.js";
const color_header =
  "radial-gradient(rgba(255,199,206,0.5), rgba(255,199,206,1))";
const COLOR_OK = "#a9d08e";
const COLOR_NG = "#c00000";

const data = [
  {
    Factory: "VNA",
    KanbanType: "产线Kanban chuyền ",
    KanbanAddress: "Nhà máy A 厂",
    Department: "BRA1",
    WorkShop: "A1",
    KanbanName: "A1-L1",
    StatusMorning: "Online",
    StatusAfternoon: "Online",
    StatusNight: "Online",
  },
  {
    Factory: "VNA",
    KanbanType: "产线Kanban chuyền ",
    KanbanAddress: "Công đoạn sau 后工序",
    Department: "BRA1",
    WorkShop: "A1",
    KanbanName: "A1-L2",
    StatusMorning: "Offline",
    StatusAfternoon: "Offline",
    StatusNight: "Online",
  },
  {
    Factory: "VNA",
    KanbanType: "产线Kanban chuyền ",
    KanbanAddress: "Bộ phận BRA1部门",
    Department: "BRA1",
    WorkShop: "A1",
    KanbanName: "A1-L3",
    StatusMorning: "Online",
    StatusAfternoon: "Online",
    StatusNight: "Online",
  },
  {
    Factory: "VNA",
    KanbanType: "产线Kanban xưởng ",
    KanbanAddress: "Xưởng A1 车间",
    Department: "BRA1",
    WorkShop: "A1",
    KanbanName: "A1",
    StatusMorning: "Online",
    StatusAfternoon: "Online",
    StatusNight: "Online",
  },
];

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

const columns_data = [
  {
    dataField: "Factory",
    caption: " 工厂 Nhà máy",
  },
  {
    dataField: "KanbanType",
    caption: "看板 Kanban",
  },
  {
    dataField: "KanbanAddress",
    caption: "看板地址 Địa chỉ kanban",
  },
  {
    dataField: "Department",
    caption: "部门 Bộ phận",
  },
  {
    dataField: "WorkShop",
    caption: "车间 Xưởng",
  },
  {
    dataField: "KanbanName",
    caption: "看板名称 Tên kanban",
    dataType: "date",
    format: "MM/dd/yyyy",
  },
  {
    caption: "开关状态 Trạng thái Kanban",
    columns: [
      {
        dataField: "StatusMorning",
        caption: "上午Sáng",
        cellTemplate: (container, e) => {
          let color = COLOR_OK;
          if (e.data.StatusMorning === "Offline") {
            color = COLOR_NG;
          }
          container.text(e.data.StatusMorning);
          container.css("background-color", color);
          container.css("font-weight", "bold");
        },
      },
      {
        dataField: "StatusAfternoon",
        caption: "下午Chiều",
        cellTemplate: (container, e) => {
          let color = COLOR_OK;
          if (e.data.StatusAfternoon === "Offline") {
            color = COLOR_NG;
          }
          container.text(e.data.StatusAfternoon);
          container.css("background-color", color);
          container.css("font-weight", "bold");
        },
      },
      {
        dataField: "StatusNight",
        caption: "夜班Đêm",
        cellTemplate: (container, e) => {
          let color = COLOR_OK;
          if (e.data.StatusNight === "Offline") {
            color = COLOR_NG;
          }
          container.text(e.data.StatusNight);
          container.css("background-color", color);
          container.css("font-weight", "bold");
        },
      },
    ],
  },
  {
    dataField: "Download",
    caption: "计划上传 Tải biểu kế hoạch",
    visible: false,
  },
  {
    dataField: "Result",
    caption: "结论 Kết luận",
    cellTemplate: (container, e) => {
      let value = "OK";
      let color = COLOR_OK;
      if (
        e.data.StatusMorning === "Offline" ||
        e.data.StatusAfternoon === "Offline" ||
        e.data.StatusNight === "Offline"
      ) {
        value = "NG";
        color = COLOR_NG;
      }
      container.text(value);
      container.css("background-color", color);
      container.css("font-weight", "bold");
    },
  },
];

const grid = $("#grid")
  .dxDataGrid({
    ...VIEW_GRID_OPTION,
    dataSource: data,
    columns: columns_data,
    headerFilter: {
      visible: true,
    },
    summary: {
      totalItems: [
        {
          column: "Result",
          summaryType: "count",
          displayFormat: "汇总Tổng ({0})",
        },
      ],
    },

    onRowPrepared: (e) => {
      if (e.rowType == "header") {
        e.rowElement.css("background", color_header);
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
        e.cellElement.css("color", "#000000");
        e.cellElement.css("font-weight", "bold");
      }
    },
  })
  .dxDataGrid("instance");

const legendSettings = {
  verticalAlignment: "bottom",
  horizontalAlignment: "center",
  itemTextPosition: "right",
  rowCount: 0,
};
const seriesOptions = [
  {
    argumentField: "name",
    valueField: "area",
    label: {
      visible: true,
    },
  },
];

const pie = $("#pie")
  .dxPieChart({
    // sizeGroup: sizeGroupName,
    palette: ["#a9d08e", "#c00000"],
    title: "Tình hình bất thường sử dụng Kanban chuyền công đoạn sau",
    legend: legendSettings,
    dataSource: dataPie,
    series: seriesOptions,
  })
  .dxPieChart("instance");

const form = $("#form")
  .dxForm({
    formData: [],
    items: [
      {
        itemType: "group",
        caption: "RM521-BÁO BIỂU LỊCH SỬ SỬ DỤNG HỆ THỐNG KANBAN",
        colCount: 7,
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
              // width: "70%",
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
              // width: "70%",
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
            editorType: "dxTagBox",
            editorOptions: {
              items: ["VNA", "VNB", "VNC", "VND", "VNE"],
              searchEnabled: true,
              value: "",
              width: "100%",
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
            dataField: "Department",
            editorType: "dxTagBox",
            editorOptions: {
              items: [],
              searchEnabled: true,
              value: "",
              width: "100%",
            },
            validationRules: [
              {
                type: "required",
                message: "Department is required",
              },
            ],
            label: {
              text: "Chọn bộ phận",
            },
          },
          {
            dataField: "Workshop",
            editorType: "dxTagBox",
            editorOptions: {
              items: [],
              searchEnabled: true,
              value: "",
              width: "100%",
            },
            validationRules: [
              {
                type: "required",
                message: "Workshop is required",
              },
            ],
            label: {
              text: "Chọn xưởng",
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
                  grid.columnOption("Download", "visible", false);
                  pie.option(
                    "title",
                    "Tình hình bất thường sử dụng Kanban chuyền công đoạn sau"
                  );
                } else if (e.value === 1) {
                  grid.columnOption("WorkShop", "visible", false);
                  grid.columnOption("Download", "visible", true);
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
              width: "50%",
              type: "success",
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
