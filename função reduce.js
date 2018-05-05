var arr = ['L', 'U', 'C', 'A', 'S'];

var reduce = arr.reduce(function(acumulado, atual, index, array){ //reduz o array, junta tudo, também funciona com strings
    return acumulado + atual; // função de soma básica percorrendo o array mas poderia passar outra função
});//se não passar esse 0 o acumulado vira o primeiro item do array e o atual vira o segundo item

console.log(reduce);

var reduceRight = arr.reduceRight(function(acumulado, atual, index, array){
    return acumulado + atual; //faz a mesma coisa que o reduce só que da direita pra esquerda
});
console.log("");
console.log("");
console.log(reduceRight);