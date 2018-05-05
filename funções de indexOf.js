var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//o primeiro parametro é o que o indexOf vai buscar e o segundo parametro que é opcional é a posição inicial da busca
console.log(arr.indexOf(5, 3));

//mesma coisa do indexOf mas começa procurar do final do array
console.log(arr.lastIndexOf(5));

//verifica se é um array, typeOf retorna que o array é um objeto
console.log(Array.isArray(arr));
