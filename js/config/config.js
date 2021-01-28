const { exists, file } = require("grunt");

const page = document.getElementById('corpo');

page.style.overflowX = 'hidden';

setTimeout(function() {
    window.scrollTo(0, scrollY);
}, 80);

setTimeout(function() {
    window.scrollTo(scrollX, 0);
}, 300);

const ancoraParaPaginaPrincipal = document.getElementById("cab_am1");

ancoraParaPaginaPrincipal.href = "default.html";

