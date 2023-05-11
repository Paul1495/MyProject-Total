import {
    data
} from '../data/data_STT504A.js';

var beginTime = new Date();
beginTime.setDate(beginTime.getDate())
beginTime.setHours(8);
beginTime.setMinutes(0);
beginTime.setMilliseconds(0);

var finishTime = new Date();

if((finishTime-beginTime)/1000/60 < 540) {
    var time = 0;
} else {
    time = (finishTime-beginTime)/1000/60;
};
console.log(time);



// Set up column (permanent) 5
const columns_data = [
    {
        dataField: "Factory",
        caption: "线别Xưởng",
        name: "FactoryGroup",
        visible: false,
        groupIndex: 0,//Set group Item 
    },{
        dataField: "Workline",
        caption: "线别Chuyền",
    },{
        dataField: "StyleNo",
        caption: "款号Mã hàng",
    },{
        dataField: "Sam",
        caption: "标工Sam",
    },{
        caption: "人数 Số người",
        columns: [{
            dataField:"Staff",
            caption:"编制Biên chế"
        },{
            dataField:"Real",
            caption:"实际出勤Thực tế"
        }]
    },{
        caption: "车间生产进度Tiến độ sản xuất trên chuyền",
        columns: [{
            dataField:"Target",
            caption:"目标Mục tiêu"
        },{
            dataField:"KeyStage",
            caption:"重点工序Công đoạn trọng điểm" 
        },{
            dataField:"CheckStage",
            caption:"QC 一查Công đoạn kiểm hàng"  
        },{
            dataField:"Lack",
            caption:"少数 目标-重点工序SL thiếu - CĐTĐ",
            calculateCellValue: (rowData) => {
                rowData["Lack"] = rowData["Target"] - rowData["KeyStage"];
                return rowData["Lack"];
            } 
        },{
            dataField:"Rate",
            caption:"达成率Tỷ lệ đạt",
            dataType: "percent",
            format: '#0.##%',
            calculateCellValue: (rowData) => {
                rowData["Rate"] = rowData["KeyStage"] / rowData["Target"];
                return rowData["Rate"];
            }
        }]
    },{
        dataField:"Efficiency",
        caption:"效率Hiệu suất",
        dataType: "percent",
        format: '#0.00%',
        calculateCellValue: (rowData) => {
            rowData["Efficiency"] = (rowData["Sam"]*rowData["KeyStage"]) / (rowData["Real"]*time);
            return rowData["Efficiency"];
        }
    }
];

function SUM(col) {
    return {
        column: col,
        summaryType: "sum",
        displayFormat: "{0}",
        showInGroupFooter: false,
        alignByColumn: true
    }   
};

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
    ],
    showBorders: true,
    wordWrapEnabled: true,
    summary: {
        groupItems: [
           SUM("Staff"),
           SUM("Real"),
           SUM("Target"),
           SUM("KeyStage"),
           SUM("CheckStage"),
           SUM("Lack"),
        {
            //Set format, position to show result after processing
            name:"SelectedRateSummary",
            showInColumn: "Rate",
            summaryType: "custom",
            displayFormat: "{0}",
            valueFormat: "#0.00%",
            showInGroupFooter: false,
            alignByColumn: true
        },{
            name:"SelectedEfficencySummary",
            showInColumn: "Efficiency",
            summaryType: "custom",
            displayFormat: "{0}",
            valueFormat: "#0.00%",
            showInGroupFooter: false,
            alignByColumn: true 
        }
        ],
        totalItems: [{
            column: "StyleNo",
            summaryType: "count",
            displayFormat: "汇总Tổng",
            showInGroupFooter: false,
            alignByColumn: true
        },  
            SUM("Staff"),
            SUM("Real"),
            SUM("Target"),
            SUM("KeyStage"),
            SUM("CheckStage"),
            SUM("Lack"),
        {
            name:"SelectedRateSummary",
            showInColumn: "Rate",
            summaryType: "custom",
            displayFormat: "{0}",
            valueFormat: "#0.00%",
            showInGroupFooter: false,
            alignByColumn: true    
        },{
            // name:"SelectedEfficencySummary",
            // showInColumn: "Efficiency",
            // summaryType: "custom",
            // displayFormat: "{0}",
            // valueFormat: "#0.00%",
            // showInGroupFooter: false,
            // alignByColumn: true 
        }
        ],
         //Set phần tính toán summary để được giá trị tính % tại 1 cột tỷ lệ chia theo grroup
        calculateCustomSummary(e) {
            if (e.name == "SelectedEfficencySummary") {
                if (e.summaryProcess == "start") {
                    e.samTotal = 0;
                    e.keyStageTotal = 0;
                    e.realTotal = 0;
                }
                else if (e.summaryProcess == "calculate") {
                    e.samTotal += e.value.Sam
                    e.keyStageTotal += e.value.KeyStage
                    e.realTotal += e.value.Real
                }
                else if (e.summaryProcess == "finalize") {
                    e.totalValue = Math.round(((e.samTotal * e.keyStageTotal) / (e.realTotal * time) + Number.EPSILON) * 10000) / 10000;
                }
            }

            if (e.name == "SelectedRateSummary") {
                if (e.summaryProcess == "start") {
                    e.targetTotal = 0;
                    e.keyStageTotal = 0;
                }
                else if (e.summaryProcess == "calculate") {
                    e.keyStageTotal += e.value.KeyStage
                    e.targetTotal += e.value.Target
                }
                else if (e.summaryProcess == "finalize") {
                    e.totalValue = Math.round((e.keyStageTotal / e.targetTotal + Number.EPSILON) * 10000) / 10000;
                }
            }
           
        },
    },
    
}).dxDataGrid('instance');

const onRowPrepared = function (e) {
    if(e.rowType == "header") {
        e.rowElement.css('background', '#a9d08e');
        return;
    }
    if(e.rowType == "group") {
       e.rowElement.css('background', '#f4b084');
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

    if (e.rowType == "data") {
        if(e.column.dataField === "Staff") {
            e.cellElement.css('background', '#a9d08e');
            } else if(e.column.dataField === "Real") {
                e.cellElement.css('background', '#f4b084');
                } else if(e.column.dataField === "Target") {
                    e.cellElement.css('background', '#9bc2e6');
                    }      
    }
};

grid.option('onCellPrepared', onCellPrepared);



