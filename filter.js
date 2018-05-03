var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//usando o filter direto no retorno do map
var map = arr.map(function(item){
    return item * 5;
}).filter(function(item){
    return item > 25;
});

console.log(map)

// var filter = arr.filter(function(item, index, array){ //retorna um array filtrando pela condição informada
//     return item % 2 == 1;
// });
// console.log(filter);