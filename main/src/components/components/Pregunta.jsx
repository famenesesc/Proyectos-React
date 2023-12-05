import React, { Fragment, useState } from 'react';
import { Error } from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ setPresupuesto, setRestante, actualizarPregunta }) => {
    
    //Definir state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //Función que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value,10));
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        //Si se pasa la validación
        setError(false);

        //Se asignan los valores de los state presupuesto y restante que están en App
        setPresupuesto(cantidad);
        setRestante(cantidad);

        //Oculta o no el componente de pregunta
        actualizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es Incorrecto" /> : null }

            <form
                onSubmit={ agregarPresupuesto }
            >
                <input
                    className="u-full_width"
                    onChange={ definirPresupuesto }
                    placeholder="Coloca tu presupuesto"
                    type="number"
                />

                <input 
                    className="button-primary u-full-width"
                    type="submit"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired, 
    setRestante: PropTypes.func.isRequired, 
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;