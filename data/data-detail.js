//Data Source

const combinedOrderInfor = JSON.parse(`[{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000010","ZDCODE":"000077033434","FoamZDcode":"000020154802","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"001","COLOR_NAME_C":"001黑色,棉杯面黑底黑（不易脏）","CM":"140cm","MO_qty":120},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000010","ZDCODE":"000077033434","FoamZDcode":"000020154802","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"001","COLOR_NAME_C":"001黑色,棉杯面黑底黑（不易脏）","CM":"150cm","MO_qty":122},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000010","ZDCODE":"000077033434","FoamZDcode":"000020154802","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"001","COLOR_NAME_C":"001黑色,棉杯面黑底黑（不易脏）","CM":"160cm","MO_qty":740},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000020","ZDCODE":"000077033435","FoamZDcode":"000020154845","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"500","COLOR_NAME_C":"500粉色,棉杯面粉色底粉色（不易脏）","CM":"140cm","MO_qty":84},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000020","ZDCODE":"000077033435","FoamZDcode":"000020154845","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"500","COLOR_NAME_C":"500粉色,棉杯面粉色底粉色（不易脏）","CM":"150cm","MO_qty":122},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000020","ZDCODE":"000077033435","FoamZDcode":"000020154845","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"500","COLOR_NAME_C":"500粉色,棉杯面粉色底粉色（不易脏）","CM":"160cm","MO_qty":852},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000030","ZDCODE":"000077033436","FoamZDcode":"000020154944","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"475","COLOR_NAME_C":"475?浅蓝色,棉杯面浅蓝色棉杯底浅蓝色(易脏)","CM":"140cm","MO_qty":220},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000030","ZDCODE":"000077033436","FoamZDcode":"000020154944","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"475","COLOR_NAME_C":"475?浅蓝色,棉杯面浅蓝色棉杯底浅蓝色(易脏)","CM":"150cm","MO_qty":440},{"CUSTNAME":"妮高 (馬來西亞)","SaleNo":"A160119250","STYLE_NO":"U02BTF055AJP-J1_2505","SOItemNo":"000030","ZDCODE":"000077033436","FoamZDcode":"000020154944","Take_Date":"2023-05-24T00:00:00","COLOR_NO":"475","COLOR_NAME_C":"475?浅蓝色,棉杯面浅蓝色棉杯底浅蓝色(易脏)","CM":"160cm","MO_qty":78}]`)
const FoamStoreIOs = JSON.parse(`[{"StoreNo":"DTSW1","Zdcode":"000020154802","ColorNo":"001","CM":"140cm","TotalFoamCupIn":129},{"StoreNo":"DTSW1","Zdcode":"000020154802","ColorNo":"001","CM":"150cm","TotalFoamCupIn":131},{"StoreNo":"DTSW1","Zdcode":"000020154802","ColorNo":"001","CM":"160cm","TotalFoamCupIn":795},{"StoreNo":"DTSW1","Zdcode":"000020154845","ColorNo":"500","CM":"140cm","TotalFoamCupIn":88},{"StoreNo":"DTSW1","Zdcode":"000020154845","ColorNo":"500","CM":"150cm","TotalFoamCupIn":128},{"StoreNo":"DTSW1","Zdcode":"000020154845","ColorNo":"500","CM":"160cm","TotalFoamCupIn":889},{"StoreNo":"DTSW1","Zdcode":"000020154944","ColorNo":"475","CM":"140cm","TotalFoamCupIn":230},{"StoreNo":"DTSW1","Zdcode":"000020154944","ColorNo":"475","CM":"150cm","TotalFoamCupIn":459},{"StoreNo":"DTSW1","Zdcode":"000020154944","ColorNo":"475","CM":"160cm","TotalFoamCupIn":814}]`)
const StoreIOs = JSON.parse(`[{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033434","ColorNo":"001","CM":"140cm","TotalIn":92,"TotalOut":92},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033434","ColorNo":"001","CM":"160cm","TotalIn":722,"TotalOut":722},{"StoreNo":"DTSW1","Zdcode":"000077033434","ColorNo":"001","CM":"160cm","TotalIn":695,"TotalOut":695},{"StoreNo":"DCUT","Zdcode":"000077033434","ColorNo":"001","CM":"140cm","TotalIn":128,"TotalOut":128},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033434","ColorNo":"001","CM":"150cm","TotalIn":80,"TotalOut":80},{"StoreNo":"DCUT","Zdcode":"000077033434","ColorNo":"001","CM":"160cm","TotalIn":822,"TotalOut":776},{"StoreNo":"DTSW1","Zdcode":"000077033434","ColorNo":"001","CM":"150cm","TotalIn":132,"TotalOut":132},{"StoreNo":"DCUT","Zdcode":"000077033434","ColorNo":"001","CM":"150cm","TotalIn":132,"TotalOut":132},{"StoreNo":"DTSW1","Zdcode":"000077033434","ColorNo":"001","CM":"140cm","TotalIn":128,"TotalOut":128},{"StoreNo":"DTSW1","Zdcode":"000077033435","ColorNo":"500","CM":"140cm","TotalIn":96,"TotalOut":96},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033435","ColorNo":"500","CM":"140cm","TotalIn":96,"TotalOut":96},{"StoreNo":"DTSW1","Zdcode":"000077033435","ColorNo":"500","CM":"160cm","TotalIn":875,"TotalOut":875},{"StoreNo":"DCUT","Zdcode":"000077033435","ColorNo":"500","CM":"160cm","TotalIn":869,"TotalOut":869},{"StoreNo":"DCUT","Zdcode":"000077033435","ColorNo":"500","CM":"140cm","TotalIn":96,"TotalOut":96},{"StoreNo":"DCUT","Zdcode":"000077033435","ColorNo":"500","CM":"150cm","TotalIn":132,"TotalOut":132},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033435","ColorNo":"500","CM":"150cm","TotalIn":132,"TotalOut":132},{"StoreNo":"DTSW1","Zdcode":"000077033435","ColorNo":"500","CM":"150cm","TotalIn":132,"TotalOut":132},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033435","ColorNo":"500","CM":"160cm","TotalIn":880,"TotalOut":875},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033436","ColorNo":"475","CM":"150cm","TotalIn":462,"TotalOut":462},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033436","ColorNo":"475","CM":"160cm","TotalIn":818,"TotalOut":818},{"StoreNo":"DCUT","Zdcode":"000077033436","ColorNo":"475","CM":"150cm","TotalIn":467,"TotalOut":464},{"StoreNo":"DCUT","Zdcode":"000077033436","ColorNo":"475","CM":"160cm","TotalIn":824,"TotalOut":818},{"StoreNo":"DTSW1","Zdcode":"000077033436","ColorNo":"475","CM":"140cm","TotalIn":231,"TotalOut":231},{"StoreNo":"DTSW1","Zdcode":"000077033436","ColorNo":"475","CM":"150cm","TotalIn":462,"TotalOut":462},{"StoreNo":"DCUT","Zdcode":"000077033436","ColorNo":"475","CM":"140cm","TotalIn":252,"TotalOut":251},{"StoreNo":"DTSW1","Zdcode":"000077033436","ColorNo":"475","CM":"160cm","TotalIn":818,"TotalOut":818},{"StoreNo":"DPMT-PRT-01","Zdcode":"000077033436","ColorNo":"475","CM":"140cm","TotalIn":247,"TotalOut":231}]`);

