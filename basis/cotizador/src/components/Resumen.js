import React from 'react';
import styled from '@emotion/styled';
import { primeraMayuscula } from '../helpers';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
    
    const { marca, anio, plan } = datos;

    const optionMarca = document.getElementById(marca);

    const textoMarca = optionMarca ? optionMarca.innerText : '';

    if ( marca === '' || anio === '' || plan === '' ) return null;

    return ( 
        <ContenedorResumen>
        <h2>Resumen de Cotización</h2> 
        <ul>
            <li>Marca: { textoMarca } </li>
            <li>Plan: { primeraMayuscula(plan) } </li>
            <li>Año del auto: { anio } </li>
        </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;