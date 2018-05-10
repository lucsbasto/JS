function capitalize(string){
    var arr = string.split(" ");
    var frase = '';
    for(var s in arr){
        frase += arr[s].charAt(0).toUpperCase() + arr[s].slice(1).toLowerCase() + " ";
    }
    return frase;
};


capitalize('this IS THE wOrst string eVeR');