const combined_inforFoam = [];
FoamStoreIOs.forEach((foam) => {
        combinedOrderInfor.forEach((infor) => {
            if(infor.COLOR_NO === foam.ColorNo && infor.FoamZDcode === foam.Zdcode && infor.CM === foam.CM) {
                let analyst = {
                    Style: infor.STYLE_NO,
                    SO: infor.SaleNo,
                    SOItem: infor.SOItemNo,
                    MO: infor.ZDCODE,
                    FoamZDcode: infor.FoamZDcode,
                    ColorName: infor.COLOR_NAME_C,
                    ColorNo: infor.COLOR_NO,
                    ShipDate: infor.Take_Date,
                    Size: infor.CM,
                    Quantity: infor.MO_qty,
                    Customer: infor.CUSTNAME,
                };
                analyst[`${foam.StoreNo}FOAM_IN`] = foam.TotalFoamCupIn;
                combined_inforFoam.push(analyst);
            };
        });
    });


export const combined_data = [];
combined_inforFoam.forEach((infor) => {
    let object = infor;
        StoreIOs.forEach((store) => {
            if(infor.ColorNo === store.ColorNo && infor.MO === store.Zdcode && infor.Size === store.CM) {
                object[`${store.StoreNo}_IN`] = store.TotalIn;
                object[`${store.StoreNo}_OUT`] = store.TotalOut;
                // OPTION1
                object[`${store.StoreNo}_IN_LACK`] = infor.Quantity - store.TotalIn;
                object[`${store.StoreNo}_OUT_LACK`] = infor.Quantity - store.TotalOut;
                object[`DTSW1FOAM_IN_LACK`] = infor.Quantity - infor.DTSW1FOAM_IN;
               
            }
        });
        combined_data.push(object);

    });

