(function(){
    var array = ['José', 'Maria', 'João', 'Paulo', 'Thiago']
    var str;
    str = array.splice(0, array.length-1).join(', ') + ' e '  + array[array.length-1] + ' são meus amigos !';
    console.log(str);
})();
