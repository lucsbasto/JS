function swapCase(string){
    return string.replace(/(\w)/g, function(express, a, c){
        console.log("Arguments: ", arguments);
        if(a === a.toLowerCase()){return a.toUpperCase();}
        else{return a.toLowerCase();}
        // (c%2 == 0) ? nome += a.toUpperCase() : nome += a.toLowerCase(); //RETORNAR StRiNg
        // return nome;
    });
}

console.log(swapCase("LucAs AlvES dE BasTOS"));
