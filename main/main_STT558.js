const data = [{
    Date:"3/15/2023",
    CustName:"萬事達(VS - PINK)",
    StyleNo: "S100111AP09_2602",
    QtyCheck:486,
    QtyQualified:447,
    ScrapColorPoint: 9,
    ScrapTorn: 3,
    ScrapYarnBreak: 3,
    FixDeviantFolding:24
},{
    Date:"3/15/2023",
    CustName:"常盛美國",
    StyleNo: "S1001712AH01_2602",
    QtyCheck:1113,
    QtyQualified: 1072,
    ScrapYarnHook: 13,
    ScrapTorn: 1,
    ScrapYarnBreak: 10,
    ScrapTieThread: 3,
    FixDirtyByDropping: 14
},{
    Date:"3/15/2023",
    CustName:"萬事達(維多妮)",
    StyleNo: "S1003094AV01_2602",
    QtyCheck: 2230,
    QtyQualified: 2114,
    ScrapRopePrint: 4,
    ScrapTorn: 2,
    ScrapYarnBreak: 22,
    FixDirtyByColor: 71,
    FixScabrous: 12,
    FixYarnBelt: 5
}];



const columns_data = [
{
    dataField: "Date",
    caption: "日期 Ngày",
},{
    dataField: "CustName",
    caption: "客户 Khách hàng",
},{
    dataField: "StyleNo",
    caption: "款号 Mã hàng",
},{
    dataField: "QtyCheck",
    caption: "总查数 Tổng số lượng kiểm",
},{
    dataField: "QtyQualified",
    caption: "合格数 Số lượng hợp cách",
},{
    dataField: "RateQualified",
    caption: "合格率 Tỷ lệ hợp cách",
    dataType: "percent",
    format: "#0.00%", 
    calculateCellValue: (rowData) => {
        rowData["RateQualified"] = rowData["QtyQualified"] / rowData["QtyCheck"];
        return rowData["RateQualified"];
    }
},{
    dataField: "QtyError",
    caption: "不良数 Số lượng lỗi",
    dataType: "number",
    calculateCellValue: (rowData) => {
        rowData["QtyError"] = rowData["QtyScrap"] + rowData["QtyFix"];
        return rowData["QtyError"];
    }
},{
    caption: "报废 Hàng phế",
    columns:[{
        caption: "染厂报废 Vấn đề nhuộm",
        columns: [{
            dataField: "ScrapColorPoint",
            caption: "色点 Bẩn màu",
            calculateCellValue: (rowData) => {
                if (rowData["ScrapColorPoint"]) {
                    return rowData["ScrapColorPoint"];
                } else {
                    rowData["ScrapColorPoint"] = 0;
                    return rowData["ScrapColorPoint"];
                }
            }
        },{
            dataField: "ScrapYarnHook",
            caption: "勾纱 Móc sợi",
            calculateCellValue: (rowData) => {
                if (rowData["ScrapYarnHook"]) {
                    return rowData["ScrapYarnHook"];
                } else {
                    rowData["ScrapYarnHook"] = 0;
                    return rowData["ScrapYarnHook"];
                }
            }
        },{
            dataField: "ScrapRopePrint",
            caption: "绳子印 Buộc day chay",
            calculateCellValue: (rowData) => {
                if (rowData["ScrapRopePrint"]) {
                    return rowData["ScrapRopePrint"];
                } else {
                    rowData["ScrapRopePrint"] = 0;
                    return rowData["ScrapRopePrint"];
                }
            }
        }] 
    },{
        caption: "织机报废 Vấn đề dệt",
        columns: [{
            dataField: "ScrapTorn",
            caption: "罗口破洞 Rách",
            calculateCellValue: (rowData) => {
                if (rowData["ScrapTorn"]) {
                    return rowData["ScrapTorn"];
                } else {
                    rowData["ScrapTorn"] = 0;
                    return rowData["ScrapTorn"];
                }
            }
        },{
            dataField: "ScrapYarnBreak",
            caption: "断纱 Đứt sợi",
            calculateCellValue: (rowData) => {
                if (rowData["ScrapYarnBreak"]) {
                    return rowData["ScrapYarnBreak"];
                } else {
                    rowData["ScrapYarnBreak"] = 0;
                    return rowData["ScrapYarnBreak"];
                }
            }
        },{
            dataField: "ScrapTieThread",
            caption: "断纱 Buộc chỉ ",
            calculateCellValue: (rowData) => {
                if (rowData["ScrapTieThread"]) {
                    return rowData["ScrapTieThread"];
                } else {
                    rowData["ScrapTieThread"] = 0;
                    return rowData["ScrapTieThread"];
                }
            }
        }] 
    },{
        caption: "数量 Số lượng",
        dataField: "QtyScrap",
        calculateCellValue: (rowData) => {
            rowData["QtyScrap"] = rowData["ScrapColorPoint"] + rowData["ScrapYarnHook"] + rowData["ScrapRopePrint"] + rowData["ScrapTorn"] + rowData["ScrapYarnBreak"] + rowData["ScrapTieThread"]
            return rowData["QtyScrap"];
        }
    },{
        caption: "比率 Tỷ lệ",
        dataField: "RateScrap",
        dataType: "percent",
        format: "#0.00%", 
        calculateCellValue: (rowData) => {
            rowData["RateScrap"] = rowData["QtyScrap"] / rowData["QtyCheck"]
            return rowData["RateScrap"];
        }
    }]
},{
    caption: "返修 Hàng sửa",
    columns:[{
        caption: "染厂报废 Vấn đề nhuộm",
        columns: [{
            dataField: "FixDirtyByDropping",
            caption: "人为脏 Bẩn đánh rơi",
            calculateCellValue: (rowData) => {
                if (rowData["FixDirtyByDropping"]) {
                    return rowData["FixDirtyByDropping"];
                } else {
                    rowData["FixDirtyByDropping"] = 0;
                    return rowData["FixDirtyByDropping"];
                }
            }
        },{
            dataField: "FixDirtyByColor",
            caption: "色点 Bẩn màu",
            calculateCellValue: (rowData) => {
                if (rowData["FixDirtyByColor"]) {
                    return rowData["FixDirtyByColor"];
                } else {
                    rowData["FixDirtyByColor"] = 0;
                    return rowData["FixDirtyByColor"];
                }
            }
        }] 
    },{
        caption: "织机报废 Vấn đề dệt",
        columns: [{
            dataField: "FixDeviantFolding",
            caption: "叠偏 Gấp lệch",
            calculateCellValue: (rowData) => {
                if (rowData["FixDeviantFolding"]) {
                    return rowData["FixDeviantFolding"];
                } else {
                    rowData["FixDeviantFolding"] = 0;
                    return rowData["FixDeviantFolding"];
                }
            }
        },{
            dataField: "FixScabrous",
            caption: "下罗口牙齿印 Cạp sần",
            calculateCellValue: (rowData) => {
                if (rowData["FixScabrous"]) {
                    return rowData["FixScabrous"];
                } else {
                    rowData["FixScabrous"] = 0;
                    return rowData["FixScabrous"];
                }
            }
        },{
            dataField: "FixYarnBelt",
            caption: "带纱 Lan soi ",
            calculateCellValue: (rowData) => {
                if (rowData["FixYarnBelt"]) {
                    return rowData["FixYarnBelt"];
                } else {
                    rowData["FixYarnBelt"] = 0;
                    return rowData["FixYarnBelt"];
                }
            }
        }] 
    },{
        caption: "数量 Số lượng",
        dataField: "QtyFix",
        calculateCellValue: (rowData) => {
            rowData["QtyFix"] = rowData["FixDirtyByDropping"] + rowData["FixDirtyByColor"] + rowData["FixDeviantFolding"] + rowData["FixScabrous"] + rowData["FixYarnBelt"];
            return rowData["QtyFix"];
        }
    },{
        caption: "比率 Tỷ lệ",
        dataField: "RateFix",
        dataType: "percent",
        format: "#0.00%",
        calculateCellValue: (rowData) => {
            rowData["RateFix"] = rowData["QtyFix"] / rowData["QtyCheck"]
            return rowData["RateFix"];
        }
    }]
}];

