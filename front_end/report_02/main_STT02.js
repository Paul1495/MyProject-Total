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
    
    // const analystFoam = foamStoreIOs.find(foam => foam.ColorNo === order.COLOR_NO && foam.CM === order.CM && foam.Zdcode === order.FoamZDcode);
    //     combine[`DTSW1FOAM_IN`] = analystFoam.TotalFoamCupIn;
    //     combine[`DTSW1FOAM_IN_LACK`] = order.MO_qty - analystFoam.TotalFoamCupIn;

    data.push({
        ...order,
        ...combine
    })
    console.log(data);
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
        dataField: "ZDCODE",
        caption: "工单号 MO",
        name: "LineGroup",
        visible: false,
        groupIndex: 0,//Set group Item 
    },{
        dataField: "STYLE_NO",
        caption: "款号 Style No",
        width: 120,
    },{
        dataField: "SaleNo",
        caption: "销售单号 SO",
        width: 120,
    },{
        dataField: "ZDCODE",
        caption: "工单号 MO",
        width: 120,
    },{
        dataField: "SOItemNo",
        caption: "项目 Hạng mục",
        width: 80,
    },{
        dataField: "COLOR_NAME_C",
        caption: "颜色 Color",
        width: 110,
    },{
        dataField: "Take_Date",
        caption: "出货日期 Ship Date",
        dataType: "date",
        format: 'MM/dd/yyyy',
        width: 100,
    },{
        dataField: "CM",
        caption: "尺码 Size",
    },{
        dataField: "MO_qty",
        caption: "订单数量 Quantity",
        width: 100,
}];

const group_columns_data = [
    {
        name: "DCUT",
        caption: "裁床-DCUT Xưởng cắt",
    },{
        name: "DPMT-PRT-01",
        caption: "移印-DPMT-PRT-01 Xưởng In",
    },{
        name: "DMOD01",
        caption: "布杯定型-DMOD01 Xưởng định hình"
    },{
        name: "DMOD02",
        caption: "打标--啤机-DMOD02 Xưởng cắt laze--dập máy bế"
    },{
        name: "DTSW618",
        caption: "618车间-DTSW618 Xưởng 618"
    },{
        name: "DTSW1",
        caption: "配料中心-DTSW1 Trung tâm phối liệu"
    },
]

const setupAllTable = group_columns_data.map((x) => {
    const inDataField = `${x.name}_IN`;
    const inLackDataField = `${inDataField}_LACK`;
    const outDataField = x.name !== "DTSW618" ? `${x.name}_OUT` : `DTSW618_OUT`;
    const outLackDataField = `${outDataField}_LACK`;

    const column = {
        dataField: x.name,
        caption: x.caption,
        columns: [{
            dataField: inDataField,
            caption: "累计生产 Lũy kế sản xuất",
        },{
            dataField: inLackDataField,
            caption: "入仓欠数 Số lượng liệu đến thiếu",
        },{
            dataField: outDataField,
            caption: "累计发料 Luỹ kế phát liệu",
        },{
            dataField: outLackDataField,
            caption: "欠数 Số lượng liệu phát thiếu",
        },]
    };

    const summary = [
        SUM(inDataField),
        SUM(inLackDataField),
        SUM(outDataField),
        SUM(outLackDataField),
    ];

    return {
        column,
        summary,
    }
});

const setupFoamTable = [
    {
        dataField: "DTSW1FOAM_IN",
        caption: "棉杯入仓 Quả áo nhập kho DTSW1",
    },{
        dataField: "DTSW1FOAM_IN_LACK",
        caption: "棉杯欠数 Số lượng quả áo thiếu",
    },
];


const grid = $('#grid').dxDataGrid({
    dataSource: data,
    columns: [
        ...columns_data,
        ...setupAllTable.map(x => x.column),
        ...setupFoamTable,
    ],
    showBorders: true,
    wordWrapEnabled: true,
    summary: {
        groupItems: [
            ...setupAllTable.map(x => x.summary).flat(),
            SUM("DTSW1FOAM_IN"),
            SUM("DTSW1FOAM_IN_LACK"),
        ],
      },
    
}).dxDataGrid('instance');

const onRowPrepared = function (e) {
    if(e.rowType == "header") {
        e.rowElement.css('background', '#F4B183');
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

        if(e.column.dataField.includes("DCUT")) {
            e.cellElement.css({'background':'#a9d08e'});
            } else if(e.column.dataField.includes("DPMT")) {
                e.cellElement.css({'background':'#ffe699'});
                } else if(e.column.dataField.includes("DMOD01")) {
                    e.cellElement.css({'background':'#8ea9db'});
                    } else if(e.column.dataField.includes("DMOD02")) {
                        e.cellElement.css({'background':'#ddebf7'});
                        } else if(e.column.dataField.includes("DTSW618")) {
                            e.cellElement.css({'background':'#fff2cc'});
                                } else if(e.column.dataField === "DTSW1FOAM_IN") {
                                    e.cellElement.css({'background':'yellow'});
                                    } else if(e.column.dataField === "DTSW1FOAM_IN_LACK") {
                                        e.cellElement.css({'background':'white'}); 
                                        } else if(e.column.dataField.includes("DTSW1")) {
                                             e.cellElement.css({'background':'#92d050'});
    } 
    }
    
    if(e.rowType === "groupFooter"){
        e.cellElement.css({'background':'#FFD966'});
        return;
    }
};

grid.option('onCellPrepared', onCellPrepared);



