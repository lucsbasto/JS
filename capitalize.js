function capitalize(string){
    var arr = string.split(" ");
    var frase = '';
    for(var s in arr){
        frase += arr[s].charAt(0).toUpperCase() + arr[s].slice(1).toLowerCase() + " ";
    }
    return frase;
};


function capitalize_(s){
    return s.toLowerCase().replace(/\b[a-z]/g, function(a){return a.toUpperCase();}); //o parametro 'a' já é o achado pela expressão regular
};


console.log (capitalize('th-is IS THE wOrst string eVeR'));
console.log (capitalize_('th-is IS THE wOrst string eVeR'));






























