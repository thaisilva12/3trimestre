function tocaSom(idElementoAudio){
     document.querySelector(idElementoAudio).play();
}

// Estrutura de repetiçao - Enquanto
for(let contador = 0;contador < listaDeTeclas.length;contador++) {
const teclas = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const idAudio = `#som_${instrumento}`;
}
tecla.onclick = function (){
tocaSom(idAudio);
};
tecla.onkeydown = function (){
tecla.classList.add('ativa');
}
tecla.onkeyup = function(){
tecla.classList.remove('ativa');
} 
console.log(contador);{

}

