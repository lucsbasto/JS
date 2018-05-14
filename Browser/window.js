(function(win, doc){
    'use strict';
    //querySelector e querySelectorAll são estáticos
    var $input = doc.querySelectorAll('.input') ; //boa pratica iniciar variáveis do doc com $
    var $button = doc.querySelector('#button'); //chama o atributo como no css

    console.log(`Usando o querySelectorAll() ele pega todos os que tiver o atributo, no caso a classe input ${$input}`);
    console.log(`Usando o querySelector() ele pega somente a primeira aparição do atributo, no caso o id ${button}`);

})(window, document);