//Data Columns
export const columns_data = [
{
    dataField: "MO",
    caption: "工单号 MO",
    name: "LineGroup",
    visible: false,
    groupIndex: 0,//Set group Item 
},{
    dataField: "Style",
    caption: "款号 Style No",
    width: 120,
},{
    dataField: "SO",
    caption: "销售单号 SO",
    width: 120,
},{
    dataField: "MO",
    caption: "工单号 MO",
    width: 120,
},{
    dataField: "ColorNo",
    caption: "Color",
    width: 120,
},{
    dataField: "ColorName",
    caption: "颜色 Color",
    width: 110,
},{
    dataField: "ShipDate",
    caption: "出货日期 Ship Date",
    dataType: "date",
    format: 'MM/dd/yyyy',
    width: 100,
},{
    dataField: "Size",
    caption: "尺码 Size",
},{
    dataField: "Quantity",
    caption: "订单数量 Quantity",
    width: 100,
},{
    caption: "裁床-DCUT Xưởng cắt",
    columns: [{
        dataField: "DCUT_IN",
        caption: "累计生产 Lũy kế sản xuất",
        dataType: "number",
    },{
        dataField: "DCUT_IN_LACK",
        caption: "入仓欠数 Số lượng liệu đến thiếu",
        dataType: "number",
        // calculateCellValue: function(rowData) {
        //     return rowData.Quantity - rowData.DCUT_IN;
        // }
    },{
        dataField: "DCUT_OUT",
        caption: "累计发料 Luỹ kế phát liệu",
        dataType: "number",
    },{
        dataField: "DCUT_OUT_LACK",
        caption: "出仓欠数 Số lượng liệu phát thiếu",
        dataType: "number",
        // calculateCellValue: function(rowData) {
        //     return rowData.Quantity - rowData.DCUT_OUT;
        // }
    }]
},{
    caption: "移印-DPMT-PRT-01 Xưởng In",
    columns: [{
        dataField: "DPMT-PRT-01_IN",
        caption: "累计生产 Lũy kế sản xuất",
        dataType: "number",
    },{
        dataField: "DPMT-PRT-01_IN_LACK",
        caption: "入仓欠数 Số lượng liệu đến thiếu",
        dataType: "number",
        // OPTION2
        // calculateCellValue: function(rowData) {
        //     return rowData.Quantity - rowData.DPMT-PRT-01-IN;
        // }
    },{
        dataField: "DPMT-PRT-01_OUT",
        caption: "累计发料 Luỹ kế phát liệu",
        dataType: "number",
    },{
        dataField: "DPMT-PRT-01_OUT_LACK",
        caption: "出仓欠数 Số lượng liệu phát thiếu",
        dataType: "number",
        // OPTION2
        // calculateCellValue: function(rowData) {
        //     return rowData.Quantity * rowData.DPMT-PRT-01-OUT;
        // }
    }]
},{
    caption: "布杯定型-DMOD01 Xưởng định hình",
    columns: [{
        dataField: "DMOD_IN",
        caption: "累计生产 Lũy kế sản xuất",
        dataType: "number",
    },{
        dataField: "DMOD_IN_LACK",
        caption: "入仓欠数 Số lượng liệu đến thiếu",
        dataType: "number",
    },{
        dataField: "DMOD_OUT",
        caption: "累计发料 Luỹ kế phát liệu",
        dataType: "number",
    },{
        dataField: "DMOD_OUT_LACK",
        caption: "出仓欠数 Số lượng liệu phát thiếu",
        dataType: "number",
    }]
},{
    caption: "打标--啤机-DMOD02 Xưởng cắt laze--dập máy bế",
    columns: [{
        dataField: "DMOD02_IN",
        caption: "累计生产 Lũy kế sản xuất",
        dataType: "number",
    },{
        dataField: "DMOD02_IN_LACK",
        caption: "入仓欠数 Số lượng liệu đến thiếu",
        dataType: "number",
    },{
        dataField: "DMOD02_OUT",
        caption: "累计发料 Luỹ kế phát liệu",
        dataType: "number",
    },{
        dataField: "DMOD02_OUT_LACK",
        caption: "出仓欠数 Số lượng liệu phát thiếu",
        dataType: "number",
    }]
},{
    caption: "618车间-DTSW618 Xưởng 618",
    columns: [{
        dataField: "W618_IN",
        caption: "累计生产 Lũy kế sản xuất",
        dataType: "number",
    },{
        dataField: "W618_IN_LACK",
        caption: "入仓欠数 Số lượng liệu đến thiếu",
        dataType: "number",
    },{
        dataField: "W618_OUT",
        caption: "累计发料 Luỹ kế phát liệu",
        dataType: "number",
    },{
        dataField: "W618_OUT_LACK",
        caption: "出仓欠数 Số lượng liệu phát thiếu",
        dataType: "number",
    }]
},{
    caption: "配料中心-DTSW1 Trung tâm phối liệu",
    columns: [{
        dataField: "DTSW1_IN",
        caption: "累计生产 Lũy kế sản xuất",
        dataType: "number",
    },{
        dataField: "DTSW1_OUT",
        caption: "入仓欠数 Số lượng liệu đến thiếu",
        dataType: "number",
    }]
},{
    caption: "棉杯入仓 Quả áo nhập kho DTSW1",
    dataType: "number",
    dataField: "DTSW1FOAM_IN",
},{
    caption: "棉杯欠数 Số lượng quả áo thiếu",
    dataType: "number",
    dataField: "DTSW1FOAM_IN_LACK",
    // calculateCellValue: function(rowData) {
    //     return rowData.Quantity - rowData.DTSW1FOAM_IN;
    // }
}];


