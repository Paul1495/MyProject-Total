
import {
    description_data,
    columns_data,
    summary_data,
    accumulationList,
} from '../data/data-process.js';

const grid = $('#grid').dxDataGrid({
    dataSource: description_data,
    keyExpr: 'ID',
    columns: columns_data,
    showBorders: true,
    wordWrapEnabled: true,
    summary: {
        groupItems: summary_data
      },
    
}).dxDataGrid('instance');

const onRowPrepared = function (e) {
    // console.log(e);
    if(e.rowType == "header") {
        e.rowElement.css('background', '#93BFCF');
        return;
    }

    if(e.rowType == "group") {
       e.rowElement.hide();
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
        return;
    } 
    
    if (e.rowType === "data" && accumulationList.includes(e.column.caption) ) {
        e.cellElement.css({'background':'yellow'});
        return;
    }

    if(e.rowType === "groupFooter"){
        e.cellElement.css({'background':'#FFD966'});
        return;
    }
    };

grid.option('onCellPrepared', onCellPrepared);


