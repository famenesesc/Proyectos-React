import React, { useState,useEffect } from 'react'
import { Phrase } from './components/Phrase';
import styled from 'styled-components';
import './BreakingBad.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 800px) {
    align-items: center;
    }
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, green 0%, #007d35 40%, #0f574e 100%);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  transition: .5s ease;

  &:hover {
    cursor: pointer;
    border-color: white;
    background-size: 10%;
    transform: scale(1.1);
    border-radius: 15px;
  }
`;

function BreakingBad() {

  //State de frases
  const [phrase, setPhrase] = useState({});
/*
  const consultarAPI = () => {
    const resultado = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = resultado.then( respuesta => respuesta.json());
    frase.then( miFrase => console.log( miFrase ))
  } 
*/
  const fetchAPI = async () => {
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const phrase = await api.json();
 //   console.log(phrase);
    setPhrase( phrase[0] );
  } 

  useEffect(() => {
    fetchAPI();
  }, [])

  return (
    <div className='container-bb'>
      <Container>
        <Phrase phrase={phrase} />
        <Button onClick={fetchAPI} >Get Phrase</Button>
      </Container>
    </div>
  );
}

export default BreakingBad;
