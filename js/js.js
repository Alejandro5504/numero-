const NUMEROA = document.getElementById("a");
const NUMEROB = document.getElementById("b");

const RESULTADO = document.getElementById('total');


function convertir() {

let numeroa = Number(NUMEROA.value);
let numerob = Number(NUMEROB.value);

if(numeroa>numerob) {

RESULTADO.innerHTML="El numero mas grande es:" + numeroa;

} else {

RESULTADO.innerHTML="El numero mas grande es:" + numerob;

}

}