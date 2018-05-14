var regex = /<(\w+)>.+<\/(\1)>/;
var string = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";
var cpf = '111.222.333-44';

var cpf_list = cpf.split(/\D/);

console.log(cpf_list);


//console.log(string.match(regex));