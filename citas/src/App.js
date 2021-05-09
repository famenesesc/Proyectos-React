import React, { Fragment } from 'react';
import Formulario from './components/Formulario';


function App() {
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      {/* Estas definiciones de nombres de clase se hacen para el framework css skeleton 
        que se pusieron en las etiquetas link del archivo index.html de la carpeta public*/}
      <div className="container">
        <div className="row">
          <div className="one-half column">
            {/* Este es mi componente Formulario */}
            <Formulario />
          </div>
          <div className="one-half column">Segundo Div</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
