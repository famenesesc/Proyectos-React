import React, { Fragment, useState } from 'react';
//import uuid from 'uuid';
const {v4 : uuidv4} = require('uuid')

const Formulario = ({ crearCita }) => {

    //State para el manejo de citas, así inicia el proyecto. Ligado a cada uno de los campos del formulario
    const [ cita, actualizarCita ] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    //Segundo state para el manejo de mensajes de error
    const [ error, actualizarError ] = useState(false)

    //Funcion que se ejecuta cuando el usuario escribe en un input
    //Si es un solo parametro no necesita los parentesis
    const actualizarState = evento => {
        //Aqui se debe modificar la cita, que es la "cosa" que se declara en la linea 6
        //console.log(evento.target.name)
        //console.log([evento.target.name],evento.target.value)
        actualizarCita({
            ...cita,//Toma una copia y con la siguiente linea se reescribe solo el elemento que se pasa
            //Aqui se usará array destructuring, para que la asignación sea dinamica
            //"mascota":"Lo que se escriba en el input mascota"
            [evento.target.name]:evento.target.value
        })
    }

    //Extraer los valores, destructuring, para poder usar los elementos individualmente
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario presiona el botón Agregar Cita o envía el formulario
    const submitCita = (eventoBoton) => {
        //Por defecto se envian los datos por la URL
        //Entonces se pone esto para que no lo haga
        eventoBoton.preventDefault();

        //Validar
        if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()===''){
            //console.log('Todos los campos deben ser diligenciados');
            actualizarError(true)
            //Este return hace que se salga y no siga ejecutando codigo
            return;
        }

        //Eliminar el mensaje previo
        actualizarError(false)

        //Asignar un ID
        cita.id = uuidv4();

        //Crear la cita, colocarla en el statePrincipal
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className='alerta-error'>Todos los campos son obligatorios.</p> : null }
            <form
                onSubmit={submitCita}
            >
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