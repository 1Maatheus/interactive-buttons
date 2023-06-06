let red = "#FF0000";
let green = "#00FF00";
let yellow = "#FFFF00";

function vermelho() {
  document.getElementById("container").style.background = red;
}

function verde() {
  document.getElementById("container").style.background = green;
}

function amarelo() {
  document.getElementById("container").style.background = yellow;
}

function reset(cor) {
  document.getElementById("container").style.background = cor;
}
