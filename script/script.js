var modals = ["sslcModal", "pucModal", "engModal", "corpModal"];
var btns = ["sslcbtn", "pucbtn", "engbtn", "corpbtn"];
var spans = ["sslcclose", "pucclose", "engclose", "corpclose"];
var btn_modal = {};
var span_modal = {};
for (var i = 0; i < 4; i++) {
  btn_modal[btns[i]] = modals[i];
  span_modal[spans[i]] = modals[i];
  document.getElementById(btns[i]).onclick = function () {
    document.getElementById(btn_modal[this.id]).style.display = "block";
  }
  document.getElementsByClassName(spans[i])[0].onclick = function () {
    document.getElementById(span_modal[this.className]).style.display = "none";

// var modals = ["sslcModal", "pucModal", "engModal", "corpModal"]
// var btns = ["sslcbtn", "pucbtn", "engbtn", "corpbtn"]
// var spans = ["sslcclose", "pucclose", "engclose", "corpclose"]

// for (var i = 0; i < 4; i++) {
//   var modal = document.getElementById(modals[i]);
//   var btn   = document.getElementById(btns[i]);
//   var span  = document.getElementsByClassName(spans[i])[0];
//   btn.onclick = function () {
//     modal.style.display = "block";
//   }
//   span.onclick = function () {
//     modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  for (var i = 0; i < 4; i++) {
    var modal = document.getElementById(modals[i]);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}