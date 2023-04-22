
// Set up column (permanent) 
const data = [
{
    Factory: "VNA",
    KanbanType: "产线Kanban chuyền ",
    KanbanAddress: "Nhà máy A 厂",
    Department: "BRA1",
    WorkShop: "A1",
    KanbanName: "A1-L1",
    StatusMorning:"Online",
    StatusAfternoon:"Online",
    StatusNight:"Online",
},{
    Factory: "VNA",
    KanbanType: "产线Kanban chuyền ",
    KanbanAddress: "Công đoạn sau 后工序",
    Department: "BRA1",
    WorkShop: "A1",
    KanbanName: "A1-L2",
    StatusMorning:"Offline",
    StatusAfternoon:"Offline",
    StatusNight:"Online",
},{
    Factory: "VNA",
    KanbanType: "产线Kanban chuyền ",
    KanbanAddress: "Bộ phận BRA1部门",
    Department: "BRA1",
    WorkShop: "A1",
    KanbanName: "A1-L3",
    StatusMorning:"Online",
    StatusAfternoon:"Online",
    StatusNight:"Online",
},{
    Factory: "VNA",
    KanbanType: "产线Kanban xưởng ",
    KanbanAddress: "Xưởng A1 车间",
    Department: "BRA1",
    WorkShop: "A1",
    KanbanName: "A1",
    StatusMorning:"Online",
    StatusAfternoon:"Online",
    StatusNight:"Online",
},
]

const COLOR_GREEN = "#a9d08e";
const COLOR_PINK = "#ffcccc";
const COLOR_RED = "#c00000";
const COLOR_DEFAULT = "#ffffff";


const dataPie = [{
    name: 'OK',
    area: 3,
},{
    name: 'NG',
    area: 1,
}];

const columns_data = [ 
    {
        dataField: "Factory",
        caption: " 工厂 Nhà máy",
        
    },{
        dataField: "KanbanType",
        caption: "看板 Kanban",
        
    },{
        dataField: "KanbanAddress",
        caption: "看板地址 Địa chỉ kanban",
        
    },{
        dataField: "Department",
        caption: "部门 Bộ phận",
        
    },{
        dataField: "WorkShop",
        caption: "车间 Xưởng",
       
    },{
        dataField: "KanbanName",
        caption: "看板名称 Tên kanban",
        dataType: "date",
        format: 'MM/dd/yyyy',
        
    },{
        caption: "开关状态 Trạng thái Kanban",
        columns:[
        {
            dataField: "StatusMorning",
            caption: "上午Sáng",
            cellTemplate: (container, e) => {
                let color = COLOR_GREEN;
                if (e.data.StatusMorning === "Offline") {
                    color = COLOR_RED;
                }
                container.text(e.data.StatusMorning);
                container.css('background-color', color);
                container.css('font-weight', 'bold');
            }
        },{
            dataField: "StatusAfternoon",
            caption: "下午Chiều",
            cellTemplate: (container, e) => {
                let color = COLOR_GREEN;
                if (e.data.StatusAfternoon === "Offline") {
                    color = COLOR_RED;
                }
                container.text(e.data.StatusAfternoon);
                container.css('background-color', color);
                container.css('font-weight', 'bold');
            }
        },{
            dataField: "StatusNight",
            caption: "夜班Đêm",
            cellTemplate: (container, e) => {
                let color = COLOR_GREEN;
                if (e.data.StatusNight === "Offline") {
                    color = COLOR_RED;
                }
                container.text(e.data.StatusNight);
                container.css('background-color', color);
                container.css('font-weight', 'bold');
            }
        }]
    },{
        dataField:"Download",
        caption: "计划上传 Tải biểu kế hoạch",            
    },{
        dataField:"Result",
        caption: "结论 Kết luận",
        cellTemplate: (container, e) => {
            let value = "OK"
            let color = COLOR_GREEN;
            if(e.data.StatusMorning === "Offline" || e.data.StatusAfternoon === "Offline" || e.data.StatusNight === "Offline") {
                value = "NG";
                color = COLOR_RED;
            }
            container.text(value);
            container.css('background-color', color);
            container.css('font-weight', 'bold');
        }   
    }
];

const grid= $('#grid').dxDataGrid({
    dataSource: data,
    columns: columns_data,
    showBorders: true,
    wordWrapEnabled: true,
    headerFilter: {
        visible: true,
      },
    summary: {
        totalItems: [{
            column: "Result",
            summaryType: "count",
        },        
        ],
      },

    onRowPrepared:(e) => {
        if(e.rowType == "header") {
            e.rowElement.css('background', COLOR_PINK);
            return;
        }
        if(e.rowType == "group") {
           e.rowElement.hide();
           return;
        }    
    },

    onCellPrepared:(e) => {
        e.cellElement.css("text-align", "center");
        e.cellElement.css("vertical-align", "middle");
        if (e.rowType == "header") {
            e.cellElement.css('color', '#000000');
            e.cellElement.css('font-weight', 'bold');
        }
        
        else if(e.rowType === "groupFooter"){
            e.cellElement.css({'background':'#FFD966'});
            return;
        }

        else if(e.rowType === "totalFooter"){
            if(e.column.dataField === "Result") {
                console.log(e)
            }
        }
    },
    
    
}).dxDataGrid('instance');



const legendSettings = {
    verticalAlignment: 'bottom',
    horizontalAlignment: 'center',
    itemTextPosition: 'right',
    rowCount: 2,
  };
  const seriesOptions = [{
    argumentField: 'name',
    valueField: 'area',
    label: {
      visible: true,
    },
  }];

const pie = $('#pie').dxPieChart({
    // sizeGroup: sizeGroupName,
    palette: ["#a9d08e", "#c00000"],
    title: 'Frequency',
    legend: legendSettings,
    dataSource: dataPie,
    series: seriesOptions,
}).dxPieChart('instance');


