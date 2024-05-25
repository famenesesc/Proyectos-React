import React from 'react'
import styled from 'styled-components';

const PhraseContainer = styled.div`
    max-width: 50%;
    
    @media (min-width: 992px) {
        color: pink;
        margin-top: 3rem;
    }
    h2 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: right;
        position: relative;
        color: white;
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
        color: #a3a3a3;
    }
`;

export const Phrase = ({ phrase }) => {

    //Esta es una forma de validar si un objeto tiene información dentro
    //Se usa para no mostrar el ContenedorFrase en la primera carga donde no hay frase
    //if(Object.keys(frase).length === 0) return null;

    return (
        <PhraseContainer>
            <h2>{phrase.quote || "Lorem ipsum dolor, sit amet consectetur adipisicing elit." }</h2>
            <p> - {phrase.author}</p>
        </PhraseContainer>
    )
}
