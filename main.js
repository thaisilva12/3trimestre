function tocaSom(idElementoAudio)
   const elemento = document.querySelector(idElementoAudio);
if (elemento === null){
alert('Elemento não encontrado')
}
const listaDeTeclas=document.querySelectorAll('.tecla');
// Estrutura de repetiçao - Enquanto
for(let contador = 0; contador < listaDeTeclas.length; contador++){
const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const idAudio = `#som_${instrumento}`;
 
console.log(idAudio);

tecla.onclick = function (){
   tocaSom(idAudio);
};
tecla.onkeydown = function(evento){
   if (evento.code === 'enter' || evento.code === 'space'){
      tecla.classList.add('ativa')
   }
};
tecla.onkeyup = function(){
   tecla.classList.remove('ativa');
} 
  console.log(instrumento);
console.log(contador)
}
