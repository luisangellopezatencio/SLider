const sig = document.querySelector("#siguiente");
const ant = document.querySelector("#anterior");

let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let c3 = document.querySelector("#c3");
let c4 = document.querySelector("#c4");

let imagen = document.querySelector("#imag");
let i = 0;
const imagenes = ['./imagenes/img2.jpg', './imagenes/img3.jpg', './imagenes/img4.jpg', './imagenes/img1.jpg' ];
const circulos = [c2, c3, c4, c1];
let j=imagenes.length-1;
let k=imagenes.length-1;
function siguiente() {
    imagen.src = imagenes[i];
    circulos[i].classList.add("esta-activado");
    circulos[k].classList.remove("esta-activado");
    j=i;
    i++;
    if (i > imagenes.length-1) {
        i=0;
    }
    k++;
    if (k > 3) {
        k=0;
    }
}
function anterior() {
    i=j;
    j--;
    if (j < 0) {
        j= imagenes.length-1;
    }
    imagen.src = imagenes[j];
    circulos[j].classList.add("esta-activado");
    circulos[k].classList.remove("esta-activado");
    k--;
    if (k < 0) {
        k=imagenes.length-1;
    }
}

sig.onclick = function(){
    siguiente();
}

ant.onclick = function(){
    anterior();
}
