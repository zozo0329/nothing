let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let coupleGif = document.getElementById("couple");
let backgroundColor = document.querySelector(".main-section");
let question = document.querySelector(".question h1");
let buttons = document.querySelector(".other-buttons button");
let music = document.getElementById("music");
let description = document.querySelector(".background-music p");
// other no
let no1 = document.getElementById("no1");
let no2 = document.getElementById("no2");
let no3 = document.getElementById("no3");
let no4 = document.getElementById("no4");
let no5 = document.getElementById("no5");
let no6 = document.getElementById("no6");

// IMAGES
let img1 = document.getElementById("cat1");
let img2 = document.getElementById("cat2");
let img3 = document.getElementById("cat3");
let img4 = document.getElementById("hoodie");
let img5 = document.getElementById("smile");
function ohNo() {
  noButton.style.visibility = "hidden";
  no1.style.visibility = "visible";
}
function ohNo2() {
  no1.style.visibility = "hidden";
  no2.style.visibility = "visible";
}
function ohNo3() {
  no2.style.visibility = "hidden";
  no3.style.visibility = "visible";
  img1.style.display = "none";
  img2.style.display = "block";
}
function ohNo4() {
  no3.style.visibility = "hidden";
  no4.style.visibility = "visible";
  img2.style.display = "none";
  img3.style.display = "block";
}
function ohNo5() {
  no4.style.visibility = "hidden";
  no5.style.visibility = "visible";
  img3.style.display = "none";
  img4.style.display = "block";
  backgroundColor.style.backgroundColor = "##303030";
}
function ohNo6() {
  no5.style.visibility = "hidden";
  no6.style.visibility = "visible";
  question.style.color = "red";
  backgroundColor.style.backgroundColor = "#641200";
  img4.style.display = "none";
  img5.style.display = "block";
}
// IF YES

function ohYeah() {
  img1.style.display = "none";
  question.style.display = "none";
  yesButton.style.display = "none";
  noButton.style.display = "none";
  buttons.style.display = "none";
  coupleGif.style.display = "block";
  music.style.display = "block";
  description.style.display = "block";
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
  img5.style.display = "none";
  no1.style.display = "none";
  no2.style.display = "none";
  no3.style.display = "none";
  no4.style.display = "none";
  no5.style.display = "none";
  no6.style.display = "none";
  backgroundColor.style.backgroundColor = "white";
}
alert("Are you sure you want to continue?");
alert("Alright but please, Don't say no :))");
