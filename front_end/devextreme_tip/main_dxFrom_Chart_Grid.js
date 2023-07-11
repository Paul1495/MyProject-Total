const colorHeader = "#ffcccc";
const colorText = "#000000";
const colorPalleteWorkshop = ["#a9d08e", "#c00000"];
const colorPalleteDepartment = ["#a9d08e", "#c00000", "#ffc000", "#ed7d31"];

//DxForm sử dụng cho việc tạo các thẻ button với chức năng get dữ liệu từ data sever
const form = $("#form")
  .dxForm({
    formData: [],
    items: [
      {
        itemType: "group",
        caption: "",
        colCount: 5,
        items: [
          {
            dataField: "FromDate",
            label: {
              text: "Từ ngày", //Thông tin hiện thị bên cạnh hộp
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
              text: "Đến ngày",
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
              searchEnabled: true,
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
              type: "success",
              //Một trong các cách giúp load dữ liệu bớt lag nhất, đó là set lại thông tin sau khi lấy dữ liệu
              onClick: function () {
                let data = form.option("formData"); //Lấy dữ liệu người dùng đã nhập tại các box
                let factory = $("#inpFactory") //lấy value người dùng đã chọn tại ô Factory(lưu ý trong dxForm phần dx trước instance sẽ theo loại editorType của ô đó)
                  .dxSelectBox("instance")
                  .option("value");
                if (
                  data.FromDate != null &&
                  data.ToDate != null &&
                  data.Type === 0 &&
                  data.Factory != null
                ) {
                  chart.option("palette", colorPalleteWorkshop); //Thay đổi màu sắc của chart
                  chart.option("series", seriesWorkshop); //Thay đổi series của chart
                  chart.option(
                    "title.text",
                    `${factory} 后工序产线中控看板各车间使用情况（天)` //Thay đổi title dựa theo biến factory bằng cách getValue đã chọn trong thẻ selectBox Factory
                  );
                  chart.option(
                    "title.subtitle.text",
                    `Tình hình sử dụng kanban công đoạn sau của các xưởng ${factory} ( Ngày )`
                  );
                  Get(data.FromDate, data.ToDate, data.Type, data.Factory); //Chuyền param vào biến đầu vào đã đc demo sẵn để lấy data trên sever
                } else if (
                  data.FromDate != null &&
                  data.ToDate != null &&
                  data.Type === 1 &&
                  data.Factory != null
                ) {
                  chart.option("palette", colorPalleteDepartment);
                  chart.option("series", seriesDeparment);
                  chart.option(
                    "title.text",
                    `${factory} 各部门看板使用情况（天)`
                  );
                  chart.option(
                    "title.subtitle.text",
                    `Tình hình sử dụng kanban các bộ phận ${factory} ( Ngày )`
                  );
                  Get(data.FromDate, data.ToDate, data.Type, data.Factory);
                } else {
                  alert("Vui lòng nhập đầy đủ thông tin");
                }
              },
            },
          },
        ],
      },
    ],
  })
  .dxForm("instance");

//Define series cũng giống như define sẵn dữ liệu của cột column để có thể điều chỉnh trong chart
const seriesWorkshop = [
  {
    valueField: "OK",
    name: "OK",
    axis: "total", //axis là để nhóm các cột cần tính dữ liệu lại
    label: {
      visible: true, //Sự hiện thị dữ liệu của thông tin của các cột trong biểu đồ
      alignment: "center", //Vị trí xuất hiện của thông tin sẽ có center, right, left
      showForZeroValues: false, //Set để với những cuột có giá trị bằng 0 sẽ ko hiển thị
    },
  },
  {
    valueField: "NG",
    name: "NG",
    axis: "total",
    label: {
      visible: true,
      alignment: "center",
      showForZeroValues: false,
    },
  },
  {
    axis: "percent",
    type: "line", //loại đồ thị mà bạn muốn set up khi kết hợp nhiều hơn 1 loại đồ thị trên cùng 1 bảng biểu
    valueField: "Rate",
    name: "Tỷ lệ SD", //Set name
    color: "#2e75b6", // Set màu cho đồ thị
    label: {
      visible: true, //cho hiện label
      position: "outside", //Vị trí mà label xuất hiện
      customizeText(e) {
        //tùy biến thể hiện và define dữ liệu theo ý mình muốn để show ra màn hình giá trị của từng đường kẻ
        return `${e.valueText} %`;
      },
    },
  },
];

const seriesDeparment = [
  {
    valueField: "OK",
    name: "OK",
    axis: "total",
    label: {
      visible: true,
      alignment: "center",
      showForZeroValues: false,
    },
  },
  {
    valueField: "NG",
    name: "Không bật",
    axis: "total",
    label: {
      visible: true,
      alignment: "center",
      showForZeroValues: false,
    },
  },
  {
    valueField: "NotUpload",
    name: "Không tải",
    axis: "total",
    label: {
      visible: true,
      alignment: "center",
      showForZeroValues: false,
    },
  },
  {
    valueField: "LateUpload",
    name: "Cập nhật muộn",
    axis: "total",
    label: {
      visible: true,
      alignment: "center",
      showForZeroValues: false,
    },
  },
  {
    axis: "percent",
    type: "line",
    valueField: "Rate",
    name: "Tỷ lệ SD",
    color: "#2e75b6",
    label: {
      visible: true,
      position: "inside",
      customizeText(e) {
        return `${e.valueText} %`;
      },
    },
  },
];

