const defineTable = {
  showRowLines: true,
  showBorders: true,
  allowColumnResizing: true,
  columnResizingMode: "widget",
  columnFixing: {
    enabled: true,
  },
  hoverStateEnabled: true,
  columnAutoWidth: true,
  //   allowColumnReordering: true,Cho phép có thanh scroll bên dưới chân
  rowAlternationEnabled: false,
  wordWrapEnabled: true,
};

const color_header =
  "radial-gradient(rgba(255,199,206,0), rgba(255,199,206,1))";
const color_text = "#000000";

const inputData = $("#inputData")
  .dxForm({
    formData: [],
    items: [
      {
        itemType: "group",
        caption: "BÁO BIỂU KIỂM TRA LỊCH SỬ MÁY NHÓM",
        colCount: 6,
        items: [
          {
            dataField: "Line",
            editorType: "dxSelectBox",
            editorOptions: {
              items: [],
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
              text: "Chọn chuyền",
            },
          },
          {
            dataField: "StartDate",
            label: {
              text: "Ngày bắt đầu",
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
            dataField: "EndDate",
            label: {
              text: "Ngày kết thúc",
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
            dataField: "Code",
            editorType: "dxSelectBox",
            editorOptions: {
              items: [],
              searchEnabled: true,
              width: "90%",
            },
            validationRules: [
              {
                type: "required",
                message: "Type is required",
              },
            ],
            label: {
              text: "Mã máy dập thẻ",
            },
          },
          {
            dataField: "Sever",
            editorType: "dxSelectBox",
            editorOptions: {
              items: [],
              searchEnabled: true,
              width: "90%",
            },
            validationRules: [
              {
                type: "required",
                message: "Type is required",
              },
            ],
            label: {
              text: "ETS sever",
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
                console.log(inputData.option("formData"));
              },
            },
          },
        ],
      },
    ],
  })
  .dxForm("instance");

const data_WrongLine = [
  {
    Date: "5/26/2023",
    WorkLine: "D7-DJ21",
    Type: "特殊小组计资",
    Code: "11235",
    Kind: 0,
    Reason: "Chuyền nhóm cài trên máy cá nhân",
  },
  {
    Date: "5/26/2023",
    WorkLine: "D5-L1",
    Type: "个人计资",
    Code: "33880",
    Kind: 91,
    Reason: "Chuyền cá nhân cài trên máy nhóm",
  },
];

const columns_WrongLine = [
  {
    dataField: "Date",
    caption: "Ngày",
    dataType: "date",
  },
  {
    dataField: "WorkLine",
    caption: "Workline",
  },
  {
    dataField: "Type",
    caption: "Loại hình ăn sản lượng",
  },
  {
    dataField: "Code",
    caption: "Mã máy",
  },
  {
    dataField: "Kind",
    caption: "Kind (RP342)",
  },
  {
    dataField: "Reason",
    caption: "Nguyên nhân",
  },
];

const grid_wrongline = $("#wrongLine")
  .dxDataGrid({
    ...defineTable,
    dataSource: data_WrongLine,
    columns: columns_WrongLine,
    onRowPrepared: function (e) {
      if (e.rowType == "header") {
        e.rowElement.css("background", color_header);
      }
    },
    onCellPrepared: function (e) {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("font-weight", "bold");
        e.cellElement.css("color", color_text);
      }
    },
  })
  .dxDataGrid("instance");

const data_loginAbnormal = [
  {
    BeginDate: "5/26/2023",
    EndDate: "5/26/2023",
    Reason: "Nốt thẻ bị trùng lằm thời gian",
    Code: "33880",
  },
  {
    BeginDate: "6/26/2023",
    EndDate: "6/26/2023",
    Reason: "Nốt thẻ bị trùng lằm thời gian",
    Code: "33880",
  },
];

const columns_loginAbnormal = [
  {
    dataField: "Code",
    caption: "Mã máy",
  },
  {
    dataField: "BeginDate",
    caption: "Begin Date",
    dataType: "date",
  },
  {
    dataField: "EndDate",
    caption: "End Date",
    dataType: "date",
  },
  {
    dataField: "Reason",
    caption: "Nguyên nhân",
  },
];

const grid_loginAbnormal = $("#loginAbnormal")
  .dxDataGrid({
    ...defineTable,
    dataSource: data_loginAbnormal,
    columns: columns_loginAbnormal,
    onRowPrepared: function (e) {
      if (e.rowType == "header") {
        e.rowElement.css("background", color_header);
      }
    },
    onCellPrepared: function (e) {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("font-weight", "bold");
        e.cellElement.css("color", color_text);
      }
    },
  })
  .dxDataGrid("instance");

const data_emptyCode = [
  {
    BeginDate: "5/26/2023",
    EndDate: "5/26/2023",
    Reason: "Nốt thẻ không có mã nhân viên đăng nhập",
    Code: "33880",
    Empid: "",
  },
];

