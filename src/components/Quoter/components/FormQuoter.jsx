import React, { useState } from 'react';
import styled from 'styled-components';
import { calculateBrand, getDiffYear, getPlan } from '../helpers/helpers';

const Field = styled.div`
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
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-top: 2rem;
    text-transform: uppercase;
    width: 100%;
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

const FormQuoter = ({ saveSummary, saveLoading }) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);

    //Extraer los valores del state
    const { brand, year, plan } = data;

    //Leer los datos del formulario y colocarlos en el State
    const getData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    //Evento cuando el usuario envia submit desde el botón del formulario
    const quoteInsurance = e => {
        e.preventDefault();

        if ( brand.trim()==='' || year.trim()==='' || plan.trim()==='' ){
            setError(true);
            return;
        }
        setError(false);

        //Valor base
        let result = 2000;

        //Obtener la diferencia de años
        const diff = getDiffYear(year);

        //Por cada año se debe restar el 3%
        result -= ((diff * 3) * result) / 100;

        //Americano: Incremento del 15%
        //Asiatico: Incremento del 5%
        //Europeo: Incremento del 30% 
        result = result * calculateBrand( brand )

        //Básico aumenta 20%
        //Completo aumenta 20%
        const incrementPlan = getPlan( plan )

        result = parseFloat(incrementPlan * result).toFixed(2);
        
        saveLoading(true);

        setTimeout(() => {

            //Eliminar el spinner
            saveLoading(false);
            
            //Pasar la información al componente princial
            saveSummary({
                price: Number(result),
                data
            });
        }, 3000);
    };
     
    return ( 
        
        <form
            onSubmit={ quoteInsurance }
        >

           { error ? <Error>All fields are mandatory.</Error> : null }

            <Field>
                <Label>Brand</Label>
                <Select
                    name="brand"
                    value={ brand }
                    onChange={ getData }
                >
                    <option value="">--Select--</option>
                    <option id="eu" value="eu">European</option>
                    <option id="am" value="am">American</option>
                    <option id="as" value="as">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={ year }
                    onChange={ getData }
                >
                    <option value="">-- Select --</option>
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
            </Field>

            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={ plan === "basic" }
                    onChange={ getData }
                /> Basic

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="full"
                    checked={ plan === "full" }
                    onChange={ getData }
                /> Full
            </Field>

            <Button type="submit" >Submit</Button>
        </form>
     );
}
 
export default FormQuoter;