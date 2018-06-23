var arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9 , 10];
var sum = 0;

arr.forEach(function(item, index, array){// item, index e o proprio array
    sum += item;
});
console.log(sum);

