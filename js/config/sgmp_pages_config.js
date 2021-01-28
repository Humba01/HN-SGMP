
//Páginas
const paginaUm = document.getElementById("sgmp_pag1");
const paginaDois = document.getElementById("sgmp_pag2");
const paginaTres = document.getElementById("sgmp_pag3");
const paginaQuatro = document.getElementById("sgmp_pag4");
const paginaCinco = document.getElementById("sgmp_pag5");

//Elementos Clicáveis
const cardUmUiZero = document.getElementById("card1__ui0");
const cardUmUiUm = document.getElementById("card1__ui1");
const cardDoisUiUm = document.getElementById("card2__ui1");
const cardUmUiUmUnderlineUm = document.getElementById("card1__ui1_1");

//Botões de Retorno
const botaoRetorno1 = document.getElementById("btn_return1");
const botaoRetorno2 = document.getElementById("btn_return2");
const botaoRetorno3 = document.getElementById("btn_return3");
const botaoRetorno4 = document.getElementById("btn_return4");

function mostraPaginaNumeroUm() {
  paginaUm.style.display = "inline-block";
  paginaDois.style.display = "none";
  paginaTres.style.display = "none";
  paginaQuatro.style.display = "none";
  paginaCinco.style.display = "none";
};

function mostraPaginaNumeroDois() {
  paginaUm.style.display = "none";
  paginaDois.style.display = "inline-block";
  paginaTres.style.display = "none";
  paginaQuatro.style.display = "none";
  paginaCinco.style.display = "none";
};

function mostraPaginaNumeroTres() {
  paginaUm.style.display = "none";
  paginaDois.style.display = "none";
  paginaTres.style.display = "inline-block";
  paginaQuatro.style.display = "none";
  paginaCinco.style.display = "none";
};

function mostraPaginaNumeroQuatro() {
  paginaUm.style.display = "none";
  paginaDois.style.display = "none";
  paginaTres.style.display = "none";
  paginaQuatro.style.display = "inline-block";
  paginaCinco.style.display = "none";
};

function mostraPaginaNumeroCinco() {
  paginaUm.style.display = "none";
  paginaDois.style.display = "none";
  paginaTres.style.display = "none";
  paginaQuatro.style.display = "none";
  paginaCinco.style.display = "inline-block";
};

const visao1 = cardUmUiZero.addEventListener("click", function() {
  mostraPaginaNumeroDois();
});

const visao2 = cardUmUiUm.addEventListener("click", function() {
  mostraPaginaNumeroTres();
});

const visao3 = cardUmUiUmUnderlineUm.addEventListener("click", function() {
  mostraPaginaNumeroQuatro();
});

const visao4 = cardDoisUiUm.addEventListener("click", function() {
  mostraPaginaNumeroCinco();
});

const visaoRetorno1 = botaoRetorno1.addEventListener("click", function() {
  mostraPaginaNumeroUm();
});

const visaoRetorno2 = botaoRetorno2.addEventListener("click", function() {
  mostraPaginaNumeroDois();
});

const visaoRetorno3 = botaoRetorno3.addEventListener("click", function() {
  mostraPaginaNumeroTres();
});

const visaoRetorno4 = botaoRetorno4.addEventListener("click", function() {
  mostraPaginaNumeroDois();
});
