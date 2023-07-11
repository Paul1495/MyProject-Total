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
                grid.option("dataSource", dataGrid);
              },
            },
          },
        ],
      },
    ],
  })
  .dxForm("instance");

//Phần B - Dữ liệu báo biểu phân tích Downtime
const dataGrid = [
  {
    Line: "L1",
    Code: "ECUT-01",
    Date: "4/10/2023",
    TimeStop: "8:36:20 AM",
    TimeActive: "8:40:35 AM",
    Reason: "Điều chỉnh máy 床/机台调整",
  },
  {
    Line: "L1",
    Code: "ECUT-01",
    Date: "4/10/2023",
    TimeStop: "9:15:46 AM",
    TimeActive: "9:45:10 AM",
    Reason: "Thiếu liệu, chờ liệu 待料/缺料",
  },
  {
    Line: "L1",
    Code: "ECUT-01",
    Date: "4/10/2023",
    TimeStop: "3:20:15 PM",
    TimeActive: "3:35:05 PM  ",
    Reason: "Điều chỉnh máy 床/机台调整",
  },
  {
    Line: "L1",
    Code: "ECUT-01",
    Date: "4/10/2023",
    TimeStop: "4:30:02 PM",
    TimeActive: "4:45:40 PM",
    Reason: "Điều chỉnh máy 床/机台调整",
  },
  {
    Line: "L1",
    Code: "ECUT-01",
    Date: "4/10/2023",
    TimeStop: "8:36:20 AM",
    TimeActive: "8:40:35 AM",
    Reason: "Đào tạo 培训",
  },
  {
    Line: "L2",
    Code: "ECUT-02",
    Date: "4/10/2023",
    TimeStop: "11:20:14 AM",
    TimeActive: "11:35:10 AM",
    Reason: "Điều chỉnh máy 床/机台调整",
  },
  {
    Line: "L2",
    Code: "ECUT-02",
    Date: "4/10/2023",
    TimeStop: "10:25:00 AM",
    TimeActive: "10:48:29 AM",
    Reason: "Máy lỗi/hỏng 机台维修",
  },
  {
    Line: "L3",
    Code: "ECUT-03",
    Date: "4/10/2023",
    TimeStop: "2:25:48 PM",
    TimeActive: "2:50:55 PM",
    Reason: "Họp 开会",
  },
  {
    Line: "L3",
    Code: "ECUT-03",
    Date: "4/10/2023",
    TimeStop: "4:05:19 PM",
    TimeActive: "4:22:36 PM",
    Reason: "Điều chỉnh máy 床/机台调整",
  },
];

const listColums = [
  {
    dataField: "Line",
    caption: "线别Chuyền",
  },
  {
    dataField: "Line",
    caption: "线别Chuyền",
    visible: false,
    groupIndex: 0, //Set group Item
  },
  {
    dataField: "Code",
    caption: "机台号Mã máy",
  },
  {
    dataField: "Date",
    caption: "日期Ngày",
  },
  {
    dataField: "TimeStop",
    caption: "停机时间TG máy dừng",
  },
  {
    dataField: "TimeActive",
    caption: "重新运行时间TG gian máy hoạt động",
  },
  {
    dataField: "Downtime",
    caption: "停机时间（分钟)Tổng TG Downtime",
  },
  {
    dataField: "Reason",
    caption: "停机原因Nguyên nhân Downtime",
  },
];

var grid = $("#grid")
  .dxDataGrid({
    ...VIEW_GRID_OPTION,
    columns: listColums,
    summary: {
      groupItems: [
        {
          column: "Downtime",
          summaryType: "sum",
          displayFormat: "{0}",
          showInGroupFooter: false,
          alignByColumn: true,
        },
      ],
    },
    onRowPrepared: (e) => {
      if (e.rowType == "header") {
        e.rowElement.css("background", colorHeader);
        return;
      }
      if (e.rowType == "group") {
        e.rowElement.css("background", "#bdd7ee");
      }
    },
    onCellPrepared: (e) => {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "top");
      if (e.rowType == "header") {
        e.cellElement.css("color", colorText);
        e.cellElement.css("font-weight", "bold");
      }
    },
  })
  .dxDataGrid("instance");
