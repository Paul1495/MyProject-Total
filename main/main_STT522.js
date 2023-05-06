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
    dataField: "Item",
    caption: "机台号Mã máy",
    dataType: "text",
},{
    dataField: "Style",
    caption: "款号 Mã hàng",
},{
    dataField: "SOItem",
    caption: "生产工单号Mã đơn sản xuất",
    dataType: "number",
},{
    dataField: "CutQty",
    caption: "当日裁切数量(片)Số lượng cắt trong ngày",
},{
    dataField: "CutPlanQty",
    caption: "当日计划裁切数量(片)Số lượng cắt KH trong ngày",
},{
    dataField: "Rate",
    caption: "完成比例Tỷ lệ hoàn thành",
},{
    dataField: "DateFinish",
    caption: "裁切完成日期Ngày hoàn thành cắt",
    dataType:"date",
}];
  
var grid = $('#grid').dxDataGrid({
    dataSource: [],
      keyExpr: 'ID',
      columns: columns_data,
      wordWrapEnabled: true,
      showBorders: true,
}).dxDataGrid('instance');

var onRowPrepared = function (e) {
    // console.log(e);
    if(e.rowType == "header") {
        e.rowElement.css('background', '#f4b084');
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




