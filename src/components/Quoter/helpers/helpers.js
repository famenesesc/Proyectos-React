//Obtiene la diferencia de años
export function getDiffYear( year ){

    return new Date().getFullYear() - year;
}

//Calcular el total a pagar según la marca
export function calculateBrand( brand ){

    let Increment;

    switch(brand){
        case 'eu':
            Increment = 1.30
            break;
        case 'am':
            Increment = 1.15
            break;
        case 'as':
            Increment = 1.05
            break;
        default:
            break;
    }    
    
    return Increment;
}

//Calcula el tipo de seguro
export function getPlan( plan ){

    return ( plan === 'basic' ? 1.20 : 1.50 );
}

//Muestra la primer letra en mayuscula
export function firstCapitalize( texto ) {

    return texto.charAt(0).toUpperCase() + texto.slice(1);
}