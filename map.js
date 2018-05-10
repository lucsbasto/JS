var arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9 , 10];

var map = arr.map(function(item, index, array){ //percorre o array e faz uma operação e retorna um novo array
    return {index: index, item: item};
});
console.log(map);