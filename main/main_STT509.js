const orderInfor = JSON.parse(`[{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000010","ZDCODE":"000077033434","FoamZDcode":"000020154802","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"001","COLOR_NAME_C":"001黑色,棉杯面黑底黑（不易脏）","CM":"140cm","MO_qty":120},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000010","ZDCODE":"000077033434","FoamZDcode":"000020154802","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"001","COLOR_NAME_C":"001黑色,棉杯面黑底黑（不易脏）","CM":"150cm","MO_qty":122},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000010","ZDCODE":"000077033434","FoamZDcode":"000020154802","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"001","COLOR_NAME_C":"001黑色,棉杯面黑底黑（不易脏）","CM":"160cm","MO_qty":740},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000020","ZDCODE":"000077033435","FoamZDcode":"000020154845","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"500","COLOR_NAME_C":"500粉色,棉杯面粉色底粉色（不易脏）","CM":"140cm","MO_qty":84},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000020","ZDCODE":"000077033435","FoamZDcode":"000020154845","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"500","COLOR_NAME_C":"500粉色,棉杯面粉色底粉色（不易脏）","CM":"150cm","MO_qty":122},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000020","ZDCODE":"000077033435","FoamZDcode":"000020154845","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"500","COLOR_NAME_C":"500粉色,棉杯面粉色底粉色（不易脏）","CM":"160cm","MO_qty":852},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000030","ZDCODE":"000077033436","FoamZDcode":"000020154944","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"475","COLOR_NAME_C":"475?浅蓝色,棉杯面浅蓝色棉杯底浅蓝色(易脏)","CM":"140cm","MO_qty":220},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000030","ZDCODE":"000077033436","FoamZDcode":"000020154944","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"475","COLOR_NAME_C":"475?浅蓝色,棉杯面浅蓝色棉杯底浅蓝色(易脏)","CM":"150cm","MO_qty":440},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000030","ZDCODE":"000077033436","FoamZDcode":"000020154944","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"475","COLOR_NAME_C":"475?浅蓝色,棉杯面浅蓝色棉杯底浅蓝色(易脏)","CM":"160cm","MO_qty":78}]`)
const foamStoreIOs = JSON.parse(`[{"StoreNo":"DTSW1","Zdcode":"000020154802","ColorNo":"001","CM":"140cm","TotalFoamCupIn":129},{"StoreNo":"DTSW1","Zdcode":"000020154802","ColorNo":"001","CM":"150cm","TotalFoamCupIn":131},{"StoreNo":"DTSW1","Zdcode":"000020154802","ColorNo":"001","CM":"160cm","TotalFoamCupIn":795},{"StoreNo":"DTSW1","Zdcode":"000020154845","ColorNo":"500","CM":"140cm","TotalFoamCupIn":88},{"StoreNo":"DTSW1","Zdcode":"000020154845","ColorNo":"500","CM":"150cm","TotalFoamCupIn":128},{"StoreNo":"DTSW1","Zdcode":"000020154845","ColorNo":"500","CM":"160cm","TotalFoamCupIn":889},{"StoreNo":"DTSW1","Zdcode":"000020154944","ColorNo":"475","CM":"140cm","TotalFoamCupIn":230},{"StoreNo":"DTSW1","Zdcode":"000020154944","ColorNo":"475","CM":"150cm","TotalFoamCupIn":459},{"StoreNo":"DTSW1","Zdcode":"000020154944","ColorNo":"475","CM":"160cm","TotalFoamCupIn":814}]`)
const storeIOs = JSON.parse(`[{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033434","ColorNo":"001","CM":"140cm","TotalIn":92,"TotalOut":92},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033434","ColorNo":"001","CM":"160cm","TotalIn":722,"TotalOut":722},{"StoreNo":"DTSW1","Zdcode":"000077033434","ColorNo":"001","CM":"160cm","TotalIn":695,"TotalOut":695},{"StoreNo":"DCUT","Zdcode":"000077033434","ColorNo":"001","CM":"140cm","TotalIn":128,"TotalOut":128},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033434","ColorNo":"001","CM":"150cm","TotalIn":80,"TotalOut":80},{"StoreNo":"DCUT","Zdcode":"000077033434","ColorNo":"001","CM":"160cm","TotalIn":822,"TotalOut":776},{"StoreNo":"DTSW1","Zdcode":"000077033434","ColorNo":"001","CM":"150cm","TotalIn":132,"TotalOut":132},{"StoreNo":"DCUT","Zdcode":"000077033434","ColorNo":"001","CM":"150cm","TotalIn":132,"TotalOut":132},{"StoreNo":"DTSW1","Zdcode":"000077033434","ColorNo":"001","CM":"140cm","TotalIn":128,"TotalOut":128},{"StoreNo":"DTSW1","Zdcode":"000077033435","ColorNo":"500","CM":"140cm","TotalIn":96,"TotalOut":96},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033435","ColorNo":"500","CM":"140cm","TotalIn":96,"TotalOut":96},{"StoreNo":"DTSW1","Zdcode":"000077033435","ColorNo":"500","CM":"160cm","TotalIn":875,"TotalOut":875},{"StoreNo":"DCUT","Zdcode":"000077033435","ColorNo":"500","CM":"160cm","TotalIn":869,"TotalOut":869},{"StoreNo":"DCUT","Zdcode":"000077033435","ColorNo":"500","CM":"140cm","TotalIn":96,"TotalOut":96},{"StoreNo":"DCUT","Zdcode":"000077033435","ColorNo":"500","CM":"150cm","TotalIn":132,"TotalOut":132},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033435","ColorNo":"500","CM":"150cm","TotalIn":132,"TotalOut":132},{"StoreNo":"DTSW1","Zdcode":"000077033435","ColorNo":"500","CM":"150cm","TotalIn":132,"TotalOut":132},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033435","ColorNo":"500","CM":"160cm","TotalIn":880,"TotalOut":875},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033436","ColorNo":"475","CM":"150cm","TotalIn":462,"TotalOut":462},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033436","ColorNo":"475","CM":"160cm","TotalIn":818,"TotalOut":818},{"StoreNo":"DCUT","Zdcode":"000077033436","ColorNo":"475","CM":"150cm","TotalIn":467,"TotalOut":464},{"StoreNo":"DCUT","Zdcode":"000077033436","ColorNo":"475","CM":"160cm","TotalIn":824,"TotalOut":818},{"StoreNo":"DTSW1","Zdcode":"000077033436","ColorNo":"475","CM":"140cm","TotalIn":231,"TotalOut":231},{"StoreNo":"DTSW1","Zdcode":"000077033436","ColorNo":"475","CM":"150cm","TotalIn":462,"TotalOut":462},{"StoreNo":"DCUT","Zdcode":"000077033436","ColorNo":"475","CM":"140cm","TotalIn":252,"TotalOut":251},{"StoreNo":"DTSW1","Zdcode":"000077033436","ColorNo":"475","CM":"160cm","TotalIn":818,"TotalOut":818},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033436","ColorNo":"475","CM":"140cm","TotalIn":247,"TotalOut":231}]`);
console.log(orderInfor);
console.log(foamStoreIOs);
console.log(storeIOs);

