import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const Total = styled.p`
    color: #00838F;
    text-transform: uppercase;
    padding: 1rem;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ( { cotizacion } ) => {

    return ( 
        ( cotizacion === 0 ) ? <Mensaje>Select brand, year and plan</Mensaje>
        : 
              (
                <ResultadoCotizacion>
                    <TransitionGroup
                        component="span"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={ cotizacion }
                            timeout={{ enter:500, exit:500 }}
                        >
                            <Total>Total: <span> $ {cotizacion} </span> </Total>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
              
              )
        );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado;