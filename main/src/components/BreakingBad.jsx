import React, { useState,useEffect } from 'react'
import { Frase } from '../helpers/Frase';
import styled from 'styled-components';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, green 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  &:hover {
    cursor: pointer;
    background-size: 800px;
    border-color: white;
  }
`;

function BreakingBad() {

  //State de frases
  const [frase, setFrase] = useState({});
/*
  const consultarAPI = () => {
    const resultado = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = resultado.then( respuesta => respuesta.json());
    frase.then( miFrase => console.log( miFrase ))
  } 
*/
  const consultarAPI = async () => {
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const frase = await api.json();
    //console.log( frase[0] )
    setFrase( frase[0] );
  } 

  useEffect(() => {
    consultarAPI();
  }, [])

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >Obtener Frase</Boton>
    </Contenedor>
  );
}

export default BreakingBad;
