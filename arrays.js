var arr = [1, 2, 3, 4];
console.log(arr.concat(5)); //cria e retorna um array temporario com o parametro adicionado sem modificar o array principal
arr.push(6);//adiciona o parametro no array principal

arr.unshift('x');//adiciona o parametro no começo do array
arr.shift();//remove e retorna o primeiro item;

//array.slice(inicio, final)
console.log(arr.slice(0, 3));//retorna do 1 ao 3 item do array sem modificar o array
//splice recorta o array e retorna o valor

