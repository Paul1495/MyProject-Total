function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 10000) {
    var suffixes = ["", "K", "M", "B", "T"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = "";
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      );
      var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}

const efficiencyWorkshop1 = "88.77%";
const quantityWorkshop1 = 8700;
const targetWorkshop1 = 9800;
const workerWorkshop1 = 5000;
$("#efficiencyWorkshop1").text(`${efficiencyWorkshop1}`);
$("#quantityWorkshop1").text(`${abbreviateNumber(quantityWorkshop1)}`);
$("#targetWorkshop1").text(`${abbreviateNumber(targetWorkshop1)}`);
$("#workerWorkshop1").text(`${abbreviateNumber(workerWorkshop1)}`);

const efficiencyWorkshop2 = "65.30%";
const quantityWorkshop2 = 6400;
const targetWorkshop2 = 9800;
const workerWorkshop2 = 7000;
$("#efficiencyWorkshop2").text(`${efficiencyWorkshop2}`);
$("#quantityWorkshop2").text(`${abbreviateNumber(quantityWorkshop2)}`);
$("#targetWorkshop2").text(`${abbreviateNumber(targetWorkshop2)}`);
$("#workerWorkshop2").text(`${abbreviateNumber(workerWorkshop2)}`);

const efficiencyWorkshop3 = "75.51%";
const quantityWorkshop3 = 7400;
const targetWorkshop3 = 9800;
const workerWorkshop3 = 3400;
$("#efficiencyWorkshop3").text(`${efficiencyWorkshop3}`);
$("#quantityWorkshop3").text(`${abbreviateNumber(quantityWorkshop3)}`);
$("#targetWorkshop3").text(`${abbreviateNumber(targetWorkshop3)}`);
$("#workerWorkshop3").text(`${abbreviateNumber(workerWorkshop3)}`);
