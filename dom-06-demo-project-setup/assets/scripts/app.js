const ADDMOVIEMODAL = document.getElementById("add-modal");
// const ADDMOVIEMODAL = document.querySelector('#add-modal');
// const ADDOVIEMODAL = document.body.children[1];
const STARTADDMOVIEBUTTON = document.querySelector("header button");
// const STARTADDMOVIEBUTTON = document.querySelector("header").lastElementChild;
const BACKDROP = document.getElementById("backdrop");
// const BACKDROP = document.body.firstElementChild;
const CANCELADDMOVIEBUTTON = ADDMOVIEMODAL.querySelector(".btn--passive");

const TOGGLEBACKDROP = function () {
  BACKDROP.classList.toggle("visible");
};

const TOGGLEMOVIEMODAL = function () {
  ADDMOVIEMODAL.classList.toggle("visible");
  TOGGLEBACKDROP();
};

const CANCELADDMOVIE = function () {
  TOGGLEMOVIEMODAL();
};

const BACKDROPCLICKHANDLER = function () {
  TOGGLEMOVIEMODAL();
};

STARTADDMOVIEBUTTON.addEventListener("click", TOGGLEMOVIEMODAL);
BACKDROP.addEventListener("click", TOGGLEMOVIEMODAL);
CANCELADDMOVIEBUTTON.addEventListener("click", CANCELADDMOVIE);
