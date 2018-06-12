(function(win, doc){
    'use strict';
    var $input = doc.querySelector('#input');
    var $pass = doc.querySelector("#password");
    var $button = doc.querySelector("#button");
    //addEventListener(evento, função callback, false);
    $button.addEventListener('submit', function(event){
        event.preventDefault();
        console.log($input.value, $pass.value);
    }, false);
})(window, document);
