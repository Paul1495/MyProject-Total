export const VIEW_GRID_OPTION = {
    dataSource: [],
    showRowLines: true,
    showColumnHeaders: true,
    showBorders: true,
    allowColumnResizing: true,
    columnResizingMode: "widget",
    columnFixing: {
        enabled: true,
    },
    //height: window.innerHeight * 0.8,
    hoverStateEnabled: true,
    columnAutoWidth: true,
    allowColumnReordering: true,
    rowAlternationEnabled: true,
    wordWrapEnabled: true,
    columnChooser: { enabled: true, allowSearch: true, mode: "select", height: 500, width: 500, title: "Show/Hide Column" },
    paging: {
        enabled: false,
    },
    selection: {
        mode: "standard",
    },
    loadPanel: {
        enabled: true,
        height: 90,
        shading: false,
        showIndicator: true,
        showPane: true,
        text: "Loading...",
        width: 200
    },
    filterRow: {
        visible: false,
        applyFilter: "auto"
    },
    scrolling: {
        mode: "standard",
        scrollByContent: true
    },
    headerFilter: {
        visible: false
    },
    editing: {
        mode: "row",
        allowAdding: false,
        allowUpdating: false,
        allowDeleting: false,
        useIcons: true,
    },
    // onToolbarPreparing: (e) => {
    //     var lang = getCookie("Language");
    //     var exportText = lang == "zh" ? "将数据导出到Excel" : lang == "vi" ? "Xuất dữ liệu ra Excel" : "Export to Excel";
    //     e.toolbarOptions.items.unshift(
    //         {
    //             location: "before",
    //             widget: "dxButton",
    //             options: {
    //                 icon: "exportxlsx",
    //                 hint: exportText,
    //                 text: exportText,
    //                 type: "success",
    //                 onClick: function (ev) {
    //                     ev.component.option('disabled', true);
    //                     if (e.component.option('dataSource').length == 0) return;
    //                     var gridID = e.element[0].id;
    //                     var extraInfor = {
    //                         title: "ROS-" + $('.card-title').first().text(),
    //                         user: "User: " + $('#userDropdown').text(),
    //                         time: "Export Time: " + new Date().toLocaleString()
    //                     }
    //                     ExportDxDataGridToExcel($('#' + gridID + ''), e.component.option('exportFileName'), extraInfor);
    //                     var newLog = {
    //                         ReportName: $('.card-title').first().text(),
    //                         EmpInfo: $('#userDropdown').text(),
    //                         ExportTime: new Date().toISOString()
    //                     }
    //                     AjaxBase(null, "/BaseData/LogUserExport", "POST", newLog, (response) => {
    //                         ev.component.option('disabled', false);
    //                     });
    //                 }
    //             }
    //         },
    //     );
    // },
    exportFileName: "Result",
    onCellPrepared: function (e) {
        if (e.rowType == "header") {
            e.cellElement.css("font-weight", "bold");
        }
        e.cellElement.css("text-align", "center");
        e.cellElement.css("vertical-align", "middle");
    },
};