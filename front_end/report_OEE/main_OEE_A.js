import { VIEW_GRID_OPTION } from "./VIEW_GRID_OPTION.js";

const colorPalleteStopMachine = [
  "#ED8830",
  "#FFC100",
  "#70AD46",
  "#D5AB91",
  "#BF8F00",
  "#009900",
];
const colorPalleteStopMachineLine = [
  "#FFC100",
  "#70AD46",
  "#9d480e",
  "#BF8F00",
  "#42682a",
  "#f1975a",
];
const colorHeader = "#fff2cc";
const colorText = "#000000";

const form = $("#form")
  .dxForm({
    formData: [],
    items: [
      {
        itemType: "group",
        caption: "",
        colCount: 6,
        items: [
          {
            dataField: "FromDate",
            label: {
              text: "从Từ", //Thông tin hiện thị bên cạnh hộp
            },
            editorType: "dxDateBox", //Loại button bạn muốn thể hiện tagbox, datebox, selectbox, button...
            editorOptions: {
              value: null,
              width: "90%", //Độ rộng lớn của button
              max: new Date(), //Đặt giá trị lớn nhất cho việc chọn ngày ứng dụng với việc set tìm kiếm dữ liệu
              dataType: "date", //3 trường dữ liệu format dữ liệu trả về dưới dạng yyyy-MM-dd cho trường hợp get dữ liệu người dùng nhập vào
              displayFormat: "yyyy-MM-dd",
              dateSerializationFormat: "yyyy-MM-dd",
            },
            validationRules: [
              {
                type: "required", //set thông báo cảnh báo yêu cầu ng dùng nhập thông tin, thông tin bắt buộc
                message: "Date is required",
              },
            ],
          },
          {
            dataField: "ToDate",
            label: {
              text: "至Đến",
            },
            editorType: "dxDateBox",
            editorOptions: {
              value: null,
              width: "90%",
              max: new Date(),
              dataType: "date",
              displayFormat: "yyyy-MM-dd",
              dateSerializationFormat: "yyyy-MM-dd",
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
              items: ["VNA", "VNB", "VNC", "VND", "VNE", "VNH"], //Với giá trị bên trong chiếc hộp selecbox set cứng thông tin
              searchEnabled: true,
              value: "",
            },
            validationRules: [
              {
                type: "required",
                message: "Factory is required",
              },
            ],
            label: {
              text: "工厂Nhà máy",
            },
          },
          {
            dataField: "Type",
            editorType: "dxSelectBox",
            editorOptions: {
              items: [
                {
                  id: 0,
                  text: "Nguyên nhân dừng máy ",
                },
                {
                  id: 1,
                  text: "Dừng máy theo chuyền",
                },
              ],
              displayExpr: "text",
              valueExpr: "id",
              searchEnabled: true,
            },
            validationRules: [
              {
                type: "required",
                message: "Type is required",
              },
            ],
            label: {
              text: "报表Biểu đồ",
            },
          },
          {
            dataField: "Line",
            editorType: "dxTagBox",
            editorOptions: {
              items: [],
              searchEnabled: true,
              value: "",
            },
            // validationRules: [
            //   {
            //     type: "required",
            //     message: "Factory is required",
            //   },
            // ],
            label: {
              text: "线别Chuyền",
            },
          },
          {
            editorType: "dxButton",
            editorOptions: {
              icon: "find",
              text: "Tra cứu",
              width: "40%",
              type: "success",
              onClick: function () {
                let data = form.option("formData");
                if (
                  data.Factory == "" ||
                  data.FromDate == null ||
                  data.ToDate == null
                ) {
                  return;
                }

                gridLine.option("dataSource", dataGridStopMachineLine);
                gridMachine.option("dataSource", dataGridStopMachine);
                chartLine.option("dataSource", dataChartStopMachineLine);
                chartMachine.option("dataSource", dataChartStopMachine);
              },
            },
          },
        ],
      },
    ],
  })
  .dxForm("instance");

//Phần A - Dữ liệu báo biểu phân tích Downtime
const dataChartStopMachine = [
  {
    Reason: "Điều chỉnh máy 床/机台调整",
    Downtime: 163,
    Rate: 28.8,
  },
  {
    Reason: "Máy lỗi/hỏng 机台维修",
    Downtime: 88,
    Rate: 15.5,
  },
  {
    Reason: "Họp 开会",
    Downtime: 70,
    Rate: 12.4,
  },
  {
    Reason: "Đào tạo 培训",
    Downtime: 120,
    Rate: 21.2,
  },
  {
    Reason: "Thiếu liệu, chờ liệu 待料/缺料",
    Downtime: 85,
    Rate: 15,
  },
  {
    Reason: "其他 Khác",
    Downtime: 40,
    Rate: 7.1,
  },
];