//Sau khi đã define xong phần series chúng ta sẽ có dữ liệu như bên dưới hình
const chart = $("#chart")
  .dxChart({
    synchronizeMultiAxes: true, //Không thể thiếu khi ứng dúng với nhiều biểu đồ có hơn 1 trục giá trị, cho phép đồng bộ hóa 2 trục giá trị lại với nhau trên 1 ngăn
    palette: colorPalleteWorkshop,
    commonSeriesSettings: {
      argumentField: "Group", //tên giá trị sẽ đứng ra để so sánh
      type: "stackedBar", //loại biểu đồ
    },
    series: seriesWorkshop,
    valueAxis: [
      //Define 2 trục giá trị
      {
        name: "percent",
        position: "right",
        wholeRange: [0, 80], //Chia giá trị tối đa của trục sẽ nhận được
        visualRange: [0, 80],
        tickInterval: 20, // Chia tỷ lệ các mốc sẽ hiển thị đối vàng hàng %
        label: {
          visible: true,
          customizeText(e) {
            return `${e.valueText} %`;
          },
        },
      },
      {
        name: "total",
        position: "left",
        //tickInterval: 10/5, //để vẽ số hàng của hàng số đơn vị, phần% mặc định nhưng phần dữ liệu bao nhiêu sẽ xử lý dữ liệu luôn tại bước biến đầu vào
        //visualRange: [0, 10],
        //wholeRange: [0, 10],
      },
    ],
    title: {
      font: {
        //Chỉnh sửa define phần thông tin của tiêu đề trên
        size: 20,
        weight: 500,
      },
      subtitle: {
        //Chỉnh sửa define phần thông tin của tiêu đề bên trong bên dưới con của title
        font: {
          size: 20,
          weight: 600,
        },
      },
    },
    legend: {
      verticalAlignment: "bottom", //vị trí hiển thị
      horizontalAlignment: "center", //căn chỉnh lề có center, right, left
    },
  })
  .dxChart("instance");

//Define biểu đồ Grid
var grid = $("#grid")
  .dxDataGrid({
    ...VIEW_GRID_OPTION, //Bao gồm nhiều trường dữ liệu đã đc define sẵn trong thẻ view ứng dụng cho các bảng báo cáo
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
      if (e.rowType === "data") {
        // Lấy dữ liệu từ cột bên dưới header trở đi
        if (e.data.Factory === "使用比例 - Tỷ lệ SD") {
          //Define 1 dong dữ liệu theo kiểu mà bạn mong muốn hiển thị ra bên ngoài màn hình
          e.cellElement[0].innerHTML = `${e.value} %`;
          return;
          //e.cellElement[0][`text`]
        }

        if (e.data.Factory != "异常明细 - Chi tiết bất thường") {
          //Loại bỏ dòng tiêu đề
          return;
        }

        if (e.column.dataField === "Factory") {
          //Loại bỏ dữ liệu tại cột tiêu đề
          return;
        }
        e.cellElement[0].innerHTML = "";
        //e.cellElement[0] chính cách chọc vào thẻ td bao bọc bên ngoài các trường thông tin bên trong báo biểu,
        //hàm này là cách làm ẩn đi giá trị có sẵn trong dataSource để ta có thể show lại giá trị dưới dạng khác sau khi đã chỉnh sửa
        var cellElement = e.cellElement[0]; //Sau khi đã xóa dữ liệu có sẵn, sau đó lúc này sẽ lấy lại giá trị

        $.each(e.data[`${e.column.dataField}`], (i, data) => {
          //Truy cập vào dũe liệu sâu bên trong e của onCellPrepared, lặp qua nó để lấy dữ liệu
          //Tạo 1 thẻ div bọc bên ngoài thông tin text bạn muốn hiển thị
          var container = document.createElement("div");
          container.className = "text-left"; //Add className cho thẻ div

          //Tạo thẻ span cho phần tử con đầu tiên
          var spanDate = document.createElement("span");
          var textDate = document.createTextNode(`${data.Date}: `); //Tạo tex bên trong thẻ span
          spanDate.style = "font-weight: bold"; //Add style cho thẻ span
          spanDate.appendChild(textDate); //Add thẻ span vào bên trong thẻ div cha

          var spanDetail = document.createElement("span");
          var textDetail = document.createTextNode(data.Detail);
          spanDetail.appendChild(textDetail);

          container.appendChild(spanDate); //add các phần tử span và con của nó vào bên trong thẻ div
          container.appendChild(spanDetail); //add các phần tử span và con của nó vào bên trong thẻ div
          cellElement.appendChild(container); //add thẻ div cha vào bên trong thẻ td mình muốn hiển thị
        });
      }
    },
  })
  .dxDataGrid("instance");
