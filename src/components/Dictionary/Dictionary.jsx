import React from 'react';
import { useEffect, useState } from 'react';
import { purple } from '@mui/material/colors';
import { Container, Switch } from '@mui/material';
import { styled } from '@mui/system';
import { Header } from './components/Header/Header';
import { Definitions } from './components/Definitions/Definitions';
import axios from 'axios';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [category, setCategory] = useState('en');
  const [meanings, setMeanings] = useState([]);
  const [lightMode, setLightMode] = useState(false);

  const PurpleSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase': {
      color: purple[300],
      '&.Mui-checked': {
        color: purple[500],
      },
      '&.Mui-checked + .MuiSwitch-track': {
        backgroundColor: purple[500],
      },
    },
  }));

  const dictionaryAPI = async() => {

    try {
      
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);

      setMeanings(data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryAPI();
  }, [word,category])

  return (
    <div 
      className="App"
      style={{ position: "relative", 
              height: "80vh", 
              backgroundColor: lightMode ? "#FFF" : "#282C34", 
              color: lightMode ? "black" : "white",
              transition: "all 0.7s linear"
            }}
    >
      <Container
        children=''
        maxWidth="md"
        style = {{ display: "flex", flexDirection: "column", height: "70vh", justifyContent: "space-evenly" }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{ lightMode ? "Dark": "Light"} Mode</span>
          <PurpleSwitch 
            checked={lightMode}
            onChange={ () => setLightMode(!lightMode)}
          />
        </div>
        <Header
            category={ category }
            setCategory={ setCategory }
            word = { word }
            setWord = { setWord }
            lightMode = { lightMode }
         />

        { 
                  meanings && (<Definitions
                        word = { word }
                        meanings = { meanings }
                        category = { category }
                        lightMode = { lightMode }
                      />)
        }

      </Container>
      
    </div>
  )
}

export default Dictionary