const listName = [
    "ScrapColorPoint",
    "ScrapYarnHook",
    "ScrapRopePrint",
    "ScrapTorn",
    "ScrapYarnBreak",
    "ScrapTieThread",
    "FixDirtyByDropping",
    "FixDirtyByColor",
    "FixDeviantFolding",
    "FixScabrous",
    "FixYarnBelt"
];
  
var gridDetail = $('#detail').dxDataGrid({
    dataSource: data,
    columns: columns_data,
    showColumnLines: true,
    showRowLines: true,
    wordWrapEnabled: true,
    showBorders: true,
    onRowPrepared: function(e) {
        if(e.rowType == "header") {
            e.rowElement.css('background', '#f8cbad');
        }
    },
    onCellPrepared: function (e) {
        console.log(e);
        e.cellElement.css("text-align", "center");
        e.cellElement.css("vertical-align", "middle");
        if (e.rowType == "header") {
            e.cellElement.css('font-weight', 'bold');
            e.cellElement.css('color', '#000000');
            if (listName.includes(e.column.dataField) || e.column.caption === "织机报废 Vấn đề dệt" || e.column.caption === "染厂报废 Vấn đề nhuộm" ) {
                e.cellElement.css('background', '#c6e0b4');
            }
            if (e.column.caption === "数量 Số lượng" || e.column.caption === "比率 Tỷ lệ") {
                e.cellElement.css('background', '#92d050');
            }
        }
    }
}).dxDataGrid('instance');







