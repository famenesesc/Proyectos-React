import React, { Fragment, useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Citas en localStorage, si no hay nada lo inicializa como un arreglo vacío
  //Como local solo maneja strings, se debe convertir el arreglo en un string tipo JSON
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));//Parse convierte una cadena tipo JSON en un objeto JS
  if ( !citasIniciales ) {
    citasIniciales = [];//Si no hay nada en localStorage le pasa un arreglo vacío que es el inicio del State de citas
  }

//**************DECLARACION DE STATES******************* */
  //Se manejaran multiples citas, por eso el state inicia como un arreglo vacío o lo que esté en localStorage
  const [ citas, guardarCitas ] = useState(citasIniciales);

  //Se usa para hacer algo cuando se termina de renderizar la pagina o en este caso 
  //cada vez que cambie el state de Citas. Al actualizar o eliminar el state de citas
  //Ese segundo parametro que será citas se conoce como dependencias
  useEffect(() => {
    //let citasIniciales = JSON.parse(localStorage.getItem('citas'));//Parse convierte una cadena tipo JSON en un objeto JS

    if ( citasIniciales ) {
      localStorage.setItem('citas', JSON.stringify(citas))//Stringify convierte un objeto en una cadena tipo JSON
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas,citasIniciales])//Se pasa porque es una dependencia para que no lance warning, o tambien se puede declarar el en scope de useEffect(Ln 22)

//***********************METODOS*********************** */
  //Se crea esta función aqui, porque es donde están todas las citas, 
  //por lo tanto es mas facil elminarlo desde aqui
  //Función que tome las citas actuales y agrege la nueva
  const crearCita = (cita) => {
    guardarCitas([ ...citas, cita]);
  }

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter( cita => cita.id !== id );
    guardarCitas(nuevasCitas)
  } 

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tu citas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      {/* Estas definiciones de nombres de clase se hacen para el framework css skeleton 
        que se pusieron en las etiquetas link del archivo index.html de la carpeta public*/}
      <div className="container">
        <div className="row">
          <div className="one-half column">
            
            {/* Este es mi componente Formulario para crear cada cita */}
            <Formulario
              crearCita={crearCita}
            />

          </div>
          <div className="one-half column">
            
            {/* Este es mi componente cita, donde van las citas que he creado */}
            <h2>{ titulo }</h2>
            { citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            )) }
            
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
