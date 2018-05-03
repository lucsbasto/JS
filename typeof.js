function sum(num, num2){
    if(typeof(num) === 'number' && typeof(num2) === 'number'){ // somente para valores primitivos
        return num + num2;
    }
    else{
        return "Informe dois numeros !";
    }

};

console.log(sum('1', 9));
//!!variavel mostra o valor booleano da variavel