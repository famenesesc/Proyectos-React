import React from 'react'
import styled from 'styled-components';

const ContenedorFrase = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    
    @media (min-width: 992px) {
        margin-top: 3rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        font-size: 1rem;
        &::before {
            content: open-quote;
            font-size: 6rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        font-weight:italic;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

export const Frase = ({frase}) => {

    //Esta es una forma de validar si un objeto tiene información dentro
    //Se usa para no mostrar el ContenedorFrase en la primera carga donde no hay frase
    //if(Object.keys(frase).length === 0) return null;

    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p> - {frase.author}</p>
        </ContenedorFrase>
    )
}
