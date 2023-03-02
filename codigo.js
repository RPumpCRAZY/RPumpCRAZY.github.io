//Menu
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
  if (menu_visible == false) {
    //si esta oculto
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}
//menu oculto
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}

//barras
function crearBarra(id_barra) {
  for (i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

//get element
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let git = document.getElementById("git");
crearBarra(git);
let flexboxygrid = document.getElementById("flexboxygrid");
crearBarra(flexboxygrid);
let figmaybootstrap = document.getElementById("figmaybootstrap");
crearBarra(figmaybootstrap);
let react = document.getElementById("react");
crearBarra(react);
let nodejs = document.getElementById("nodejs");
crearBarra(nodejs);
let php = document.getElementById("php");
crearBarra(php);

//barritas
let contadores = [-1, -1, -1, -1, -1, -1, -1, -1];

let entro = false;

//efecto
function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills =
    window.innerHeight - habilidades.getBoundingClientRect().top;
  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalHtml = setInterval(function () {
      pintarBarra(html, 8, 0, intervalHtml);
    }, 100);
    const intervalJavascript = setInterval(function () {
      pintarBarra(javascript, 2, 1, intervalJavascript);
    }, 100);
    const intervalgit = setInterval(function () {
      pintarBarra(git, 4, 2, intervalgit);
    }, 100);
    const intervalflexboxygrid = setInterval(function () {
      pintarBarra(flexboxygrid, 1, 3, intervalflexboxygrid);
    }, 100);
    const intervalfigmaybootstrap = setInterval(function () {
      pintarBarra(figmaybootstrap, 0, 4, intervalfigmaybootstrap);
    }, 100);
    const intervalreact = setInterval(function () {
      pintarBarra(react, 0, 5, intervalreact);
    }, 100);
    const intervalnodejs = setInterval(function () {
      pintarBarra(nodejs, 0, 5, intervalnodejs);
    }, 100);
    const intervalphp = setInterval(function () {
      pintarBarra(php, 0, 5, intervalphp);
    }, 100);
  }
}

function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "#940253";
  } else {
    clearInterval(interval);
  }
}

//efecto
window.onscroll = function () {
  efectoHabilidades();
};
