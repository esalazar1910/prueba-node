const archivo = require('./funcionesDeTareas');

let arrayTareasN = archivo.leerArchivo();

let accion = process.argv[2];

switch (accion) {
    case "listar":
        console.log();
        console.log('-=Lista de Tareas=-');
        console.log();
        arrayTareasN.forEach(function(element, index){
            console.log((index + 1) + '.', element.titulo, '-', element.estado);
        })
        break;

    case undefined:
        console.log('---------------------------------------');
        console.log("Atención - Tienes que pasar una acción.");
        console.log('Las acciones disponibles son: "listar"');
        console.log('---------------------------------------');
        break;

    case 'crear:':
        let nuevaTarea = {
            titulo: process.argv[3],
            estado: 'Pendiente'
        }
        archivo.guardarTarea(nuevaTarea);
    break;

    case 'filtrar:':
        let filtro = process.argv[3];
        let arrayTareas = archivo.filtrarPorEstado(filtro);
        console.log()
        console.log('-=Tus tareas en estado', filtro, 'son =-')
        console.log()
        arrayTareas.forEach(function(element, index){
            console.log((index + 1) + '.', element.titulo, '-', element.estado);
        })
    break;

    default: 
        console.log('---------------------------------------')
        console.log("No entiendo que quieres hacer.");
        console.log('Las acciones disponibles son: "listar"');
        console.log('---------------------------------------')
        break;
}

