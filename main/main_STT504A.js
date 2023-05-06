// Set up column (permanent) 
const columns_data = [
    {
        dataField: "Line",
        caption: "线别Chuyền",
        name: "LineGroup",
        visible: false,
        groupIndex: 0,//Set group Item 
    },{
        dataField: "Factory",
        caption: "车间Xưởng",
    },{
        dataField: "Line",
        caption: "线别Chuyền",
    },{
        dataField: "STYLE_NO",
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
            caption:"少数 目标-重点工序SL thiếu - CĐTĐ" 
        },{
            dataField:"Rate",
            caption:"达成率Tỷ lệ đạt" 
        }]
    },{
        dataField:"Efficiency",
        caption:"效率Hiệu suất"
    }
];


const grid = $('#grid').dxDataGrid({
    dataSource: [],
    columns: [
        ...columns_data,
    ],
    showBorders: true,
    wordWrapEnabled: true,
    summary: {
        groupItems: [],
      },
    
}).dxDataGrid('instance');

const onRowPrepared = function (e) {
    if(e.rowType == "header") {
        e.rowElement.css('background', '#a9d08e');
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



