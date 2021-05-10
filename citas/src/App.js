import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  //Se manejaran multiples citas, por eso un arreglo el cual inicia vacío
  const [ citas, guardarCitas ] = useState([]);

  //Función que tome las citas actuales y agrege la nueva
  const crearCita = (cita) => {
    guardarCitas([ ...citas, cita]);
  }
  
  //Se crea esta función aqui, porque es donde están todas las citas, 
  //por lo tanto es mas facil elminarlo desde aqui
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter( cita => cita.id !== id );
    guardarCitas(nuevasCitas)
  }  

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
            <h2>Administra tus citas</h2>
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