const columns_emptyCode = [
  {
    dataField: "Code",
    caption: "Mã máy",
  },
  {
    dataField: "BeginDate",
    caption: "Begin Date",
    dataType: "date",
  },
  {
    dataField: "EndDate",
    caption: "End Date",
    dataType: "date",
  },
  {
    dataField: "Empid",
    caption: "Empid",
  },
  {
    dataField: "Reason",
    caption: "Nguyên nhân",
  },
];

const grid_emptyCode = $("#emptyCode")
  .dxDataGrid({
    ...defineTable,
    dataSource: data_emptyCode,
    columns: columns_emptyCode,
    onRowPrepared: function (e) {
      if (e.rowType == "header") {
        e.rowElement.css("background", color_header);
      }
    },
    onCellPrepared: function (e) {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("font-weight", "bold");
        e.cellElement.css("color", color_text);
      }
    },
  })
  .dxDataGrid("instance");

const data_wrongShift = [
  {
    Date: "5/26/2023",
    Reason: "Sai ca làm việc",
    Shift: "AE11",
    Empid: "A244042",
  },
];

const columns_wrongShift = [
  {
    dataField: "Empid",
    caption: "Empid",
  },

  {
    dataField: "Date",
    caption: "Ngày",
    dataType: "date",
  },
  {
    dataField: "Shift",
    caption: "Ca làm việc",
  },
  {
    dataField: "Reason",
    caption: "Nguyên nhân",
  },
];

const grid_wrongShift = $("#wrongShift")
  .dxDataGrid({
    ...defineTable,
    dataSource: data_wrongShift,
    columns: columns_wrongShift,
    onRowPrepared: function (e) {
      if (e.rowType == "header") {
        e.rowElement.css("background", color_header);
      }
    },
    onCellPrepared: function (e) {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("font-weight", "bold");
        e.cellElement.css("color", color_text);
      }
    },
  })
  .dxDataGrid("instance");

const data_rankAbnormal = [
  {
    Date: "5/26/2023",
    Reason: "Cấp bậc thừa ký tự dấu cách",
    Rank: "L",
    Length: 2,
    ActiveRank: "1/1/2019",
    Empid: "A244932",
  },
  {
    Date: "5/26/2023",
    Reason: "Không có cấp bậc",
    Rank: "",
    Length: 0,
    ActiveRank: "1/1/2019",
    Empid: "A268471",
  },
  {
    Date: "5/26/2023",
    Reason: "Ngày hiệu lực cấp bậc lớn hơn ngày tra cứu dữ liệu",
    Rank: "C",
    Length: 1,
    ActiveRank: "1/1/2019",
    Empid: "A223782",
  },
];

const columns_rankAbnormal = [
  {
    dataField: "Date",
    caption: "Ngày",
    dataType: "date",
  },
  {
    dataField: "Empid",
    caption: "Empid",
  },
  {
    dataField: "Rank",
    caption: "Cấp bậc",
  },
  {
    dataField: "Length",
    caption: "Số lượng ký tự",
  },
  {
    dataField: "ActiveRank",
    caption: "Ngày hiệu lực cấp bậc",
  },
  {
    dataField: "Reason",
    caption: "Nguyên nhân",
  },
];

const grid_rankAbnormal = $("#rankAbnormal")
  .dxDataGrid({
    ...defineTable,
    dataSource: data_rankAbnormal,
    columns: columns_rankAbnormal,
    onRowPrepared: function (e) {
      if (e.rowType == "header") {
        e.rowElement.css("background", color_header);
      }
    },
    onCellPrepared: function (e) {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("font-weight", "bold");
        e.cellElement.css("color", color_text);
      }
    },
  })
  .dxDataGrid("instance");

const data_quit = [
  {
    Date: "5/26/2023",
    Reason: "Cấp bậc thừa ký tự dấu cách",
    DateQuit: "5/20/2023",
    Empid: "A235739",
  },
];

const columns_quit = [
  {
    dataField: "Date",
    caption: "Ngày",
    dataType: "date",
  },
  {
    dataField: "Empid",
    caption: "Empid",
  },
  {
    dataField: "DateQuit",
    caption: "Ngày nghỉ việc",
    dataType: "date",
  },

  {
    dataField: "Reason",
    caption: "Nguyên nhân",
  },
];

const grid_quit = $("#quit")
  .dxDataGrid({
    ...defineTable,
    dataSource: data_quit,
    columns: columns_quit,
    onRowPrepared: function (e) {
      if (e.rowType == "header") {
        e.rowElement.css("background", color_header);
      }
    },
    onCellPrepared: function (e) {
      e.cellElement.css("text-align", "center");
      e.cellElement.css("vertical-align", "middle");
      if (e.rowType == "header") {
        e.cellElement.css("font-weight", "bold");
        e.cellElement.css("color", color_text);
      }
    },
  })
  .dxDataGrid("instance");
