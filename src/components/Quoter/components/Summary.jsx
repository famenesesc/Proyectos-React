import React from 'react';
import styled from 'styled-components';
import { firstCapitalize } from '../helpers/helpers';

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Summary = ({ datos }) => {
    
    const { brand, year, plan } = datos;

    const optionBrand = document.getElementById(brand);

    const textBrand = optionBrand ? optionBrand.innerText : '';

    if ( brand === '' || year === '' || plan === '' ) return null;

    return ( 
        <SummaryContainer>
        <h2>Quote Summary</h2> 
        <ul>
            <li>Brand: { textBrand } </li>
            <li>Plan: { firstCapitalize(plan) } </li>
            <li>Year: { year } </li>
        </ul>
        </SummaryContainer>
    );
}

export default Summary;