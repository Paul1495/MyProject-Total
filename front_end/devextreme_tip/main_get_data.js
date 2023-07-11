function Get(pStartDate, pEndDate, pType, pFactory) {
  AjaxBase(
    null,
    "/Hub/GetFrequencyAnalysis",
    "POST", //Get dữ liệu trên sever, cú pháp kèm param đầu vào theo các thông tin bên dưới
    {
      startDate: pStartDate,
      endDate: pEndDate,
      type: pType,
      factory: pFactory,
    },
    (response) => {
      //Kết quả trả về sẽ khiện thị tại đây
      //console.log(response)
      if (response != "") {
        let ds = JSON.parse(response.data);
        //console.log(ds);
        let gridDS = [];
        let grNameList = [...new Set(ds.map((x) => x.GroupName))]; //Tổng hợp dữ liệu lấy ra list danh sách tên của các chuyền
        $.each(grNameList, (i, gr) => {
          let obj = {
            Group: gr,
          };
          let grChildList = ds.filter((x) => x.GroupName == gr); //Sử dụng filter thay cho vòng lặp foreach để lấy ra giá trị mình cần với điều kiện bên trong filter
          if (grChildList[0].UploadStatus) {
            obj["OK"] = grChildList.filter(
              (x) => x.PowerLog == "OK" && x.UploadStatus == "OK"
            ).length; //Đếm số lượng với length
            obj["NotUpload"] = grChildList.filter(
              (x) => x.PowerLog == "OK" && x.UploadStatus == "NG"
            ).length;
            obj["LateUpload"] = grChildList.filter(
              (x) => x.PowerLog == "OK" && x.UploadStatus == "Lated"
            ).length;
            obj["Rate"] =
              Math.round(
                (obj["OK"] / grChildList.length) * 10000 + Number.EPSILON
              ) / 100; //Cách tính tỉ lệ % và làm tròn
            obj["NG"] = grChildList.filter((x) => x.PowerLog == "NG").length;
            obj["Detail"] = grChildList.filter(
              (x) =>
                x.PowerLog == "NG" ||
                (x.PowerLog == "OK" && x.UploadStatus == "NG") ||
                (x.PowerLog == "OK" && x.UploadStatus == "Lated")
            );
          } else {
            obj["OK"] = grChildList.filter((x) => x.PowerLog == "OK").length;
            obj["NG"] = grChildList.filter((x) => x.PowerLog == "NG").length;
            obj["Rate"] =
              Math.round(
                (obj["OK"] / grChildList.length) * 10000 + Number.EPSILON
              ) / 100;
            obj["Detail"] = grChildList.filter((x) => x.PowerLog == "NG");
          }

          gridDS.push(obj);
        });
        console.log(gridDS);

        const nameFactory = $("#inpFactory")
          .dxSelectBox("instance")
          .option("value"); //Lấy giá trị bên trong hộp selectBox đã chọn do người dùng chọn
        const countDate = [...new Set(ds.map((x) => x.Date))].length; //Đếm số ngày đầu vào để set value cho valueAxis cột bên trái để set tichInterval, wholeRange and visualRange
        const listColumns = [
          {
            dataField: "Factory",
            caption: nameFactory,
          },
        ];
        const dataSourceGrid = [];

        //Define sẵn các biến với các phần tử Factory có sẵn bên trong
        let OK = {},
          NG = {},
          Detail = {},
          Rate = {},
          NotUpload = {},
          LateUpload = {};
        NotUpload["Factory"] = "Không tải"; //Sử dụng cách [] thì với "" là sẽ gán 1 phần tử như bên cạnh vào trong biến
        //, nếu chưa tồn tại thì sẽ tạo mới còn tồn tại rồi thì sẽ ghi đè, còn `${}` sẽ lấy giá trị của 1 biến nào đó gán vào trong biến
        LateUpload["Factory"] = "Cập nhật muộn";
        OK["Factory"] = "OK";
        NG["Factory"] = "NG";
        Rate["Factory"] = "使用比例 - Tỷ lệ SD";
        Detail["Factory"] = "异常明细 - Chi tiết bất thường";

        $.each(gridDS, (i, analyst) => {
          let list = {};
          list[`dataField`] = analyst.Group;
          list[`encodeHtml`] = false; //encodeHtml define dữ liệu đầu ra hiển thị, gán trong column khi define để hiển thị dữ liệu bao gồm các ký tự như <br>
          list[`minWidth`] = 140;
          listColumns.push(list);

          OK[`${analyst.Group}`] = analyst.OK;
          NG[`${analyst.Group}`] = analyst.NG;
          NotUpload[`${analyst.Group}`] = analyst.NotUpload;
          LateUpload[`${analyst.Group}`] = analyst.LateUpload;
          Rate[`${analyst.Group}`] = analyst.Rate;
          Detail[`${analyst.Group}`] = analyst.Detail;
        });
        if (gridDS[0].NotUpload) {
          dataSourceGrid.push(
            ...[OK],
            ...[NG],
            ...[NotUpload],
            ...[LateUpload],
            ...[Rate],
            ...[Detail]
          ); //Thay vì viết push nhiều lần ta có thể viết kiểu khác như bên dưới
        } else {
          dataSourceGrid.push(...[OK], ...[NG], ...[Rate], ...[Detail]);
        }
        grid.option("dataSource", dataSourceGrid);
        grid.option("columns", listColumns);
        chart.option("dataSource", gridDS);
        chart.option("valueAxis[1].tickInterval", countDate / 5); //Để cân bằng với tichInterVal 20 của bằng % từ 0-80 thì với bảng giá trị số lượng thì sẽ bằng SL đầu vào / 5
        chart.option("valueAxis[1].visualRange.endValue", countDate);
        chart.option("valueAxis[1].wholeRange.endValue", countDate);
      }
    }
  );
}