const commonSeriesPartA = {
  argumentField: "Reason", //tên giá trị sẽ đứng ra để so sánh
  valueField: "Downtime",
  type: "bar", //loại biểu đồ
  ignoreEmptyPoints: true,
  label: {
    visible: true,
    position: "inside",
    customizeText(e) {
      return `${e.value} (${e.point.data.Rate}%)`;
    },
  },
};

//Phần A - Kết thúc

//Phần B - Dữ liệu báo biểu phân tích Downtime
const dataChartStopMachineLine = [
  {
    Line: "L1",
    AdjustMachine: 15,
    BrokeMachine: 0,
    Meeting: 10,
    Training: 10,
    LackMaterial: 5,
    Others: 0,
  },
  {
    Line: "L2",
    AdjustMachine: 23,
    BrokeMachine: 10,
    Meeting: 0,
    Training: 10,
    LackMaterial: 15,
    Others: 0,
  },
  {
    Line: "L3",
    AdjustMachine: 60,
    BrokeMachine: 28,
    Meeting: 10,
    Training: 10,
    LackMaterial: 0,
    Others: 0,
  },
  {
    Line: "L4",
    AdjustMachine: 0,
    BrokeMachine: 10,
    Meeting: 10,
    Training: 15,
    LackMaterial: 20,
    Others: 0,
  },
  {
    Line: "L5",
    AdjustMachine: 25,
    BrokeMachine: 15,
    Meeting: 0,
    Training: 10,
    LackMaterial: 5,
    Others: 0,
  },
  {
    Line: "L6",
    AdjustMachine: 10,
    BrokeMachine: 15,
    Meeting: 0,
    Training: 10,
    LackMaterial: 5,
    Others: 0,
  },
  {
    Line: "L7",
    AdjustMachine: 10,
    BrokeMachine: 0,
    Meeting: 10,
    Training: 10,
    LackMaterial: 20,
    Others: 0,
  },
  {
    Line: "L8",
    AdjustMachine: 10,
    BrokeMachine: 0,
    Meeting: 10,
    Training: 15,
    LackMaterial: 5,
    Others: 12,
  },
  {
    Line: "L9",
    AdjustMachine: 0,
    BrokeMachine: 10,
    Meeting: 10,
    Training: 15,
    LackMaterial: 5,
    Others: 20,
  },
  {
    Line: "L10",
    AdjustMachine: 10,
    BrokeMachine: 0,
    Meeting: 10,
    Training: 15,
    LackMaterial: 5,
    Others: 8,
  },
];

const commonSeriesPartB = {
  argumentField: "Line",
  type: "stackedBar",
  label: {
    visible: true,
    position: "inside",
    showForZeroValues: false,
    backgroundColor: "transparent",
  },
};

const seriesPartB = [
  {
    valueField: "AdjustMachine",
    name: "床/机台调整Điều chỉnh máy",
  },
  {
    valueField: "BrokeMachine",
    name: "机台维修Máy lỗi/hỏng",
  },
  {
    valueField: "Meeting",
    name: "开会Họp",
  },
  {
    valueField: "Training",
    name: "培训Đào tạo",
  },
  {
    valueField: "LackMaterial",
    name: "待料/缺料Thiếu liệu, chờ liệu",
  },
  {
    valueField: "LackMaterial",
    name: "待料/缺料Thiếu liệu, chờ liệu",
  },
  {
    valueField: "Others",
    name: "其他Khác",
  },
];
//Phần B - Kết thúc

const chartMachine = $("#chart-machine")
  .dxChart({
    dataSource: [],
    palette: colorPalleteStopMachine,
    commonSeriesSettings: commonSeriesPartA,
    seriesTemplate: {
      nameField: "Reason",
    },
    title: {
      text: "Phân tích nguyên nhân dừng máy 停机原因分析 (phút 分钟）",
    },
  })
  .dxChart("instance");

const chartLine = $("#chart-line")
  .dxChart({
    palette: colorPalleteStopMachineLine,
    commonSeriesSettings: commonSeriesPartB,
    series: seriesPartB,
    valueAxis: [
      {
        name: "total",
        position: "left",
      },
    ],
    title: {
      text: "Nguyên nhân dừng máy theo từng chuyền 裁床线别停机原因分析（Phút 分钟) ",
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center",
    },
  })
  .dxChart("instance");

