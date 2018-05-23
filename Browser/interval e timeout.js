(function(win, doc){
    var counter = 0;
    function time(){
        console.log(`counter ${counter++}`);
        if(counter > 10){
            return;
        }
        setTimeout(time(), 1000);
    }

    function time(){
        console.log(`counter ${counter++}`);
        if(counter > 10){
            return;
        }
    }
    //setInterval(time, 1000);
})(window, document);

//setInterval recursivo é melhor que setInterval pq setInterval vai colocando o processo na fila a cada vez
//e o setTimeOut só coloca na fila quando o processo acaba e é chamado novamente