//Obtiene la diferencia de años
export function obtenerDiferenciaAnio( anio ){

    return new Date().getFullYear() - anio;
}

//Calcular el total a pagar según la marca
export function calcularMarca( marca ){

    let Incremento;

    switch(marca){
        case 'eu':
            Incremento = 1.30
            break;
        case 'am':
            Incremento = 1.15
            break;
        case 'as':
            Incremento = 1.05
            break;
        default:
            break;
    }    
    
    return Incremento;
}

//Calcula el tipo de seguro
export function obtenerPlan( plan ){

    return ( plan === 'basico' ? 1.20 : 1.50 );
}

//Muestra la primer letra en mayuscula
export function primeraMayuscula( texto ) {

    return texto.charAt(0).toUpperCase() + texto.slice(1);
}