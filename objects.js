obj1 = {
    prop1:"propriedade 1",
    prop2:"propriedade 2",

};
obj2 = obj1; // atribuição por referencia
obj3 = Object.create(obj2); // herança
for(var prop in obj2){
    if(obj2.hasOwnProperty(prop)){//se a propriedade é do objeto
        console.log(`${prop} é uma propriedade do obj2`)
    }
}

for(var prop in obj3){
    if(obj3.hasOwnProperty(prop)){
        console.log (`${prop} é uma propriedade do obj3`)
    }
}

var arr = Object.keys(obj1); //Objects.keys(obj) é um array das propriedades do objeto

var boolean = obj1.isPrototypeOf(obj3); //retorna true caso o obj1 seja prototipo do obj3 se o obj3 herdou do obj1

var json = JSON.stringify(obj1);