//HEADER
$(document).ready(function () {
   //Redes topo
   var redesTopo = $('.novoMeio').html();
   $('.secao-secundaria').prepend(redesTopo);
   $('.novoMeio').remove();
  
});
