import {
    orderDetails,
    targets,
    outputs
} from '../data/data_STT496.js';

console.log(orderDetails);
console.log(outputs);
console.log(targets);

// Processing Data
const listLine = [...new Set(outputs.map(item => item.Workline))]//Lấy ra giá trị line(chuyền) duy nhất trong mảng - Một danh sách các chuyền

const dataSource = []; 
$.each(listLine, (i, line) => {//Lặp qua từng phần tử trong biến listLine
    const lineData = outputs.filter(x => x.Workline === line)// So sánh với dữ liệu trong OutPut bảng tổng hợp để lấy ra dữ liệu tương ứng với từng Line
    const orders = [...new Set(lineData.map(item => item.Zdcode))]//Lấy ra giá trị Zdcode(mã đơn sản xuất) duy nhất trong từng Line
    
    $.each(orders, (y, order) => {//Lặp qua từng phần tử trong mảng chứa dữ liệu Zdcode duy nhất của từng chuyền
        const orderData = lineData.filter(z => z.Zdcode === order)// So sánh với dữ liệu trong lineData để lấy ngược lại tất cả các giá trị trong lineData theo Zdcode
        const orderDetail = orderDetails.find(z => z.Zdcode === order);//Set điều kiện để lấy các thông tin trong orderDetail để đẩy vào combine
        const target = targets.find(z => z.Zdcode === order && z.Workline === line)// Set điều kiện để lấy targetQuantity 
        const combine = {
            ...orderDetail,
            Workline: line,
            Zdcode: order,
            TargetQuantity: target?.TargetQuantity ?? 0
        }; 

        $.each(orderData, (o, data) => {//Tạo vòng lặp qua từng phần từ của OrderData khi đã gom về từng giá trị duy nhất, sau đó gộp chung lại
            combine[`${data.GxNo}${data.Type}`] = data.Quantity;
        })
        dataSource.push(combine);
    })
    
})
console.log(dataSource);
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
        caption: "销售单号Mã đơn sản xuất",
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
        dataField: "Quantity",
        caption: "订单数量Sản lượng đặt hàng",
    },{
        dataField: "TargetQuantity",
        caption: "线别分配数量Sản lượng phân chuyền",
    }
];

const group_columns_data = [
    {
        name: "697",
        caption: "配料Nguyên liệu",
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
                // if (rowData["TargetQuantity"]) {
                    rowData[lackDataField] = rowData["TargetQuantity"] - (rowData[acculmulateDataField] ?? 0);
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

const setupTable = [
    {
        dataField: "697To698",
        caption: "配料到打枣之间Nguyên liệu -->Đánh bọ",
        calculateCellValue: (rowData) => {
            rowData["697To698"] = rowData["697Accumulated"] - rowData["698Accumulated"];
            return rowData["697To698"];   
        }
    },{
        dataField: "698To700",
        caption: "打枣到成品之间Đánh bọ --> Thành phẩm",
        calculateCellValue: (rowData) => {
            rowData["698To700"] = rowData["698Accumulated"] - rowData["700Accumulated"];
            return rowData["698To700"];   
        }
    },{
        dataField: "697To700",
        caption: "配料到成品之间Nguyên liệu --> Thành phẩm",
        calculateCellValue: (rowData) => {
            rowData["697To700"] = rowData["697Accumulated"] - rowData["700Accumulated"];
            return rowData["697To700"];   
        }
    }
];


const grid = $('#grid').dxDataGrid({
    dataSource: dataSource,
    paging: {//Chia page trang web
        enabled: false,
    },
    pager : {
        visible: false,
    },
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
        e.rowElement.css('background', '#70ad47');
        return;
    }
    if(e.rowType == "group") {
       e.rowElement.css('background', 'black');
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
    
    // if(e.rowType === "groupFooter"){
    //     e.cellElement.css('background','black');
    // }
};

grid.option('onCellPrepared', onCellPrepared);



