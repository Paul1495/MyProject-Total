import {
     VIEW_GRID_OPTION 
} from "./VIEW_GRID_OPTION.js";

//Data Source
const description_data = [{
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



//Data Columns
const columns_data = [
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


//Data Summary
const summary_data = [
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

var grid = $('#grid').dxDataGrid({
    ...VIEW_GRID_OPTION,
    dataSource: description_data,
    keyExpr: 'ID',
    columns: columns_data,
    selection: {
        mode: 'single',
    }, 
    summary: {
        groupItems: summary_data
      },
    
}).dxDataGrid('instance');

const onRowPrepared = function (e) {
    // console.log(e);
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

grid.option('onRowPrepared', onRowPrepared);

const onCellPrepared = function (e) {
    console.log(e);
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
    
    // if(e.rowType === "groupFooter"){
    //     e.cellElement.css({'background':'#FFD966'});
    // }
    };

grid.option('onCellPrepared', onCellPrepared);

