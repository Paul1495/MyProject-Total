const description_data = [{
    ID: 1,
    ProductOrder: "000020152924",
    Style: 'W02BTF6945AD-J1F',
    QtyOfSaleOrder: 10,
    Application: '2000',
    NameOfApplication: "mat lieu",
    QtyOfCut: 10,
    QtyOut: 5,
    DateOut: '2023-03-10',
},{
    ID: 2,
    ProductOrder: "000031008559",
    Style: 'U02FCRM00238-J2',
    QtyOfSaleOrder: 1281,
    Application: '3003',
    NameOfApplication: "de lieu",
    QtyOfCut: 1281,
    QtyOut: 1200,
    DateOut: '2023-06-06',
},{
    ID: 3,
    ProductOrder: "000031008559",
    Style: 'U02FCRM00238-J2',
    QtyOfSaleOrder: 1281,
    Application: '4800',
    NameOfApplication: "xop tron",
    QtyOfCut: 1281,
    QtyOut: 1200,
    DateOut: '2023-06-07',
},{
    ID: 4,
    ProductOrder: "000031008559",
    Style: 'U02FCRM00238-J2',
    QtyOfSaleOrder: 1281,
    Application: '4810',
    NameOfApplication: "xop tron1",
    QtyOfCut: 1281,
    QtyOut: 1200,
    DateOut: '2023-06-08',
  
}];

const columns_data = [
{ 
    dataField: "ProductOrder",
    caption: "制单号 Đơn sản xuất",
    dataType: "text",
},{
    dataField: "Style",
    caption: "款号 Mã hàng",
},{
    dataField: "QtyOfSaleOrder",
    caption: "订单数量 Số lượng đơn hàng",
    dataType: "number",
},{
    dataField: "Application",
    caption: "工作层次 Nhóm công đoạn",
},{
    dataField: "NameOfApplication",
    caption: "工作层次名称 Tên nhóm công đoạn",
},{
    dataField: "QtyOfCut",
    caption: "已裁数量 Số lượng đã cắt",
    dataType: "number",
},{
    dataField: "QtyOut",
    caption: "已出仓数量 Số lượng đã xuất kho",
    dataType:"number",
},{
    dataField: "DateOut",
    caption: "交货日期 Ngày xuất hàng",
    dataType:"date",
}];
  
var grid = $('#grid').dxDataGrid({
    dataSource: description_data,
      keyExpr: 'ID',
      columns: columns_data,
      wordWrapEnabled: true,
      showBorders: true,
}).dxDataGrid('instance');

var onRowPrepared = function (e) {
    // console.log(e);
    if(e.rowType == "header") {
        e.rowElement.css('background', '#f8cbad');
        return;
    }
};

grid.option('onRowPrepared', onRowPrepared);

var onCellPrepared = function (e) {
    console.log(e);
    e.cellElement.css("text-align", "center");
    e.cellElement.css("vertical-align", "middle");
 
    if (e.rowType == "header") {
        e.cellElement.css('font-weight', 'bold');
        e.cellElement.css('color', '#000000');
        return;
    }
    };

grid.option('onCellPrepared', onCellPrepared);




