import React from 'react'
import {ThemeProvider} from "./ThemeProvider"
import ThemeConsumer from "./ThemeConsumer" ; 
function Container() {
    
    return (
        <ThemeProvider>
            <ThemeConsumer></ThemeConsumer>
        </ThemeProvider>
    )
}

export default Container
