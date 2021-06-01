import React, { useState } from 'react';
import { Error } from './Error';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({ agregarNuevoGasto }) => {

    const [nombreGasto, setNombreGasto] = useState('');//Puede ser un objeto como en citas
    const [cantidadGasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = (e) => {
        e.preventDefault();

        //Validar
        if ( cantidadGasto<1 || isNaN(cantidadGasto) || nombreGasto.trim() === '' ){
            setError(true);
            return;
        }
        setError(false);

        //Construir gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: uuidv4()
        }

        //Pasar el gasto al componente principal; para eso se pasa la referencia de la funcion que 
        //cambia el state de gasto allá en el principal, y aqui se usa la función para cambiar el state como tal
        agregarNuevoGasto(gasto);

        //Limpiar formulario
        setNombreGasto('');
        setCantidadGasto(0);

    }    

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gatos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o valor de gasto incorrecto" /> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    className="u-full-width"
                    onChange={ e => setNombreGasto(e.target.value) }
                    placeholder="Ej. Transporte"
                    type="text"
                    value={ nombreGasto }
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    className="u-full-width"
                    onChange={ e => setCantidadGasto(parseInt(e.target.value, 10)) }
                    placeholder="Ej. 300"
                    type="number"
                    value={ cantidadGasto }
                />
            </div>
            <input
                    className="button-primary u-full-width"
                    type="submit"
                    value="Agregar Gasto"
                />

        </form>
     );
}

Formulario.propTypes = {
    agregarNuevoGasto: PropTypes.func.isRequired
}


export default Formulario;