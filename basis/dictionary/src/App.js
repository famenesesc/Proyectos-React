import axios from 'axios';
import { useEffect, useState } from 'react';
import { purple } from '@material-ui/core/colors';
import { Container, Switch, withStyles } from '@material-ui/core';
import { Header } from './components/Header/Header';
import { Definitions } from './components/Definitions/Definitions';

import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [category, setCategory] = useState('en');
  const [meanings, setMeanings] = useState([]);
  const [lightMode, setLightMode] = useState(false);

  const PurpleSwitch = withStyles({
    switchBase: {
      color: purple[300],
      '&$checked': {
        color: purple[500],
      },
      '&$checked + $track': {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  

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
      style={{ 
              height: "100vh", 
              backgroundColor: lightMode ? "#FFF" : "#282C34", 
              color: lightMode ? "black" : "white",
              transition: "all 0.7s linear"
            }}
    >
      <Container
        children=''
        maxWidth="md"
        style = {{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-evenly" }}
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

        { meanings && (<Definitions
                        word = { word }
                        meanings = { meanings }
                        category = { category }
                        lightMode = { lightMode }
                      />)
        }

      </Container>
    </div>
  );
}

export default App;
