var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var some = arr.some(function(item){
    return item % 2 === 0;
});
//ao contrario do severy se pelo menos 1 item for true ele retorna true
//vai percorrer o array até achar pelo menos um item que faz a condição ser verdadeira
console.log(some);