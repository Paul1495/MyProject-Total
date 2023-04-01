
import {
    description_data,
    columns_data
} from '../data/data-summary.js';

var grid = $('#grid').dxDataGrid({
    dataSource: description_data,
      keyExpr: 'ID',
      columns: columns_data,
      wordWrapEnabled: true,
      showBorders: true,
}).dxDataGrid('instance');

var onRowPrepared = function (e) {
    // console.log(e);
    if(e.rowType == "header") {
        e.rowElement.css('background', '#FFBF9B');
        return;
    }
};

grid.option('onRowPrepared', onRowPrepared);

var onCellPrepared = function (e) {
    console.log(e);
    e.cellElement.css("text-align", "center");
    e.cellElement.css("vertical-align", "middle");
 
    if (e.rowType == "header") {
        e.cellElement.css('font-weight', 'bold');
        e.cellElement.css('color', '#000000');
        return;
    }
    };

grid.option('onCellPrepared', onCellPrepared);




