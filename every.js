var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
var every = arr.every(function(item){
    return item > 5;
}); //usado pra fazer alguma verificação no array

console.log(every);