import { VIEW_GRID_OPTION } from "../config_dataGrid/VIEW_GRID_OPTION.js";

const description_data = [
  {
    ID: 1,
    Position: "MOD-A01-09",
    ProductOrder: "000020143667",
    Description: "xop tron",
    Style: "N08XB0DV9837-J1F_2503",
    Customer: "Nike",
    TypeOfCut: "Don chinh",
    SaleOrder: "A160115369",
    Category: "000020",
    Color: "CW3",
    Size: "L",
    QuantityOfOrder: 392,
    QuantityOfCut: 392,
    QuantityOfImport: 392,
    QuantityOfExport: 191,
    QuantityOfStock: 201,
    QuantityofMissingCut: 0,
  },
  {
    ID: 2,
    Position: "MOD-A01-09",
    ProductOrder: "000020143667",
    Description: "mat lieu",
    Style: "N08XB0DV9837-J1F_2503",
    Customer: "Nike",
    TypeOfCut: "Don chinh",
    SaleOrder: "A160115369",
    Category: "000020",
    Color: "CW3",
    Size: "L",
    QuantityOfOrder: 392,
    QuantityOfCut: 392,
    QuantityOfImport: 392,
    QuantityOfExport: 191,
    QuantityOfStock: 0,
    QuantityofMissingCut: 0,
  },
  {
    ID: 3,
    Position: "MOD-A01-09",
    ProductOrder: "000020143667",
    Description: "de lieu",
    Style: "N08XB0DV9837-J1F_2503",
    Customer: "Nike",
    TypeOfCut: "Don chinh",
    SaleOrder: "A160115369",
    Category: "000020",
    Color: "CW3",
    Size: "L",
    QuantityOfOrder: 392,
    QuantityOfCut: 392,
    QuantityOfImport: 392,
    QuantityOfExport: 191,
    QuantityOfStock: 0,
    QuantityofMissingCut: 0,
  },
];

const columns_data = [
  {
    dataField: "Position",
    caption: "仓位名称 Vị trí kho",
  },
  {
    dataField: "ProductOrder",
    caption: " 制单号 Đơn sản xuất",
  },
  {
    dataField: "Description",
    caption: "部件 Chi tiết",
    dataType: "number",
  },
  {
    dataField: "Style",
    caption: "款号 Mã hàng",
  },
  {
    dataField: "Customer",
    caption: "客户名称 Khách hàng",
  },
  {
    dataField: "TypeOfCut",
    caption: "裁剪单类别 Loại hình cắt",
  },
  {
    dataField: "SaleOrder",
    caption: "销售单号 Đơn tiêu thụ",
  },
  {
    dataField: "Category",
    caption: "项目号 Hạng mục",
  },
  {
    dataField: "Color",
    caption: "颜色 Màu sắc",
  },
  {
    dataField: "Size",
    caption: "尺码 Size",
    dataType: "number",
  },
  {
    dataField: "QuantityOfOrder",
    caption: "订单数量 Số lượng đơn hàng",
    dataType: "number",
  },
  {
    dataField: "QuantityOfCut",
    caption: "已制卡数量 Số lượng đã cắt",
    dataType: "number",
  },
  {
    dataField: "QuantityOfImport",
    caption: "已入仓数量 Số lượng đã nhập kho",
    dataType: "number",
  },
  {
    dataField: "QuantityOfExport",
    caption: "已出仓数量 Số lượng đã xuất kho ",
    dataType: "number",
  },
  {
    dataField: "QuantityOfStock",
    caption: "当库存数量 Số lượng tồn kho hiện tại",
    dataType: "number",
  },
  {
    dataField: "QuantityofMissingCut",
    caption: "裁欠数 Số lượng cắt thiếu",
    dataType: "number",
  },
];

const summary_data = [
  {
    column: "Customer",
    summaryType: "count",
    displayFormat: "汇总Tổng ({0})",
    showInGroupFooter: false,
    alignByColumn: true,
  },
  {
    column: "QuantityOfOrder",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true,
  },
  {
    column: "QuantityOfCut",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true,
  },
  {
    column: "QuantityOfImport",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true,
  },
  {
    column: "QuantityOfExport",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true,
  },
  {
    column: "QuantityOfStock",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true,
  },
  {
    column: "QuantityofMissingCut",
    summaryType: "sum",
    displayFormat: "{0}",
    showInGroupFooter: false,
    alignByColumn: true,
  },
];

var grid = $("#grid")
  .dxDataGrid({
    ...VIEW_GRID_OPTION,
    dataSource: description_data,
    keyExpr: "ID",
    columns: columns_data,
    summary: {
      totalItems: summary_data,
    },
  })
  .dxDataGrid("instance");

var onRowPrepared = function (e) {
  // console.log(e);
  if (e.rowType == "header") {
    e.rowElement.css("background", "#f8cbad");
    return;
  }
};

grid.option("onRowPrepared", onRowPrepared);

var onCellPrepared = function (e) {
  console.log(e);
  e.cellElement.css("text-align", "center");
  e.cellElement.css("vertical-align", "middle");

  if (e.rowType == "header") {
    e.cellElement.css("color", "#000000");
    e.cellElement.css("font-weight", "bold");
    if (
      e.column.dataField === "ProductOrder" ||
      e.column.dataField === "Description"
    ) {
      e.cellElement.css({ background: "yellow" });
    }
    return;
  }
};

grid.option("onCellPrepared", onCellPrepared);
