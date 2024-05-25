import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import FormQuoter from './components/FormQuoter';
import Spinner from './components/Spinner/Spinner'
import Summary from './components/Summary';
import Result from './components/Result';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const Quoter = () => {

  const [summary, setSummary] = useState({
    price: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [loading, setLoading] = useState(false);

  const { data, price } = summary;

  return (
    <Container>
      <Header title='Insurance Quoter' />
      <FormContainer>
        <FormQuoter
            saveSummary = { setSummary }
            saveLoading = { setLoading }
          />

          { loading ? <Spinner /> : null }

          <Summary datos = { data } />

          { !loading ? <Result cotizacion={price}
            />
          :
          null
        }

      </FormContainer>
    </Container>
  )
}

export default Quoter