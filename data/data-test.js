//Data Source

const data_order = [{
    ID: 1,
    Style: 'U02TB2F065LK-J1B_2503',
    StyleSO:'A160109552',//Set group
    ProductOrder: '000020129472',
    DateOut: '8/15/2022',
    Color: '525',
    Size: '65/70 AB',
    QtySalesOrder: 401,   
},{
    ID: 2,
    Style: 'U02TB2F065LK-J1B_2503',
    StyleSO:'A160109552',//Set group
    ProductOrder: '000020129472',
    DateOut: '8/15/2022',
    Color: '525',
    Size: '75/80 CD',
    QtySalesOrder: 365,
},{
    ID: 3,
    Style: 'U02BTF066BJP-J1_2505',
    StyleSO:'A160104578',//Set group
    ProductOrder: '000020120179',
    DateOut: '8/31/2022',
    Color: 'C27',
    Size: '36C',
    QtySalesOrder: 987,  
},{
    ID: 4,
    Style: 'U02BTF066BJP-J1_2505',
    StyleSO:'A160104578',//Set group
    ProductOrder: '000020120179',
    DateOut: '8/31/2022',
    Color: 'C27',
    Size: '40D',
    QtySalesOrder: 15, 
}];

const data_line = [{
    ID: 1,
    Line: 'FNG-B-L01',
    ProductOrder:'000020129472',//Set group
    Color: '525',
    Size: '65/70 AB',
    Group: 'ProductionShaping',
    Type: 'Today',
    Qty: 30,  
},{
    ID: 2,
    Line: 'FNG-B-L01',
    ProductOrder:'000020129472',//Set group
    Color: '525',
    Size: '75/80 CD',
    Group: 'ProductionShaping',
    Type: 'Accumulate',
    Qty: 180,  
},{
    ID: 3,
    Line: 'FNG-B-L02',
    ProductOrder:'000020120179',//Set group
    Color: 'C27',
    Size: '36C',
    Group: 'IncomingMaterial',
    Type: 'Today',
    Qty: 50,  
},{
    ID: 4,
    Line: 'FNG-B-L02',
    ProductOrder:'000020120179',//Set group
    Color: 'C27',
    Size: '40D',
    Group: 'IncomingMaterial',
    Type: 'Accumulate',
    Qty: 200,  
}];


const data_lineAnalyst = [];
data_line.forEach((item) => {
    if(item.Group != "" && item.Type != "") {
        let analyst = {
            Line: item.Line,
            ProductOrder: item.ProductOrder,//Set group
            Color: item.Color,
            Size: item.Size,
            Sum: item.Group + item.Type,
            Qty: item.Qty,
        }
        data_lineAnalyst.push(analyst);
    };
});

export const total_data = [];
data_lineAnalyst.forEach((line) => {
    data_order.forEach((order) => {
        if(line.ProductOrder === order.ProductOrder && line.Color === order.Color && line.Size === order.Size) {
            let object = {
                Style: order.Style,
                StyleSO: order.StyleSO,
                ProductOrder: order.ProductOrder,
                DateOut: order.DateOut,
                Color: order.Color,
                Size: order.Size,
                QtySalesOrder: order.QtySalesOrder,
                Line: line.Line,
                CopyLine: line.Line,
            };
            object[line.Sum] = line.Qty;
            total_data.push(object);
        };
    });
});

