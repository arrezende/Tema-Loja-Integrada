//HEADER
$(document).ready(function () {
   //Redes topo
   var redesTopo = $('.barra-inicial .lista-redes').html();
   $('.top .span12 .lista-redes').prepend(redesTopo);
   //Remove a barra do topo
   $('.barra-inicial').remove();
   //Monta o cabeçalho do login
   var login_acesso = $("#cabecalho .superior .span8").html();
   $(".top #login_acesso").append(login_acesso);
   var btnHome = '<li class="categoria-paginas borda-principal icone-home"><a href="javascript:;" title="Institucional"><strong class="titulo cor-secundaria"></strong> </a></li>';
   $('.menu.superior .nivel-um').prepend(btnHome);
   //Campo meus pedidos
   var btnMeusPedidos = $('.conteudo-topo .superior .acoes-conta').children("li").html();
   $('.conteudo-topo .inferior .span4').prepend('<div class="meuspedidos">'+btnMeusPedidos+'</div>');
   $('.conteudo-topo .superior .acoes-conta').remove();
   //Campo Atacado
   var atacado = '<div class="meuspedidos"> <i class="icon-atacado fundo-principal"></i><a href="#" class="cor-secundaria">Atacado</a></div>';
   $('.conteudo-topo .superior .span4').prepend(atacado);

   //Altera os txts do rodapé
   $('#rodape .links-rodape-categorias .titulo').html('PRODUTOS');
   $('#rodape .links-rodape-paginas .titulo').html('INSTITUCIONAL');
   $('#rodape .row-fluid .span9 .links-rodape').removeClass('span4').addClass('span3');
   
   var acessoRapido ='<div class="links-rodape span3"><span class="titulo">ACESSO RAPIDO</span><ul><li><a href="/conta/index">Minha Conta</a></li><li><a href="/conta/pedido/listar">Meus Pedidos</a></li><li><a href="/atacado">Atacado</a></li></ul></div>';
   $('#rodape .row-fluid .span9 .row-fluid').append(acessoRapido);
   var contatoRodape = $('#rodape .row-fluid .span9 .span12').html();
   $('#rodape .row-fluid .span9 .row-fluid').append('<div class="links-rodape links-rodape-contato span3"> '+contatoRodape+'</div>');
   $('#rodape .links-rodape-contato .titulo').html('FALE CONOSCO');
   $('#rodape .row-fluid .span9 .span12').remove();
   
   $('#rodape .links-rodape-contato ').append('<div class="redesRodape"><span class="titulo">SIGA A ETNIA</span>'+redesTopo+'</div>');
   var sobreRodape = '<div class="sobreRodape"><img src="https://cdn.awsli.com.br/420/420509/arquivos/logorodape2.png" alt="Texto alternativo para a imagem."><p>A Etnia Store é nascida da paixão por todas as cores, formas e texturas presentes ao redor do mundo e da observação de um fator em comum: o uso de adornos. </p><p>De modeo singular, cada grupo possui razão e material específicos para a confecção das peças, o que nos inspira a trazer para o dia a dia, um pouco da cultura traduzida em acessórios.</p></div>'
   $('#rodape .row-fluid .span3').has('.redes-sociais').html(sobreRodape);
   
   //Altera o e formata txt do menu lateral
   $('.secao-principal .menu.lateral').has('li.ativo').addClass('outras');
   $('.secao-principal .coluna').prepend('<span class="title">Categorias</span>');
   
   //Altera o txt do desconto
   var offOld = $('.bandeira-promocao').html();
   $('.bandeira-promocao').html('');
   var off = offOld.replace("Desconto", "OFF");
   $('.bandeira-promocao').text(off);
   //Altera o txt do Indisponivel
   //
   var indisponivelOld = $('.bandeira-indisponivel').html();
   $('.bandeira-indisponivel').html('');
   var indisponivel = indisponivelOld.replace("indisponível", "ESGOTADO");
   $('.bandeira-indisponivel').text(indisponivel);
});
