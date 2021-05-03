import React, { Fragment } from 'react';
import Formulario from './components/Formulario';


function App() {
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      {/* Estas definiciones de nombres de clase se hacen para el framework css skeleton */}
      <div className="container">
        <div className="row">
          <div className="one-half column"><Formulario /></div>
          <div className="one-half column">2</div>
        </div>
      </div>


    </Fragment>
  );
}

export default App;
