//CABEÇALHO - PAGINA DO PRODUTO
$(document).ready(function () {   
   var bread = $('.breadcrumbs').html();
   $('.secao-principal').prepend('<div class="breadcrumbs borda-alpha ">'+bread+'</div>');
   $('.secao-principal .info-principal-produto .breadcrumbs').remove();
});
