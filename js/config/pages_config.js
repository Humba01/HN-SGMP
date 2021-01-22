//Páginas
let paginaUm = document.getElementById("sgmp_pag1");
let paginaDois = document.getElementById("sgmp_pag2");
let paginaTres = document.getElementById("sgmp_pag3");
let paginaQuatro = document.getElementById("sgmp_pag4");
let paginaCinco = document.getElementById("sgmp_pag5");

//Elementos Clicáveis
let cardUmUiZero = document.getElementById("card1__ui0");
let cardUmUiUm = document.getElementById("card1__ui1");
let cardDoisUiUm = document.getElementById("card2__ui1");
let cardUmUiUmUnderlineUm = document.getElementById("card1__ui1_1");

//Botões de Retorno
let botaoRetorno1 = document.getElementById("btn_return1");
let botaoRetorno2 = document.getElementById("btn_return2");
let botaoRetorno3 = document.getElementById("btn_return3");
let botaoRetorno4 = document.getElementById("btn_return4");

function mostraPaginaNumeroUm() {
  paginaUm.style.display = "inline-block";
  paginaDois.style.display = "none";
  paginaTres.style.display = "none";
  paginaQuatro.style.display = "none";
  paginaCinco.style.display = "none";
}

function mostraPaginaNumeroDois() {
  paginaUm.style.display = "none";
  paginaDois.style.display = "inline-block";
  paginaTres.style.display = "none";
  paginaQuatro.style.display = "none";
  paginaCinco.style.display = "none";
}

function mostraPaginaNumeroTres() {
  paginaUm.style.display = "none";
  paginaDois.style.display = "none";
  paginaTres.style.display = "inline-block";
  paginaQuatro.style.display = "none";
  paginaCinco.style.display = "none";
}

function mostraPaginaNumeroQuatro() {
  paginaUm.style.display = "none";
  paginaDois.style.display = "none";
  paginaTres.style.display = "none";
  paginaQuatro.style.display = "inline-block";
  paginaCinco.style.display = "none";
}

function mostraPaginaNumeroCinco() {
  paginaUm.style.display = "none";
  paginaDois.style.display = "none";
  paginaTres.style.display = "none";
  paginaQuatro.style.display = "none";
  paginaCinco.style.display = "inline-block";
}

let visao1 = cardUmUiZero.addEventListener("click", () => {
  mostraPaginaNumeroDois();
});

let visao2 = cardUmUiUm.addEventListener("click", () => {
  mostraPaginaNumeroTres();
});

let visao3 = cardUmUiUmUnderlineUm.addEventListener("click", () => {
  mostraPaginaNumeroQuatro();
});

let visao4 = cardDoisUiUm.addEventListener("click", () => {
  mostraPaginaNumeroCinco();
});

let visaoRetorno1 = botaoRetorno1.addEventListener("click", () => {
  mostraPaginaNumeroUm();
});

let visaoRetorno2 = botaoRetorno2.addEventListener("click", () => {
  mostraPaginaNumeroDois();
});

let visaoRetorno3 = botaoRetorno3.addEventListener("click", () => {
  mostraPaginaNumeroTres();
});

let visaoRetorno4 = botaoRetorno4.addEventListener("click", () => {
  mostraPaginaNumeroDois();
});
