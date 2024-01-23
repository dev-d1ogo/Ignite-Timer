import { createContext, useContext, useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import { defaultTheme } from "../styles/themes";

// Criando o modelo de como sera o tema

export interface ThemeContextType {
    theme : DefaultTheme;
    setTheme :  React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

// Criando o contexto
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ContextProps {
    children: React.ReactNode;
}

// Criando o provedor do tema

export const ThemeContextProvider = ({children}: ContextProps ) => {

    // Deixando o tema do localStorage
    
    const [theme, setTheme] = useState(()=> {
        const storedAsJSON = localStorage.getItem('theme')

        if(storedAsJSON){
            return JSON.parse(storedAsJSON)
        }

        return defaultTheme
    })

    useEffect(()=>{
        const themeStatesJSON = JSON.stringify(theme)

        // Obs: Boas praticas => Quando for salvar um item no local storage coloque @nomeDaAplicacao: ITEM_A_SER_SALVO
        localStorage.setItem('theme', themeStatesJSON)

    },[theme])
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () =>{
    const theme = useContext(ThemeContext)
    if (!theme) {
        throw new Error('Tema nao foi provido');
    }
     return theme
}