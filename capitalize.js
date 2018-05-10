function capitalize(string){
    var arr = string.split(" ");
    var frase = '';
    for(var s in arr){
        frase += arr[s].charAt(0).toUpperCase() + arr[s].slice(1).toLowerCase() + " ";
    }
    return frase;
};


function capitalize_(s){
    //  /b[a-z]/ pega a primeira letra de a-z da palavra    o parametro 'a' já é o achado pela expressão regular
    return s.toLowerCase().replace(/\b[a-z]/g, function(a){ return a.toUpperCase(); });
};


console.log (capitalize('this IS THE wOrst string eVeR'));
console.log (capitalize_('this IS THE wOrst string eVeR'));































