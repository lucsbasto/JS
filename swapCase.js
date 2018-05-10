function swapCase(string){
    return string.toLowerCase().replace(/(\w)/g, function(express, a, c){
        console.log(a, c);
        console.log(' ');
        var nome = '';
        (c%2 == 0) ? nome += a.toUpperCase() : nome += a.toLowerCase();
        return nome;
    });
}

console.log(swapCase("lucas"));