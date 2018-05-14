(function(win, doc){
    'use strict';
    // var name = prompt('Qual o seu nome ?'); // mostra a mensagem e uma caixa de texto
    // alert(`Olá, ${name} !`);
    // var del = confirm("Deseja deletar ?"); // só mostra a mensagem e os botões de cancelar e ok
    // if (del){
    //     console.log('Deletado com sucesso !');
    // }
    // else{
    //     console.log('Ação cancelada !');
    // }

    console.log(doc.getElementById('link')); //quando for preciso pegar elementos a partir do id
    console.log(doc.getElementsByClassName('links')); // quando for preciso pegar elementos a partir da classe
    console.log(doc.getElementsByTagName('p'));


})(window, document);