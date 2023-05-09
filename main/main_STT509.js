//Get data from file Data
import {
    orderDetails,
    targets,
    outputs
}
from '../data/data_STT509.js';

//Find unique(Line) value in array Outputs
const listLine = [...new Set(outputs.map(item => item.Workline))];
//Create a empty variable to push all data after processing
const data = [];

//Get data from array outputs compare to listLine. Use forEach loop over each element.
$.each(listLine, (i, line) => {
    //Create a variable to save result after processing. Use filter to get all Data from array outputs.
    const lineData = outputs.filter(out => out.Workline === line);
    //Find unique(Zdcode) value in array lineData
    const orders = [...new Set(lineData.map(item => item.Zdcode))];
    //Get data from array lineData. Use forEach loop over each element.
    $.each(orders, (y, order) => {
        //Create a variable to save result after processing. Use filter to get all Data from array lineData.
        const orderData = lineData.filter(line => line.Zdcode === order);
        //Get information about Factory, SO, MO, ShipDate,....from array orderDetails and then save result in a variable. Use find 
        const orderDetail = orderDetails.find(detail => detail.Zdcode === order);
        //Get data about TargetQuantity from array targets and save all in a variable. Use find
        const target = targets.find(target => target.Zdcode === order && target.Workline === line);
         //Create a empty variable to push all data after processing
        const combine = {
            ...orderDetail,
            Workline: line,
            Zdcode: order,
            TargetQuantity: target?.TargetQuantity ?? 0
         };
        //Combined all data according to Zdcode. Use forEach loop over each element.
        $.each(orderData, (z, data) => {
            combine[`${data.GxNo}${data.Type}`] = data.Quantity;
        })
         //Push all data inside object combine in data(empty variable)
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
        caption: "款号Mã hàng",
    },{
        dataField: "SaleNo",
        caption: "销售单号Mã đơn tiêu thụ",
    },{
        dataField: "Zdcode",
        caption: "工单号Đơn sản xuất",
    },{
        dataField: "ExportDate",
        caption: "出货日期Ngày xuất hàng",
        dataType: "date",
        format: 'MM/dd/yyyy',
    },{
        dataField: "ColorNo",
        caption: "颜色 Màu sắc",
    },{
        dataField: "Size",
        caption: "Size",
    },{
        dataField: "Quantity",
        caption: "订单数量Sản lượng đặt hàng",
    },{
        dataField: "TargetQuantity",
        caption: "Số lượng cần sản xuất hôm nay",
    }
];

const group_columns_data = [
    {
        name: "Shaping",
        caption: "定型生产Định hình sản xuất",
    },{
        name: "Import",
        caption: "来料-后工序来料入仓 Liệu đến(cds nhập kho)",
    },{
        name: "Cutting",
        caption: "啤机Cắt Dập"
    },{
        name: "CheckFirst",
        caption: "查货一次KIỂM HÀNG Lần 1"
    },{
        name: "CheckSecond",
        caption: "查货二次KIỂM HÀNG Lần 2"
    },{
        name: "Packing",
        caption: "包装Đóng gói"
    },{
        name: "Finish",
        caption: "验针Nghiệm kiểm"
    },{
        name: "Export",
        caption: "已入仓库Công đoạn sau xuất kho"
    }
];

const setupAllTable = group_columns_data.map((x) => {
    const dataField = `${x.name}Today`;
    const acculmulateDataField = `${x.name}Accumulated`;
    const lackDataField = `${x.name}Lack`;

    const column = {
        dataField: x.name,
        caption: x.caption,
        columns: [{
            dataField: dataField,
            caption: "当天Hôm nay",
            calculateCellValue: (rowData) => {
                if(rowData[dataField]) {
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
                if(rowData[acculmulateDataField]) {
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
                // if (rowData["TargetQuantity"]) {
                    rowData[lackDataField] = rowData["Quantity"] - rowData[acculmulateDataField] - rowData[dataField];
                    return rowData[lackDataField];
                // }
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

const grid = $('#grid').dxDataGrid({
    dataSource: data,
    paging: {//Chia page trang web
        enabled: false,
    },
    // pager : {
    //     visible: true,
    // },
    scrolling: {
        columnRenderingMode:"standard",
        mode:"standard",
        scrollByContent:true,
    },
    showColumnLines: true,
    showRowLines: true,
    columns: [
        ...columns_data,
        ...setupAllTable.map(x => x.column),
    ],
    showBorders: true,
    wordWrapEnabled: true,
    summary: {
        groupItems: [
            ...setupAllTable.map(x => x.summary).flat(),
        ],
      },
    
}).dxDataGrid('instance');

const onRowPrepared = function (e) {
    if(e.rowType == "header") {
        e.rowElement.css('background', '#92cddc');
        return;
    }
    if(e.rowType == "group") {
       e.rowElement.css('background', '#404040');
       e.rowElement.css('color', 'white');
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
        e.cellElement.css('background', 'yellow')
    }
    
    // if(e.rowType === "groupFooter"){
    //     e.cellElement.css({'background':'#FFD966'});
    //     return;
    // }
};

grid.option('onCellPrepared', onCellPrepared);



