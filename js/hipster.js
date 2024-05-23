let nacionalidad = prompt ('Ingrese su nacionalidad');
let profesion = prompt ('Cual es su profesion?');
let kilometrosCaminados = prompt ('Cuantos kilometros caminas por dia?');

function filosofoHipster(nacionalidad,profesion,kilometrosCaminados) { 
    if (nacionalidad === 'Argentina' && profesion === 'Musico' && kilometrosCaminados >= 2) {
        return 'Soy un filósofo hipster';
    } else{
        return 'Aún no soy filósofo hipster';
    }
}

console.log (filosofoHipster(nacionalidad, profesion, kilometrosCaminados));