const summary = [
  {
    totalItems: [
      {
        column: "KanbanName",
        summaryType: "count",
        displayFormat: "汇总Tổng: {0}",
      },
      {
        column: "Morning",
        customizeText() {
          let countOK = grid
            .getDataSource()
            ._items.filter((x) => x.Result === "OK").length;
          let countNG = grid
            .getDataSource()
            ._items.filter((x) => x.Result === "NG").length;
          let pieChartUpdate = [
            {
              name: "OK",
              area: countOK,
            },
            {
              name: "NG",
              area: countNG,
            },
          ];
          pie.option("dataSource", pieChartUpdate);
          return `OK: ${countOK}  NG: ${countNG}`;
        },
      },
    ],
  },
];
