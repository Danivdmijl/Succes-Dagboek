// window.jsPDF = window.jspdf.jsPDF;
// var docPDF = new jsPDF();
// function print(){
// var elementHTML = document.querySelector("#printTable");
// docPDF.html(elementHTML, {
//  callback: function(docPDF) {
//   docPDF.save('SuccesDagboek.pdf');
//  },
//  x: 15,
//  y: 100,
//  width:230,
//  windowWidth: 1300
// });
// }

function PrintClicked() {
window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
function print(){
var elementHTML = document.querySelector("#printTable");
docPDF.html(elementHTML, {
 callback: function(docPDF) {
  docPDF.save('SuccesDagboek.pdf');
 },
 x: 15,
 y: 100,
 width:1500,
 windowWidth: 1300
});
}
}