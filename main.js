function tocaSom(idElementoAudio){
     document.querySelector(idElementoAudio).play();
}
 
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// Estrutura de repetiçao - Enquanto
while(contador < listaDeTeclas.length) {
listaDeTeclas[contador].onclick = function(){
 tocaSom('som_tecla_splash');
 };
contador = contador + 1;
}
const teclas = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const idAudio = '#som_${instrumento}';
console.log(idAudio);
console.log(instrumento);
tecla.onclick = function (){
tocaSom(idAudio);
}