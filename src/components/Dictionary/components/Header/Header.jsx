import React from 'react';
import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material';
import categories from '../../data/categories';
import './Header.css';

export const Header = ({ category,setCategory,word,setWord, lightMode }) => {

    const darkTheme = createTheme({
        palette: {
            primary:{
                main:lightMode ? "#000" : "#FFF"
            },
            type: lightMode ? 'light' : 'dark',
        },
      });

      const handleChange = (language) =>{
        setCategory(language);
        setWord("");
      }

  return (
    <div className="header">
            <span className="title">{ word ? word : "Word Hunt" }</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        className="search"
                        label="Search a word"
                        value={ word }
                        onChange={ e => setWord(e.target.value) }
                    />
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={ category }
                        onChange={ e => handleChange(e.target.value) }
                    >
                        {
                            categories.map( (option) => (
                                <MenuItem key={ option.label } value={ option.label } > { option.value } </MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
  )
}