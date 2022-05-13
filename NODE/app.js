let eleazar = require('./eleazar_salazar');
let nicolas = require('./nicolas_zinnerman');
let puppys = require('./puppys');

function saludo(a){
    console.log("Hola, mi nombre es", a[0], "me gusta mucho", a[1], "y vivo en", a[2])
}

saludo(eleazar);
saludo(nicolas);
saludo(puppys);