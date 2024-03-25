let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let coupleGif = document.getElementById("couple");
let backgroundColor = document.querySelector("body");
let question = document.querySelector(".question h1");
let buttons = document.querySelector(".other-buttons button");
let music = document.getElementById("music");
let music2 = document.getElementById("music2");
let description = document.querySelector(".background-music p");
let ily = document.querySelector(".background-music h1");
// other no
let no1 = document.getElementById("no1");
let no2 = document.getElementById("no2");
let no3 = document.getElementById("no3");
let no4 = document.getElementById("no4");
let no5 = document.getElementById("no5");
let no6 = document.getElementById("no6");
// DARK BuTTONS
let darkButtons = document.getElementById("darkButton");
let lastButton = document.querySelector(".last-button");

// IMAGES
let img1 = document.getElementById("cat1");
let img2 = document.getElementById("cat2");
let img3 = document.getElementById("cat3");
let img4 = document.getElementById("hoodie");
let img5 = document.getElementById("smile");
let img6 = document.getElementById("shadowMan");
let img7 = document.getElementById("jigsaw");
let img8 = document.getElementById("sadBoy");
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
function ohNo7() {
  no1.style.display = "none";
  no2.style.display = "none";
  no3.style.display = "none";
  no4.style.display = "none";
  no5.style.display = "none";
  no6.style.display = "none";
  darkButtons.style.display = "block";
  img5.style.display = "none";
  img6.style.display = "block";
  backgroundColor.style.backgroundColor = "#230100";
  question.innerHTML = "You don't love me?";
}
function ohNo8() {
  darkButtons.style.display = "none";
  lastButton.style.display = "block";
  img6.style.display = "none";
  img7.style.display = "block";
  question.innerHTML = "You still choose no. Last question, Do you love me?";
  question.style.color = "#560c03";
}
function ohNo9() {
  lastButton.style.display = "none";
  yesButton.style.display = "none";
  img7.style.display = "none";
  img8.style.display = "block";
  img8.style.height = "350px";
  img8.style.width = "350px";
  backgroundColor.style.backgroundColor = "black";
  question.innerHTML = "Okay, you can leave this page now.";
  question.style.color = "white";
  question.style.fontSize = "20px";
  music2.style.display = "block";
  noButton.style.display = "none";
  yesButton.style.display = "none";
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
  ily.style.display = "block";
}
