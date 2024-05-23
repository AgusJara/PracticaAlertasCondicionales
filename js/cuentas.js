let numero = prompt ('Ingrese un numero');
let numeroElegido = numero;

let numeroDos = prompt ('Ingrese otro numero');
let numeroDosElegido = numeroDos;

function multiplicar (numeroElegido, numeroDosElegido) {
    return 'El resultado de multiplicar ' + numeroElegido + ' y ' + numeroDosElegido + ' es: ' + numeroElegido * numeroDosElegido;
}

console.log (multiplicar(numeroElegido,numeroDosElegido));
