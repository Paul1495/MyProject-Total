
import {
    combined_data,
    columns_data,
    summary_data,
    dcutList,
    dpmtList,
    D01List,
    D02List,
    W618List,
    DTSW1List,

} from '../data/data-detail.js';

const grid = $('#grid').dxDataGrid({
    dataSource: combined_data,
    columns: columns_data,
    showBorders: true,
    wordWrapEnabled: true,
    summary: {
        groupItems: summary_data,
      },
    
}).dxDataGrid('instance');

const onRowPrepared = function (e) {
    // console.log(e);
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
    //console.log(e);
    e.cellElement.css("text-align", "center");
    e.cellElement.css("vertical-align", "middle");
    if (e.rowType == "header") {
        e.cellElement.css('color', '#000000');
        e.cellElement.css('font-weight', 'bold');
        if(dcutList.includes(e.column.dataField) || e.column.caption === "裁床-DCUT Xưởng cắt") {
            e.cellElement.css({'background':'#a9d08e'});
        } else if(dpmtList.includes(e.column.dataField) || e.column.caption === "移印-DPMT-PRT-01 Xưởng In") {
            e.cellElement.css({'background':'#ffe699'});
        } else if(D01List.includes(e.column.dataField) || e.column.caption === "布杯定型-DMOD01 Xưởng định hình") {
            e.cellElement.css({'background':'#8ea9db'});
        } else if(D02List.includes(e.column.dataField) || e.column.caption === "打标--啤机-DMOD02 Xưởng cắt laze--dập máy bế") {
            e.cellElement.css({'background':'#ddebf7'});
        } else if(W618List.includes(e.column.dataField) || e.column.caption === "618车间-DTSW618 Xưởng 618") {
            e.cellElement.css({'background':'#fff2cc'});
        } else if(DTSW1List.includes(e.column.dataField) || e.column.caption === "配料中心-DTSW1 Trung tâm phối liệu") {
            e.cellElement.css({'background':'#92d050'});
        } else if(e.column.caption === "棉杯入仓 Quả áo nhập kho DTSW1") {
            e.cellElement.css({'background':'yellow'});
        } else if(e.column.caption === "棉杯欠数 Số lượng quả áo thiếu") {
            e.cellElement.css({'background':'white'}); 
    } 
    }
    
    if(e.rowType === "groupFooter"){
        e.cellElement.css({'background':'#FFD966'});
        return;
    }
};

grid.option('onCellPrepared', onCellPrepared);



