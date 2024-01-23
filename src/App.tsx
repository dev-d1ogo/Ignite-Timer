import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import {useThemeContext } from "./context/ThemeContext"
import { CycleContextProvider } from "./context/CyclesContext"




export function App() {
  const {theme} = useThemeContext()
  
  return (
    <ThemeProvider theme={theme}>
      
      <BrowserRouter>
          <CycleContextProvider>
            <Router/>
          </CycleContextProvider>
        </BrowserRouter>
       
      <GlobalStyle/>
    </ThemeProvider>
  )
}

