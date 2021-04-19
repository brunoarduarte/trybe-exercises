//Exercício 1
function changeTxt () {
let setTxt = document.getElementsByTagName('p')[0]
setTxt.innerText = "Full stack developer and UI/UX Designer Hired";
}
changeTxt ();

//Exercício 2
function changeBkColor () {
let bkground = document.getElementsByClassName('main-content')[0];
bkground.style.backgroundColor = 'rgb(76,164,109)';
}
changeBkColor ();

//Exercício 3
function changeBkColor2 () {
let bkground2 = document.getElementsByClassName('center-content')[0];
bkground2.style.backgroundColor = 'white';
}
changeBkColor2 ();

//Exercício 4
function correctTxt () {
let oldTxt = document.getElementsByClassName('title')[0]
oldTxt.innerText = 'Exercício 5.1 - JavaScript';
}
correctTxt ();

//Exercício 5
function toUpperCase () {
let baseTxt = document.getElementsByTagName('p')[0]
baseTxt.style.textTransform = 'uppercase';
}
toUpperCase ();

//Exercício 6
function showParagraphs () {
  let par = document.getElementsByTagName('p');
  for (i = 0; i < par.length; i += 1) {
    console.log(par[i].innerHTML);
  }
}
showParagraphs ();