//Phần A - Dữ liệu báo biểu phân tích Downtime
const dataGridStopMachine = [
  {
    Reason: "Điều chỉnh máy 床/机台调整",
    L1: 15,
    L2: 23,
    L3: 60,
    L4: 0,
    L5: 25,
    L6: 10,
    L7: 10,
    L8: 10,
    L9: 0,
    L10: 10,
  },
  {
    Reason: "Máy lỗi/hỏng 机台维修",
    L1: 0,
    L2: 10,
    L3: 28,
    L4: 10,
    L5: 15,
    L6: 15,
    L7: 0,
    L8: 0,
    L9: 10,
    L10: 0,
  },
  {
    Reason: "Họp 开会",
    L1: 10,
    L2: 0,
    L3: 10,
    L4: 10,
    L5: 0,
    L6: 0,
    L7: 10,
    L8: 10,
    L9: 10,
    L10: 10,
  },
  {
    Reason: "Đào tạo 培训",
    L1: 10,
    L2: 10,
    L3: 10,
    L4: 15,
    L5: 10,
    L6: 10,
    L7: 10,
    L8: 15,
    L9: 15,
    L10: 15,
  },
  {
    Reason: "Thiếu liệu, chờ liệu 待料/缺料",
    L1: 5,
    L2: 15,
    L3: 0,
    L4: 20,
    L5: 5,
    L6: 5,
    L7: 20,
    L8: 5,
    L9: 5,
    L10: 5,
  },
  {
    Reason: "其他 Khác ",
    L1: 0,
    L2: 0,
    L3: 0,
    L4: 0,
    L5: 0,
    L6: 0,
    L7: 0,
    L8: 12,
    L9: 20,
    L10: 8,
  },
];

let countSum = 0; //Tính tổng thời gian downtime
$.each(dataGridStopMachine, (i, data) => {
  $.each(data, (y, analyst) => {
    if (isNaN(analyst)) {
      return;
    }
    countSum += analyst;
  });
});

const listLine = ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10"];

const listColumsStopMachine = [
  {
    dataField: "Reason",
    caption: "原因Nguyên nhân",
  },
  {
    dataField: "TotalDowntime",
    caption: "停机时间（分钟)TG Downtime(p)",
    calculateCellValue: function (rowData) {
      let sum = 0;
      $.each(rowData, (i, row) => {
        if (isNaN(row)) {
          return;
        }
        sum += row;
      });
      return sum;
    },
  },
  {
    dataField: "Rate",
    caption: "比例Tỷ lệ",
    calculateCellValue: function (rowData) {
      let sum = 0;
      $.each(rowData, (i, row) => {
        if (isNaN(row)) {
          return;
        }
        sum += row;
      });
      return `${Math.round((sum / countSum) * 10000 + Number.EPSILON) / 100}%`;
    },
  },
];

const listSummaryMachine = [
  {
    column: "Reason",
    displayFormat: "汇总Tổng",
  },
  {
    column: "TotalDowntime",
    summaryType: "sum",
    displayFormat: "{0}",
  },
];

$.each(listLine, (i, data) => {
  let combine = {};
  combine[`dataField`] = data;
  listColumsStopMachine.push(combine);

  let summary = {};
  summary[`column`] = data;
  summary[`summaryType`] = "sum";
  summary[`displayFormat`] = "{0}";
  listSummaryMachine.push(summary);
});

//Phần A - Kết thúc

//Phần B - Dữ liệu báo biểu phân tích Downtime
const dataGridStopMachineLine = [
  {
    Line: "L1",
    Code: "ECUT-01",
    TimeStart: 7.5,
    TimeStop: 0.67,
  },
  {
    Line: "L2",
    Code: "ECUT-02",
    TimeStart: 7.5,
    TimeStop: 0.97,
  },
  {
    Line: "L3",
    Code: "ECUT-03",
    TimeStart: 7.5,
    TimeStop: 1.8,
  },
  {
    Line: "L4",
    Code: "ECUT-04",
    TimeStart: 7.5,
    TimeStop: 0.92,
  },
  {
    Line: "L5",
    Code: "ECUT-05",
    TimeStart: 7.5,
    TimeStop: 0.92,
  },
  {
    Line: "L6",
    Code: "ECUT-06",
    TimeStart: 7.5,
    TimeStop: 0.67,
  },
  {
    Line: "L7",
    Code: "ECUT-07",
    TimeStart: 7.5,
    TimeStop: 0.83,
  },
  {
    Line: "L8",
    Code: "ECUT-08",
    TimeStart: 7.5,
    TimeStop: 0.87,
  },
  {
    Line: "L9",
    Code: "ECUT-09",
    TimeStart: 7.5,
    TimeStop: 1,
  },
  {
    Line: "L10",
    Code: "ECUT-10",
    TimeStart: 7.5,
    TimeStop: 0.8,
  },
];

