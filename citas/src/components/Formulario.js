import React, { Fragment, useState } from 'react';

const Formulario = () => {

    //State para citas, así inicia el proyecto
    const [ cita, actualizarCita ] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    //Funcion que se ejecuta cuando el usuario escribe en un inpt
    const actualizarState = evento => {
        //Aqui se debe modificar la cita, que es la "cosa" que se declara en ela linea 6
        //console.log(evento.target.name)
        //console.log([evento.target.name],evento.target.value)
        actualizarCita({
            ...cita,//Toma una copia y con la siguiente linea se reescribe solo el elemento que se pasa
            //Aqui se usará array destructuring, para que la asignación sea dinamica
            [evento.target.name]:evento.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                    >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;