//Data Summary
export const summary_data = [
{
    column: "DCUT_IN",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true

},{
    column: "DCUT_IN_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DCUT_OUT",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DCUT_OUT_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DPMT-PRT-01_IN",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DPMT-PRT-01_IN_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DPMT-PRT-01_OUT",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DPMT-PRT-01_OUT_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DMOD_IN",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DMOD_IN_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DMOD_OUT",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DMOD_OUT_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DMOD02_IN",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DMOD02_IN_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DMOD02_OUT",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DMOD02_OUT_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "W618_IN",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "W618_IN_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "W618_OUT",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "W618_OUT_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DTSW1_IN",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DTSW1_OUT",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DTSW1FOAM_IN",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
},{
    column: "DTSW1FOAM_IN_LACK",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: true,
    alignByColumn: true
}];

export const dcutList = [
    "DCUT_IN",
    "DCUT_IN_LACK",
    "DCUT_OUT",
    "DCUT_OUT_LACK",
];

export const dpmtList = [
    "DPMT-PRT-01_IN",
    "DPMT-PRT-01_IN_LACK",
    "DPMT-PRT-01_OUT",
    "DPMT-PRT-01_OUT_LACK",
];

export const D01List = [
    "DMOD_IN",
    "DMOD_IN_LACK",
    "DMOD_OUT",
    "DMOD_OUT_LACK",
];

export const D02List = [
    "DMOD02_IN",
    "DMOD02_IN_LACK",
    "DMOD02_OUT",
    "DMOD02_OUT_LACK",
];

export const W618List = [
    "W618_IN",
    "W618_IN_LACK",
    "W618_OUT",
    "W618_OUT_LACK",
];

export const DTSW1List = [
    "DTSW1_IN",
    "DTSW1_OUT",
];

