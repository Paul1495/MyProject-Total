const data = [{
    StyleNo: "S1003047AB29_2506",
    Zdcode: "000086001005",
    SaleNo: "A160112009",
    ProjectNumber: 130,
    QtyWhiteEmbryos: 3510,
    QtyColorEmbryos: 3262,
    QtyDeduction: 46,
    QtyColorEmbryoScrap:232,
},{
    StyleNo: "S1001712AH01_2502",
    Zdcode: "000071003046",
    SaleNo: "A160116694",
    ProjectNumber: 20,
    QtyWhiteEmbryos: 11332,
    QtyColorEmbryos: 11099,
    QtyDeduction: 98,
    QtyColorEmbryoScrap: 142,
},{
    StyleNo: "S1003280AP09_2602",
    Zdcode: "000021002588",
    SaleNo: "H160119108",
    ProjectNumber: 10,
    QtyWhiteEmbryos: 1247,
    QtyColorEmbryos: 1203,
    QtyDeduction: 59,
    QtyColorEmbryoScrap: 1,
}];

const columns_data = [
{
    dataField: "StyleNo",
    caption: "款号 Mã hàng",
},{
    dataField: "SaleNo",
    caption: "销售单号SO lớn",
},{
    dataField: "ProjectNumber",
    caption: "项目号Số hạng mục",
},{
    dataField: "Zdcode",
    caption: "工单MO",
},{
    dataField: "QtyWhiteEmbryos",
    caption: "白胚数量Số lượng phôi trắng",
    dataType: "number"
},{
    dataField: "QtyColorEmbryos",
    caption: "色胚数量Số lượng phôi màu",
    dataType: "number"
},{
    caption: "损耗数据Số lượng hao tổn",
    columns:[{
        dataField: "QtyDeduction",
        caption: "扣数流程数Số lượng khấu trừ",
        dataType: "number"
    },{
        dataField: "QtyColorEmbryoScrap",
        caption: "色胚报废Phôi màu báo phế",
        dataType: "number"
    }]
},{
    dataField: "QtyDifferences",
    caption: "差异数量Số lượng chênh lệch",
    dataType: "numnber",
    calculateCellValue: (rowData) => {
        rowData["QtyDifferences"] = rowData["QtyWhiteEmbryos"] - rowData["QtyColorEmbryos"] - rowData["QtyDeduction"] - rowData["QtyColorEmbryoScrap"]
        return rowData["QtyDifferences"];
    }
}];
  
var grid = $('#grid').dxDataGrid({
    dataSource: data,
    columns: columns_data,
    wordWrapEnabled: true,
    showBorders: true,
}).dxDataGrid('instance');

var onRowPrepared = function (e) {
    // console.log(e);
    if(e.rowType == "header") {
        e.rowElement.css('background', '#a9d08e');
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
        if (e.column.dataField === "QtyDeduction" || e.column.dataField === "QtyColorEmbryoScrap" || e.column.caption === "损耗数据Số lượng hao tổn") {
            e.cellElement.css('background', '#f8cbad');
        }
    }
    };

grid.option('onCellPrepared', onCellPrepared);




