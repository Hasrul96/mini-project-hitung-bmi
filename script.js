var usia = document.getElementById("usia");
var tinggi = document.getElementById("tinggi");
var berat = document.getElementById("berat");
var pria = document.getElementById("pria");
var wanita = document.getElementById("wanita");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector("modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function hitung() {
  if (
    usia.value == "" ||
    tinggi.value == "" ||
    berat.value == "" ||
    (pria.checked == false && wanita.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required`;
  } else {
    countBmi();
  }
}

function countBmi() {
  var p = [usia.value, tinggi.value, berat.value];
  if (pria.checked) {
    p.push("pria");
  } else if (wanita.checked) {
    p.push("wanita");
  }

  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  var hasil = "";
  if (bmi < 18.5) {
    hasil = "Kekurangan Berat Badan";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    hasil = "Normal (ideal)";
  } else if (25 <= bmi && bmi <= 29.9) {
    hasil = "Kelebihan Berat Badan";
  } else if (30 <= bmi && bmi <= 34.9) {
    hasil = "Obesitas";
  } else if (35 <= bmi) {
    hasil = "Sangat Obesitas";
  }

  resultArea.style.display = "block";
  document.querySelector(
    ".comment"
  ).innerHTML = `Kamu <span id="comment">${hasil}</span>`;
  document.querySelector("#hasil").innerHTML = bmi.toFixed(2);
}

// Whhen the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
