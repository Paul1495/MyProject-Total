
import {
    description_data,
    columns_data,
    summary_data,
} from '../data/data_STT520B.js';

var grid = $('#grid').dxDataGrid({
    dataSource: description_data,
    keyExpr: 'ID',
    columns: columns_data,
    showBorders: true,
    wordWrapEnabled: true,
    summary: {
        totalItems: summary_data
    },
}).dxDataGrid('instance');


var onRowPrepared = function (e) {
    // console.log(e);
    if(e.rowType == "header") {
        e.rowElement.css('background', '#FFBF9B');
        return;    
    }
    
    if(e.rowType == "totalFooter") {
        e.rowElement.css('background', '#C7E8CA')
        return;
    } 
};

grid.option('onRowPrepared', onRowPrepared);

var onCellPrepared = function (e) {
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

grid.option('onCellPrepared', onCellPrepared);