const listColumsStopMachineLine = [
  {
    dataField: "Line",
    caption: "线别Chuyền",
  },
  {
    dataField: "Code",
    caption: "机台号Mã máy",
  },
  {
    dataField: "TimeStart",
    caption: "工作时间TG làm việc (h)",
  },
  {
    dataField: "TimeActive",
    caption: "机台运行时间TG máy hoạt động (h)",
    calculateCellValue: function (rowData) {
      return rowData.TimeStart - rowData.TimeStop;
    },
  },
  {
    dataField: "TimeStop",
    caption: "停机时间Thời gian dừng máy(h)",
  },
  {
    dataField: "RateDowntime",
    caption: "停机比例Tỷ lệ Downtime",
    calculateCellValue: function (rowData) {
      return `${
        Math.round(
          (rowData.TimeStop / rowData.TimeStart) * 10000 + Number.EPSILON
        ) / 100
      }%`;
    },
  },
];

const listSummaryLine = [
  {
    column: "Line",
    displayFormat: "Trung bình 平均",
  },
  {
    column: "TimeStart",
    summaryType: "custom",
    displayFormat: "{0}",
    // valueFormat: "#0.00%",
    showInGroupFooter: false,
    alignByColumn: true,
  },
  {
    column: "TimeActive",
    summaryType: "custom",
    displayFormat: "{0}",
    // valueFormat: "#0.00%",
    showInGroupFooter: false,
    alignByColumn: true,
  },
  {
    column: "TimeStop",
    summaryType: "custom",
    displayFormat: "{0}",
    // valueFormat: "#0.00%",
    showInGroupFooter: false,
    alignByColumn: true,
  },
  {
    column: "RateDowntime",
    summaryType: "sum",
    displayFormat: "{0}",
  },
];

//

var gridMachine = $("#grid-machine")
  .dxDataGrid({
    ...VIEW_GRID_OPTION,
    // dataSource: dataGridStopMachine,
    columns: listColumsStopMachine,
    summary: {
      totalItems: listSummaryMachine,
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
      e.cellElement.css("vertical-align", "top");
      if (e.rowType == "header") {
        e.cellElement.css("color", colorText);
        e.cellElement.css("font-weight", "bold");
      }
      if (e.rowType == "totalFooter" && e.column.dataField == "Reason") {
        e.cellElement.css("background", colorHeader);
      }
    },
  })
  .dxDataGrid("instance");

var gridLine = $("#grid-line")
  .dxDataGrid({
    ...VIEW_GRID_OPTION,
    columns: listColumsStopMachineLine,
    summary: {
      totalItems: [
        {
          column: "Line",
          displayFormat: "Trung bình 平均",
        },
        {
          name: "AverageTimeStart",
          showInColumn: "TimeStart",
          summaryType: "custom",
          displayFormat: "{0}",
          // valueFormat: "#0.00%",
          showInGroupFooter: false,
          alignByColumn: true,
        },
        {
          name: "AverageTimeStop",
          showInColumn: "TimeStop",
          summaryType: "custom",
          displayFormat: "{0}",
          // valueFormat: "#0.00%",
          showInGroupFooter: false,
          alignByColumn: true,
        },
      ],
      calculateCustomSummary(e) {
        if (e.name === "AverageTimeStart") {
          if (e.summaryProcess == "start") {
            e.totalTimeStart = 0;
            e.countTimeStart = 0;
          } else if (e.summaryProcess == "calculate") {
            e.totalTimeStart += e.value.TimeStart;
            e.countTimeStart += e.value.TimeStart ? 1 : 0;
          } else if (e.summaryProcess == "finalize") {
            e.totalValue = e.totalTimeStart / e.countTimeStart;
            // Math.round((e.OK / (e.OK + e.NG) + Number.EPSILON) * 10000) /
            // 10000;
          }
          return;
        }

        if (e.name === "AverageTimeStop") {
          if (e.summaryProcess == "start") {
            e.totalData = 0;
            e.countData = 0;
          } else if (e.summaryProcess == "calculate") {
            e.totalData += e.value.TimeStop;
            e.countData += e.value.TimeStop ? 1 : 0;
          } else if (e.summaryProcess == "finalize") {
            e.totalValue =
              Math.round((e.totalData / e.countData + Number.EPSILON) * 10000) /
              10000;
          }
          return;
        }
      },
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
      e.cellElement.css("vertical-align", "top");
      if (e.rowType == "header") {
        e.cellElement.css("color", colorText);
        e.cellElement.css("font-weight", "bold");
      }
      if (e.rowType == "totalFooter" && e.column.dataField == "Line") {
        e.cellElement.attr("colspan", 2);
        e.cellElement.css("background", colorHeader);
      }
      if (e.rowType == "totalFooter" && e.column.dataField == "Code") {
        e.cellElement.hide();
      }
    },
  })
  .dxDataGrid("instance");