//Data Columns
export const columns_data = [
{
    dataField: "CopyLine",
    caption: "车间 Chuyền",
    name: "LineGroup",
    visible: false,
    groupIndex: 0,//Set group Item 
},{
    dataField: "Line",
    caption: "车间 Chuyền",
    width: 70,
},{
    dataField: "Style",
    caption: "款号 Mã hàng",
    width: 120,
},{
    dataField: "StyleSO",
    caption: "SO Mã đơn tiêu thụ",
    width: 100,
},{
    dataField: "ProductOrder",
    caption: "制单号 Đơn sản xuất",
    width: 110,
},{
    dataField: "DateOut",
    caption: "出货日期 Ngày xuất hàng",
    dataType: "date",
    format: 'MM/dd/yyyy',
    width: 100,
},{
    dataField: "Color",
    caption: "Màu sắc",
},{
    dataField: "Size",
    caption: "Size Kích cỡ",
},{
    dataField: "QtySalesOrder",
    caption: "Số lượng đặt hàng",
},{
    dataField: "QtyOutToday",
    caption: "Số lượng cần xuất hàng hôm nay",
},{
    caption: "定型生产 Định Hình Sản xuất ",
    columns: [{
        dataField: "ProductionShapingToday",
        caption: "Hôm nay",
        dataType: "number",
    },{
        dataField: "ProductionShapingAccumulate",
        caption: "Lũy kế sản xuất",
        dataType: "number",
    },{
        dataField: "ProductionShapingDeficit",
        caption: "Số thiếu",
        dataType: "number",
    }]
},{
    caption: "来料-后工序来料入仓 Liệu đến (cds nhập kho)",
    columns: [{
        dataField: "IncomingMaterialToday",
        caption: "Hôm nay",
        dataType: "number",
    },{
        dataField: "IncomingMaterialAccumulate",
        caption: "Lũy kế",
        dataType: "number",
    },{
        dataField: "IncomingMaterialDeficit",
        caption: "Số lượng thiếu",
        dataType: "number",
    }]
},{
    caption: "啤机 Cắt Dập",
    columns: [{
        dataField: "StampingCuttingToday",
        caption: "Hôm nay",
        dataType: "number",
    },{
        dataField: "StampingCuttingAccumulation",
        caption: "Lũy kế",
        dataType: "number",
    },{
        dataField: "StampingCuttingDeficit",
        caption: "Số lượng thiếu",
        dataType: "number",
    }]
},{
    caption: "查货一次 KIỂM HÀNG Lần 1",
    columns: [{
        dataField: "CheckFirstToday",
        caption: "Hôm nay",
        dataType: "number",
    },{
        dataField: "CheckFirstAccumulation",
        caption: "Lũy kế",
        dataType: "number",
    },{
        dataField: "CheckFirstDeficit",
        caption: "Số lượng thiếu",
        dataType: "number",
    }]
},{
    caption: "查货二次 KIỂM HÀNG Lần 2",
    columns: [{
        dataField: "CheckSecondToday",
        caption: "Hôm nay",
        dataType: "number",
    },{
        dataField: "CheckSecondAccumulation",
        caption: "Lũy kế",
        dataType: "number",
    },{
        dataField: "CheckSecondDeficit",
        caption: "Số lượng thiếu",
        dataType: "number",
    }]
},{
    caption: "包装 Đóng Gói",
    columns: [{
        dataField: "PackageToday",
        caption: "Hôm nay",
        dataType: "number",
    },{
        dataField: "PackageAccumulation",
        caption: "Lũy kế",
        dataType: "number",
    },{
        dataField: "PackageDeficit",
        caption: "Số lượng thiếu",
        dataType: "number",
    }]
},{
    caption: "验针 Nghiệm Kim",
    columns: [{
        dataField: "TestToday",
        caption: "Hôm nay",
        dataType: "number",
    },{
        dataField: "TestAccumulation",
        caption: "Lũy kế",
        dataType: "number",
    },{
        dataField: "TestDeficit",
        caption: "Số lượng thiếu",
        dataType: "number",
    }]
},{
    caption: "已入仓库 Công đoạn sau xuất kho",
    columns: [{
        dataField: "CompleteToday",
        caption: "Hôm nay",
        dataType: "number",
    },{
        dataField: "CompleteAccumulation",
        caption: "Lũy kế",
        dataType: "number",
    },{
        dataField: "CompleteDeficit",
        caption: "Số lượng thiếu",
        dataType: "number",
    }]
}];


//Data Summary
export const summary_data = [
{
    column: "QtySalesOrder",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
// },{
//     column: "QtyOutToday",
//     summaryType: "sum",
//     displayFormat: "{0}",
//     showInGroupFooter: true,
//     alignByColumn: true
},{
    column: "ProductionShapingToday",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "ProductionShapingAccumulation",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "ProductionShapingDeficit",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "IncomingMaterialToday",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "IncomingMaterialAccumulation",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "IncomingMaterialDeficit",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "StampingCuttingToday",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "StampingCuttingAccumulation",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "StampingCuttingDeficit",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "CheckFirstToday",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "CheckFirstAccumulation",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "CheckFirstDeficit",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "CheckSecondToday",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "CheckSecondAccumulation",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "CheckSecondDeficit",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "PackageToday",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "PackageAccumulation",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "PackageDeficit",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "TestToday",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "TestAccumulation",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "TestDeficit",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "CompleteToday",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "CompleteAccumulation",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "CompleteDeficit",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
}];

export const accumulationList = [
    // "ProductionShapingAccumulation",
    // "IncomingMaterialAccumulation",
    // "StampingCuttingAccumulation",
    // "CheckFirstAccumulation",
    // "CheckSecondAccumulation",
    // "PackageAccumulation",
    // "TestAccumulation",
    // "CompleteAccumulation",
    "Lũy kế sản xuất",
    "Lũy kế",
];

  