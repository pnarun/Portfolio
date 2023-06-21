const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// SSLC modal starts

// Get the modal
var modal = document.getElementById("sslcModal");

// Get the button that opens the modal
var btn = document.getElementById("sslcbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("sslcclose")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// SSLC modal ends

// PUC modal starts

// Get the modal
var modal1 = document.getElementById("pucModal");

// Get the button that opens the modal
var btn1 = document.getElementById("pucbtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("pucclose")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// PUC modal ends

// B.E ISE modal starts

// Get the modal
var modal2 = document.getElementById("engModal");

// Get the button that opens the modal
var btn2 = document.getElementById("engbtn");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("engclose")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// B.E ISE modal ends

// Corp modal starts

// Get the modal
var modal3 = document.getElementById("corpModal");

// Get the button that opens the modal
var btn3 = document.getElementById("corpbtn");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("corpclose")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// Corp modal ends

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
      }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}