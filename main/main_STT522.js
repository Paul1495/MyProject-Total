const data = [{
    ID: 1,
    Item: "CCUT3-L42,CCUT3-L41,CCUT3-L40",
    StyleNo: "A01XB23R109B-J1_2504",
    Zdcode: "000043093869",
    CutQty: 182,
    CutPlanQty: 1764,
    DateFinish: "20/3/2023"
},{
    ID: 2,
    Item: "CCUT3-L41,CCUT3-L40",
    StyleNo: "A01XB23R109B-J1_2505",
    Zdcode: "000043079126",
    CutQty: 1500,
    CutPlanQty: 2190,
    DateFinish: "20/3/2024"
},{
    ID: 3,
    Item: "CCUT3-L36",
    StyleNo: "A01XBF21W140-J1_2504",
    Zdcode: "000043038568",
    CutQty: 912,
    CutPlanQty: 1500,
    DateFinish: "05/3/2023"
}];

const columns_data = [
{ 
    dataField: "Item",
    caption: "机台号Mã máy",
    dataType: "text",
},{
    dataField: "StyleNo",
    caption: "款号 Mã hàng",
},{
    dataField: "Zdcode",
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
    dataType: "percent",
    format: '#0%',
    calculateCellValue: (rowData) => {
        rowData["Rate"] = rowData["CutQty"] / rowData["CutPlanQty"]
        return rowData["Rate"];
    }
},{
    dataField: "DateFinish",
    caption: "裁切完成日期Ngày hoàn thành cắt",
    dataType:"date",
}];
  
var grid = $('#grid').dxDataGrid({
    dataSource: data,
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




