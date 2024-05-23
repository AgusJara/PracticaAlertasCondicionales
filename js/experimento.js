let mensaje = prompt ('Ingrese su nombre');
let nombre = mensaje;

console.log (nombre);

let edadU = prompt ('Indicanos tu edad');
let edad = edadU;

console.log (edad);

let deportes = confirm ('Te gustan los deportes?');
let fanDeportes = deportes;

console.log (fanDeportes);

let mensajeFinal = alert ('Muchas gracias ' + nombre + ' por responder nuestras preguntas')

let usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
    deportistaProfesional: function(){
        if(fanDeportes ==true){
            return 'Si soy fan de los deportes';
        } else{
            return 'No soy tan fan aun de los deportes';
        }
    }   
}
    console.log (usuario.deportistaProfesional());

