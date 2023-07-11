const columns_data = [
  {
    dataField: "Factory",
    caption: " 工厂 Nhà máy",
  },
  {
    dataField: "TypeKanban",
    caption: "看板 Kanban",
  },
  {
    dataField: "Description",
    caption: "看板地址 Địa chỉ kanban",
  },
  {
    dataField: "Department",
    caption: "部门 Bộ phận",
  },
  {
    dataField: "Workshop",
    caption: "车间 Xưởng",
  },
  {
    dataField: "KanbanName",
    caption: "看板名称 Tên kanban",
    dataType: "date",
    format: "MM/dd/yyyy",
  },
  {
    dataField: "Key",
    caption: "Key",
    visible: false,
  },
  {
    caption: "开关状态 Trạng thái Kanban",
    columns: [
      {
        dataField: "Morning",
        caption: "上午Sáng",
        cellTemplate: (container, e) => {
          let color = COLOR_OK;
          if (e.data.Morning === 1) {
            color = COLOR_NG;
          } else if (e.data.Morning === 0) {
            color = COLOR_DEFAULT;
          }
          //container.text(e.data.StatusMorning);
          container.css("background-color", color);
          //container.css("font-weight", "bold");
        },
      },
      {
        dataField: "Afternoon",
        caption: "下午Chiều",
        cellTemplate: (container, e) => {
          let color = COLOR_OK;
          if (e.data.Afternoon === 1) {
            color = COLOR_NG;
          } else if (e.data.Afternoon === 0) {
            color = COLOR_DEFAULT;
          }
          container.css("background-color", color);
        },
      },
      {
        dataField: "Night",
        caption: "夜班Đêm",
        cellTemplate: (container, e) => {
          let color = COLOR_OK;
          if (e.data.Night === 1) {
            color = COLOR_NG;
          } else if (e.data.Night === 0) {
            color = COLOR_DEFAULT;
          }
          container.css("background-color", color);
        },
      },
    ],
  },
  {
    dataField: "UploadStatus",
    caption: "计划上传 Tải biểu kế hoạch",
    visible: false,
    cellTemplate: (container, e) => {
      let color = COLOR_OK;
      let textValue = "Tải biểu";
      if (e.data.UploadStatus === 1) {
        color = COLOR_LATE;
        textValue = "Tải muộn";
      } else if (e.data.UploadStatus === 0) {
        color = COLOR_NG;
        textValue = "Không tải";
      } else if (e.data.UploadStatus === 9) {
        color = COLOR_DEFAULT;
        textValue = "";
      }
      container.text(textValue);
      container.css("background-color", color);
      container.css("font-weight", "bold");
    },
  },
  {
    dataField: "Result",
    caption: "结论 Kết luận",
    cellTemplate: (container, e) => {
      let color = COLOR_OK;
      if (e.data.Result === "NG") {
        color = COLOR_NG;
      }
      container.text(e.data.Result);
      container.css("background-color", color);
      container.css("font-weight", "bold");
    },
  },
];
