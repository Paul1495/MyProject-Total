export const VIEW_GRID_OPTION = {
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
  //   columnChooser: {
  //     enabled: true,
  //     allowSearch: true,
  //     mode: "select",
  //     height: 500,
  //     width: 500,
  //     title: "Show/Hide Column",
  //   },
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
    width: 200,
  },
  filterRow: {
    visible: false,
    applyFilter: "auto",
  },
  scrolling: {
    mode: "standard",
    scrollByContent: true,
  },
  headerFilter: {
    visible: false,
  },
  editing: {
    mode: "row",
    allowAdding: false,
    allowUpdating: false,
    allowDeleting: false,
    useIcons: true,
  },
};
