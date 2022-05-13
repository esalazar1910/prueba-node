const fs = require('fs');
const { arch } = require('os');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function(){
        let tareas = fs.readFileSync('tareas.json', 'utf-8');
        return JSON.parse(tareas);
    },
    escribirJSON: function(array){
        let nuevaData = JSON.stringify(array)
        fs.writeFileSync('tareas.json', nuevaData)
    },
    guardarTarea: function(objeto){
        let nuevaTarea = this.leerArchivo();
        nuevaTarea.push(objeto);
        this.escribirJSON(nuevaTarea);
    },
    filtrarPorEstado: function(estado){
        let nuevaTarea = this.leerArchivo();
        let arrayFiltrado = nuevaTarea.filter(function(element, index){
            return nuevaTarea[index].estado == estado;
        })
        return arrayFiltrado
    }
    

}

module.exports = archivoTareas;