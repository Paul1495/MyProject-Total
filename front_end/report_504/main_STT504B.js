import {
    orderDetails,
    targets,
    outputs,
} from '../data_STT504B.js';

import {
    VIEW_GRID_OPTION
} from '../VIEW_GRID_OPTION.js';

const data = [];
const listLine = [...new Set(outputs.map(item => item.Workline))];
$.each(listLine, (i, line) => {
    const lineData = outputs.filter(out => out.Workline === line);
    const orders = [...new Set(lineData.map(item => item.Zdcode))];
    $.each(orders, (y, order) => {
        const orderData = lineData.filter(line => line.Zdcode === order);
        const orderDetail = orderDetails.find(detail => detail.Zdcode === order);
        const target = targets.find(tar => tar.Zdcode === order && tar.Workline === line);
        const combine = {
            ...orderDetail,
            Zdcode: order,
            Workline: line,
            TargetQuantity: target?.TargetQuantity ?? 0,
        };
        $.each(orderData, (z, data) => {
            combine[`${data.GxNo}${data.Type}`] = data.Quantity; 
        })
        data.push(combine);
    })
})
console.log(data);
// Set up sum config
function SUM(col) {
    return {
        column: col,
        summaryType: "sum",
        displayFormat: "{0}",
        showInGroupFooter: false,
        alignByColumn: true
    }   
};

// Set up column (permanent) 
const columns_data = [
    {
        dataField: "Workline",
        caption: "线别Chuyền",
        name: "LineGroup",
        visible: false,
        groupIndex: 0,//Set group Item 
    },{
        dataField: "Workline",
        caption: "线别Chuyền",
    },{
        dataField: "StyleNo",
        caption: "款号Khoản hàng",
        width: 120,
    },{
        dataField: "SaleNo",
        caption: "销售单号Đơn tiêu thụ",
        width: 120,
    },{
        dataField: "Zdcode",
        caption: "工单号Đơn sản xuất",
        width: 120,
    },{
        dataField: "ExportDate",
        caption: "出货日期Ngày xuất hàng",
        dataType: "date",
        format: 'MM/dd/yyyy',
        width: 100,
    },{
        dataField: "ColorNo",
        caption: "颜色 Màu sắc",
    },{
        dataField: "Size",
        caption: "尺码SIZE",
    },{
        dataField: "Quantity",
        caption: "订单数量Số lượng đơn đặt hàng",
        width: 100,
    },{
        dataField: "TargetQuantity",
        caption: "线别分配数量Sản lượng phân chuyền",
        width: 100,
    }
];

const group_columns_data = [
    {
        name: "697",
        caption: "配料Phối liệu",
    },{
        name: "698",
        caption: "打枣Đánh bọ",
    },{
        name: "700",
        caption: "成品Thành phẩm"
    }
];

const setupAllTable = group_columns_data.map((x) => {
    const dataField = `${x.name}Today`;
    const acculmulateDataField = `${x.name}Accumulated`;
    // const outDataField = x.name !== "DTSW618" ? `${x.name}_OUT` : `DTSW618_OUT`;
    const lackDataField = `${x.name}Lack`;

    const column = {
        dataField: x.name,
        caption: x.caption,
        columns: [{
            dataField: dataField,
            caption: "当天Hôm nay",
            calculateCellValue: (rowData) => {
                if (rowData[dataField]) {
                    return rowData[dataField];
                } else {
                    rowData[dataField] = 0;
                    return rowData[dataField];
                }
            }
        },{
            dataField: acculmulateDataField,
            caption: "累计Lũy kế",
            calculateCellValue: (rowData) => {
                if (rowData[acculmulateDataField]) {
                    return rowData[acculmulateDataField];
                } else {
                    rowData[acculmulateDataField] = 0;
                    return rowData[acculmulateDataField];
                }
            }
        },{
            dataField: lackDataField,
            caption: "欠数Số lượng thiếu",
            calculateCellValue: (rowData) => {
                rowData[lackDataField] = rowData["TargetQuantity"] - rowData[acculmulateDataField];
                return rowData[lackDataField]; 
            }
        }]
    };

    const summary = [
        SUM(dataField),
        SUM(acculmulateDataField),
        SUM(lackDataField),
    ];

    return {
        column,
        summary,
    }
});

const setupTable = [
    {
        dataField: "697To698",
        caption: "配料到打枣之间Phối liệu -->Đánh bọ",
        calculateCellValue: (rowData) => {
            rowData["697To698"] = rowData["697Lack"] - rowData["698Lack"];
            return rowData["697To698"]; 
        }
    },{
        dataField: "698To700",
        caption: "打枣到成品之间Đánh bọ --> Thành phẩm",
        calculateCellValue: (rowData) => {
            rowData["698To700"] = rowData["698Lack"] - rowData["700Lack"];
            return rowData["698To700"]; 
        }
    },{
        dataField: "697To700",
        caption: "配料到成品之间Nguyên liệu --> Thành phẩm",
        calculateCellValue: (rowData) => {
            rowData["697To700"] = rowData["697Lack"] - rowData["700Lack"];
            return rowData["697To700"]; 
        }
    }
];


const grid = $('#grid').dxDataGrid({
    ...VIEW_GRID_OPTION,
    dataSource: data,
    columns: [
        ...columns_data,
        ...setupAllTable.map(x => x.column),
        ...setupTable,
    ],
    showBorders: true,
    wordWrapEnabled: true,
    summary: {
        groupItems: [
            SUM("Quantity"),
            SUM("TargetQuantity"),
            ...setupAllTable.map(x => x.summary).flat(),
            SUM("697To698"),
            SUM("698To700"),
            SUM("697To700"),
        ],
      },
    
}).dxDataGrid('instance');

const onRowPrepared = function (e) {
    if(e.rowType == "header") {
        e.rowElement.css('background', '#ff46a0');
        return;
    }
    if(e.rowType == "group") {
       e.rowElement.css('background', '#ffc000');
       return;
    }

};
grid.option('onRowPrepared', onRowPrepared);

const onCellPrepared = function (e) {
    e.cellElement.css("text-align", "center");
    e.cellElement.css("vertical-align", "middle");
    if (e.rowType == "header") {
        e.cellElement.css('color', '#000000');
        e.cellElement.css('font-weight', 'bold');
    }

    if (e.rowType == "data" && e.column.dataField.includes("Accumulated")) {
        e.cellElement.css('background', 'yellow');
    }
    
    // if(e.rowType === "groupFooter"){
    //     e.cellElement.css({'background':'#FFD966'});
    //     return;
    // }
};

grid.option('onCellPrepared', onCellPrepared);



