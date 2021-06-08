import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { calcularMarca, obtenerDiferenciaAnio, obtenerPlan } from '../helpers';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;/*Esto quita la apariencia natural del select para que tome las que le mandamos desde aqui*/ 
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-top: 2rem;
    padding: 1rem;
    text-transform: uppercase;
    width: 100%;
    /*  Esto a continuación es algo de SASS*/
    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
`;

const Formulario = ({ guardarResumen, guardarCargando }) => {

    const [datos, setDatos] = useState({
        marca: '',
        anio: '',
        plan: ''
    });

    const [error, setError] = useState(false);

    //Extraer los valores del state
    const { marca, anio, plan } = datos;

    //Leer los datos del formulario y colocarlos en el State
    const obtenerInformacion = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    //Evento cuando el usuario envia submit desde el botón del formulario
    const cotizarSeguro = e => {
        e.preventDefault();

        if ( marca.trim()==='' || anio.trim()==='' || plan.trim()==='' ){
            setError(true);
            return;
        }
        setError(false);

        //Valor base
        let resultado = 2000;

        //Obtener la diferencia de años
        const diferencia = obtenerDiferenciaAnio(anio);

        //Por cada año se debe restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;

        //Americano: Incremento del 15%
        //Asiatico: Incremento del 5%
        //Europeo: Incremento del 30% 
        resultado = resultado * calcularMarca( marca )

        //Básico aumenta 20%
        //Completo aumenta 20%
        const incrementoPlan = obtenerPlan( plan )

        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
        
        guardarCargando(true);

        setTimeout(() => {

            //Eliminar el spinner
            guardarCargando(false);
            
            //Pasar la información al componente princial
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 3000);
    };
     
    return ( 
        
        <form
            onSubmit={ cotizarSeguro }
        >

           { error ? <Error>Todos los campos son obligatorios</Error> : null }

            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={ marca }
                    onChange={ obtenerInformacion }
                >
                    <option value="">--Seleccione--</option>
                    <option id="eu" value="eu">Europeo</option>
                    <option id="am" value="am">Americano</option>
                    <option id="as" value="as">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name="anio"
                    value={ anio }
                    onChange={ obtenerInformacion }
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={ plan === "basico" }
                    onChange={ obtenerInformacion }
                /> Básico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={ plan === "completo" }
                    onChange={ obtenerInformacion }
                /> Completo
            </Campo>

            <Boton type="submit" >Cotizar</Boton>
        </form>
     );
}

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}
 
export default Formulario;