
const dataC = [{
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

const columnsC = [
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

var onRowC = function (e) {
    // console.log(e);
    if(e.rowType == "header") {
        e.rowElement.css('background', '#f8cbad');
        return;
    }
};

var onCellC = function (e) {
    e.cellElement.css("text-align", "center");
    e.cellElement.css("vertical-align", "middle");
 
    if (e.rowType == "header") {
        e.cellElement.css('font-weight', 'bold');
        e.cellElement.css('color', '#000000');
        return;
    }
};

const dataB = [{
    ID: 1,
    Position: "MOD-A01-09",
    ProductOrder: '000020143667',
    Description: 'xop tron',
    Style: 'N08XB0DV9837-J1F_2503',
    Customer: "Nike",
    TypeOfCut: 'Don chinh',
    SaleOrder: 'A160115369',
    Category: '000020',
    Color: 'CW3',
    Size: 'L',
    QuantityOfOrder: 392,
    QuantityOfCut: 392,
    QuantityOfImport: 392,
    QuantityOfExport: 191,
    QuantityOfStock: 201,
    QuantityofMissingCut: 0,
},{
    ID: 2,
    Position: "MOD-A01-09",
    ProductOrder: '000020143667',
    Description: 'mat lieu',
    Style: 'N08XB0DV9837-J1F_2503',
    Customer: "Nike",
    TypeOfCut: 'Don chinh',
    SaleOrder: 'A160115369',
    Category: '000020',
    Color: 'CW3',
    Size: 'L',
    QuantityOfOrder: 392,
    QuantityOfCut: 392,
    QuantityOfImport: 392,
    QuantityOfExport: 191,
    QuantityOfStock: 0,
    QuantityofMissingCut: 0
},{
    ID: 3,
    Position: "MOD-A01-09",
    ProductOrder: '000020143667',
    Description: 'de lieu',
    Style: 'N08XB0DV9837-J1F_2503',
    Customer: "Nike",
    TypeOfCut: 'Don chinh',
    SaleOrder: 'A160115369',
    Category: '000020',
    Color: 'CW3',
    Size: 'L',
    QuantityOfOrder: 392,
    QuantityOfCut: 392,
    QuantityOfImport: 392,
    QuantityOfExport: 191,
    QuantityOfStock: 0,
    QuantityofMissingCut: 0,
}];

const columnsB = [
{ 
    dataField: "Position",
    caption: "仓位名称 Vị trí kho",
},{
    dataField: "ProductOrder",
    caption: " 制单号 Đơn sản xuất",
},{
    dataField: "Description",
    caption: "部件 Chi tiết",
    dataType: "number",
},{
    dataField: "Style",
    caption: "款号 Mã hàng",
},{
    dataField: "Customer",
    caption: "客户名称 Khách hàng",
},{
    dataField: "TypeOfCut",
    caption: "裁剪单类别 Loại hình cắt",
},{
    dataField: "SaleOrder",
    caption: "销售单号 Đơn tiêu thụ",
},{
    dataField: "Category",
    caption: "项目号 Hạng mục",
},{
    dataField: "Color",
    caption: "颜色 Màu sắc",
},{
    dataField: "Size",
    caption: "尺码 Size",
    dataType: "number",
},{
    dataField: "QuantityOfOrder",
    caption: "订单数量 Số lượng đơn hàng",
    dataType:"number",
},{
    dataField: "QuantityOfCut",
    caption: "已制卡数量 Số lượng đã cắt",
    dataType:"number",
},{
    dataField: "QuantityOfImport",
    caption: "已入仓数量 Số lượng đã nhập kho",
    dataType:"number",
},{
    dataField: "QuantityOfExport",
    caption: "已出仓数量 Số lượng đã xuất kho ",
    dataType:"number",
},{
    dataField: "QuantityOfStock",
    caption: "当库存数量 Số lượng tồn kho hiện tại",
    dataType:"number",
},{
    dataField: "QuantityofMissingCut",
    caption: "裁欠数 Số lượng cắt thiếu",
    dataType:"number",
}];

const summaryB = [
{
    column: "Customer",
    summaryType: "count",
    displayFormat: "汇总Tổng ({0})",
    showInGroupFooter: false,
    alignByColumn: true
},{
    column: "QuantityOfOrder",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
},{
    column: "QuantityOfCut",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
},{
    column: "QuantityOfImport",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
},{
    column: "QuantityOfExport",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
},{
    column: "QuantityOfStock",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
},{
    column: "QuantityofMissingCut",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
}];

var onRowB = function (e) {
    // console.log(e);
    if(e.rowType == "header") {
        e.rowElement.css('background', '#f8cbad');
        return;    
    }
};

var onCellB = function (e) {
    console.log(e);
    e.cellElement.css("text-align", "center");
    e.cellElement.css("vertical-align", "middle");
   
    if (e.rowType == "header") {
        e.cellElement.css('color', '#000000');
        e.cellElement.css('font-weight', 'bold');
        if (e.column.dataField === "ProductOrder" || e.column.dataField === "Description") {
            e.cellElement.css({'background':'yellow'});
        } 
        return;
    } 
};

const dataA = [{
    ID: 1,
    Date: "25/02/2023",
    Factory: 'VNA',
    GarmentFactory: 'MOD-C10-18',
    Line: 'MOD-C10',
    Shift: "Ca ngày",
    ProductOrder: '000020141337',
    CopyProductOrder: '000020141337',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '32B',
    QuantityOfOrder: '730',
    Increase: 30,
    Cumulation: 305,
    QuantityOfLack: 455,
    QuantityAsShift: 208,
    QuantityOfMachine: '10,18',
    Note:'',
    User: 'A456789- Trần Thùy L',
    TimeToUse:'28/10/2022 9:30:00 AM',

},{
    ID: 2,
    Date: "25/02/2023",
    Factory: 'VNB',
    GarmentFactory: 'MOD-C10-19',
    Line: 'MOD-C11',
    Shift: "Ca đêm",
    ProductOrder: '000020141337',
    CopyProductOrder: '000020141337',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '32C',
    QuantityOfOrder: 597,
    Increase: 30,
    Cumulation: 100,
    QuantityOfLack: 497,
    QuantityAsShift: 97,
    QuantityOfMachine: '12',
    Note:'',
    User: 'A456789- Trần Thùy L',
    TimeToUse:'28/10/2022 9:30:00 AM',

},{
    ID: 3,
    Date: "25/02/2023",
    Factory: 'VNB',
    GarmentFactory: 'MOD-C10-18',
    Line: 'MOD-C11',
    Shift: "Ca đêm",
    ProductOrder: '000020141337',
    CopyProductOrder: '000020141337',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '32D',
    QuantityOfOrder: 464,
    Increase: '',
    Cumulation: 0,
    QuantityOfLack: 464,
    QuantityAsShift: '',
    QuantityOfMachine: '',
    Note:'',
    User: 'A456789- Trần Thùy L',
    TimeToUse:'28/10/2022 9:30:00 AM',
    
},{
    ID: 4,
    Date: "25/02/2023",
    Factory: 'VNB',
    GarmentFactory: 'MOD-C10-18',
    Line: 'MOD-C11',
    Shift: "Ca ngày",
    ProductOrder: '000020141337',
    CopyProductOrder: '000020141337',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '36B',
    QuantityOfOrder: '994',
    Increase: 30,
    Cumulation: 305,
    QuantityOfLack: 455,
    QuantityAsShift: 208,
    QuantityOfMachine: '10,18',
    Note:'',
    User: 'A456789- Trần Thùy L',
    TimeToUse:'28/10/2022 9:30:00 AM',
},{
    ID: 5,
    Date: "25/02/2023",
    Factory: 'VNB',
    GarmentFactory: 'MOD-C10-18',
    Line: 'MOD-C11',
    Shift: "Ca ngày",
    ProductOrder: '000020141456',
    CopyProductOrder: '000020141456',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '36B',
    QuantityOfOrder: '994',
    Increase: 30,
    Cumulation: 305,
    QuantityOfLack: 455,
    QuantityAsShift: 208,
    QuantityOfMachine: '10,18',
    Note:'',
    User: 'A456789- Trần Thanh Ly',
    TimeToUse:'28/10/2022 9:30:00 AM',
},{
    ID: 6,
    Date: "25/02/2023",
    Factory: 'VNB',
    GarmentFactory: 'MOD-C10-18',
    Line: 'MOD-C11',
    Shift: "Ca ngày",
    ProductOrder: '000020141456',
    CopyProductOrder: '000020141456',//Set group
    Style: 'V01CG0061621-J5B_2503',
    SaleOrder: 'A160114569',
    Customer: 'Nike',
    Application: '10',
    Color: 'W18',
    DateOut: '27/12/2022',
    Measurment: '36B',
    QuantityOfOrder: 994,
    Increase: 30,
    Cumulation: 305,
    QuantityOfLack: 455,
    QuantityAsShift: 208,
    QuantityOfMachine: '10,18',
    Note:'',
    User: 'A456789- Nguyễn Tuyên L',
    TimeToUse:'28/10/2022 9:30:00 AM',
}];
    
const columnsA = [
{ 
    dataField: "Date",
    caption: "时间 Thời gian",
    dataType: "datetime",
    format: 'yyyy/MM/dd HH:mm:ss',
},{
    dataField: "Factory",
    caption: "厂别 Nhà máy",
},{
    dataField: "GarmentFactory",
    caption: "车间 Xưởng",
},{
    dataField: "Line",
    caption: "线别 Chuyền",
},{
    dataField: "Shift",
    caption: "班次 Ca làm việc",
},{
    dataField: "CopyProductOrder",
    caption: "MO",
    name: "ProductGroup",
    visible: false,
    groupIndex: 0,//Set group Item 
},{
    dataField: "ProductOrder",
    caption: "制单号 Đơn sản xuất",
},{
    dataField: "Style",
    caption: "款号 Mã hàng",
},{
    dataField: "SaleOrder",
    caption: "销售单号 SO",
},{
    dataField: "Customer",
    caption: "客户 Khách hàng",
},{
    dataField: "Application",
    caption: "项目 Hạng mục ",
    dateType: "number",
},{
    dataField: "Color",
    caption: "颜色 Màu sắc", 
},{
    dataField: "DateOut",
    caption: "出货日期 Ngày xuất hàng",
    dataType:"date",
},{
    dataField: "Measurment",
    caption: "尺码 Kích cỡ",
},{
    dataField: "QuantityOfOrder",
    caption: "订单数量 Số lượng đặt hàng",
    dataType: "number",
},{
    dataField: "Increase",
    caption: "补数 Bù liệu ",
    dateType: "number", 
},{
    dataField: "Cumulation",
    caption: "累计产量 Sản lượng tích lũy ",
    dataType:"number",
},{
    dataField: "QuantityOfLack",
    caption: "定型欠数 Định hình thiếu",
    dataType:"number", 
},{
    dataField: "QuantityAsShift",
    caption: "班次产量 Sản lượng theo ca ",
    dataType:"number", 
},{
    dataField: "QuantityOfMachine",
    caption: "定型机台号 Số máy định hình",
},{
    dataField: "Note",
    caption: "备注 Chú thích",
},{
    dataField: "User",
    caption: "操作人员 Người thao tác",
},{
    dataField: "TimeToUse",
    caption: "操作时间 Thời gian thao tác",
    dataType: "datetime",
    format: 'yyyy/MM/dd HH:mm:ss',
}];
    
const summaryA = [
{
    column: "QuantityOfOrder",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
},{
    column: "Increase",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
},{
    column: "Cumulation",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
},{
    column: "QuantityOfLack",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
},{
    column: "QuantityAsShift",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true
}];

const onRowA = function (e) {
    if(e.rowType == "header") {
        e.rowElement.css('background', '#f8cbad');
        e.rowElement.css('height', 50);
        return;
    }

    if(e.rowType == "group") {
        e.rowElement.css({'background':'#ffe699'});
       return;
    }
};

const onCellA = function (e) {
    e.cellElement.css("text-align", "center");
    e.cellElement.css("vertical-align", "middle");
    if (e.rowType == "header") {
        e.cellElement.css('color', '#000000');
        e.cellElement.css('font-weight', 'bold');
        if(e.column.dataField === "ProductOrder"){
            e.cellElement.css({'background':'yellow'});
        }
        return;
    } 
};
   
var grid = $('#grid').dxDataGrid({
    dataSource: [],
    keyExpr: 'ID',
    columns: [],
    paging: {//Chia page trang web
        enabled: false,
    },
    scrolling: {
        columnRenderingMode:"standard",
        mode:"standard",
        scrollByContent:true,
    },
    showColumnLines: true,
    showRowLines: true,
    showBorders: true,
    wordWrapEnabled: true,
    showBorders: true,
    summary: {
        totalItems: [],
        groupItems: []
    },
    onRowPrepared: [],
    onCellPrepared: []
}).dxDataGrid('instance');


const tabs = [
    {
      id: 0,
      text: '520C',
      icon: 'user',
    },{
      id: 1,
      text: '520B', 
      icon: 'comment',
    },{
      id: 2,
      text: '520A',
      icon: 'find',
    },
  ];

const tabsInstance = $('#tabs > .tabs-container').dxTabs({
    dataSource: tabs,
    selectedIndex: 0,
    onItemClick(e) {
      if (e.itemIndex === 0) {
        grid.option('dataSource', dataC);
        grid.option('columns', columnsC)
        grid.option('onRowPrepared', onRowC);
        grid.option('onCellPrepared', onCellC);
        } else if (e.itemIndex === 1) {
            grid.option('dataSource', dataB);
            grid.option('columns', columnsB);
            grid.option('summary.totalItems', summaryB)
            grid.option('onRowPrepared', onRowB);
            grid.option('onCellPrepared', onCellB);
            } else if (e.itemIndex === 2) {
                grid.option('dataSource', dataA);
                grid.option('columns', columnsA);
                grid.option('summary.totalItems', []);
                grid.option('summary.groupItems', summaryA);
                grid.option('onRowPrepared', onRowA);
                grid.option('onCellPrepared', onCellA);
                }
    }
}).dxTabs('instance');

