import React from 'react';
import {useThemeContext , useThemeContextUpdater} from "./ThemeProvider" ; 
function ThemeConsumer() {
    const dark  = useThemeContext() ; 
    const toggleTheme  = useThemeContextUpdater() ; 
    const theme ={ 
        backgroundColor: dark  ? "#333" : "#eee"  , 
        color: dark  ? "#eee" : "#333"  , 

    }
    return (
        <div>
            <p style={theme}>
            useContext hook applied successfully 
            </p>
            <button onClick ={toggleTheme} >
            Toggle Theme
            </button>
        </div>
    )
}

export default ThemeConsumer
