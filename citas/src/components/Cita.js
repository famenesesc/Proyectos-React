import React from 'react';

const Cita = ({ cita, eliminarCita }) => (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>

            <button
                className="button eliminar u-full-width"
                //Si se pone solo eliminarCita(), lo que hace es llamar la funcion
                //Se pone como arrow para que espere a que suceda el onclick
                onClick={ () => eliminarCita(cita.id) }
            >Eliminar &times;</button>
        </div>
    )

export default Cita;