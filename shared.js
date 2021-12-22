//#region - static code region, shared code between charts, will go inside of <head> tag section on webflow.

const googleSheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWQ-hIY86B-xRlAoLPOQc1L0-Dmb59AUtp-_declUDUtr2FEOGjQgDBGP9rJbmiqQcVocGRV1ugxEr/pub?gid=";
const color = [
  "#F54A4A",
  "#0071C6",
  "#DE2F8F",
  "#AF52C7",
  "#254294",
  "#12BC81",
];
const textStyle = {
  fontFamily: "Montserrat",
  fontSize: 10,
};
const titleStyle = {
    textAlign: "center",
    textVerticalAlign: "auto",
    left: "50%",
    top: "4%",
}
const legendStyle = {
    bottom: "0",
    itemGap: 15,
    textStyle: {
      fontSize: 11,
      fontFamily: "sans-serif",
      color: "#6e7079e8",
    }
}
function parseNumbers(values) {
  return values?.map((d) => parseFloat(d?.replaceAll(",", "")));
}

//#endregion - static code region.
