import { useState } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";
import './Presupuesto.css';

function Presupuesto() {
  //Almacena el valor del presupuesto inicial ingresado en el componente Pregunta
  const [presupuesto, setPresupuesto] = useState(0);
  
  const [restante, setRestante] = useState(0);

  //Define si se muestra o no el componente de Pregunta: Carga condicional de un componente
  const [mostrarPregunta, setMostrarPregunta] = useState(true);

  //Listado de todos los gastos
  const [gastos, setGastos] = useState([]);

  //Cuando agreguemos un nuevo gasto, se pasa esta funcion al componente Formulario, para que allá se agregen los gastos
  const agregarNuevoGasto = (gasto) => {
    setGastos([...gastos, gasto]);
    setRestante(restante - gasto.cantidadGasto)
  }
  
  return (
    <div className="container">
      
      <header>
        <h1>Gasto Semanal</h1>
      </header>
        <div className="contenido-principal cotenido">
          {
            mostrarPregunta ? 
            (
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                actualizarPregunta = { setMostrarPregunta }
              />
            ) : (
              <div className="row">
                <div className="one-half column"> 
                  <Formulario 
                    agregarNuevoGasto = { agregarNuevoGasto }
                  /> 
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos = { gastos }
                  />

                  <ControlPresupuesto
                      presupuesto = {presupuesto}
                      restante = { restante }
                  />

                </div>
              </div>
            )
          }
         
        </div>

      

    </div>
  );
}

export default Presupuesto;