// Processing Data
const data = [];
$.each(orderInfor, (i, order) => {
    const combine = [];
    const analystStoreOrder = storeIOs.filter(store => store.ColorNo === order.COLOR_NO && store.CM === order.CM && store.Zdcode === order.ZDCODE);
    $.each(analystStoreOrder, (i, analyst) => {
        combine[`${analyst.StoreNo}_IN`] = analyst.TotalIn;
        combine[`${analyst.StoreNo}_OUT`] = analyst.TotalOut;
        combine[`${analyst.StoreNo}_IN_LACK`] = order.MO_qty - analyst.TotalIn;
        combine[`${analyst.StoreNo}_OUT_LACK`] = order.MO_qty - analyst.TotalOut;
    })
    
    const analystFoam = foamStoreIOs.find(foam => foam.ColorNo === order.COLOR_NO && foam.CM === order.CM && foam.Zdcode === order.FoamZDcode);
    combine[`DTSW1FOAM_IN`] = analystFoam.TotalFoamCupIn;
    combine[`DTSW1FOAM_IN_LACK`] = order.MO_qty - analystFoam.TotalFoamCupIn;

    data.push({
        ...order,
        ...combine
    })
    // console.log(data);
});

// grid.option('dataSource', data);

// Set up sum config
function SUM(col) {
    return {
        column: col,
        summaryType: "sum",
        displayFormat: "{0}",
        showInGroupFooter: true,
        alignByColumn: true
    }   
};

// Set up column (permanent) 
const columns_data = [
    {
        dataField: "Line",
        caption: "线别Chuyền",
        name: "LineGroup",
        visible: false,
        groupIndex: 0,//Set group Item 
    },{
        dataField: "Line",
        caption: "线别Chuyền",
    },{
        dataField: "STYLE_NO",
        caption: "款号Mã hàng",
    },{
        dataField: "SaleNo",
        caption: "销售单号Mã đơn tiêu thụ",
    },{
        dataField: "ZDCODE",
        caption: "工单号Đơn sản xuất",
    },{
        dataField: "Take_Date",
        caption: "出货日期Ngày xuất hàng",
        dataType: "date",
        format: 'MM/dd/yyyy',
    },{
        dataField: "COLOR_NO",
        caption: "颜色 Màu sắc",
    },{
        dataField: "Size",
        caption: "Size",
    },{
        dataField: "Qty",
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
    const acculmulateDataField = `${x.name}AllTime`;
    const lackDataField = `${x.name}Check`;

    const column = {
        dataField: x.name,
        caption: x.caption,
        columns: [{
            dataField: dataField,
            caption: "当天Hôm nay",
        },{
            dataField: acculmulateDataField,
            caption: "累计Lũy kế",
        },{
            dataField: lackDataField,
            caption: "欠数Số lượng thiếu",
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
    dataSource: [],
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
       e.rowElement.hide();
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
    
    if(e.rowType === "groupFooter"){
        e.cellElement.css({'background':'#FFD966'});
        return;
    }
};

grid.option('onCellPrepared', onCellPrepared);



