let fs = require('fs');


let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf8');

console.log(datos);