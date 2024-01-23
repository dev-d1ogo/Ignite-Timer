import logoIgnite from "../../assets/Ignite simbol.svg"
import { HeaderContainer } from "./styles"
import {Timer, Scroll, Sun, Moon} from "phosphor-react"
import { NavLink } from "react-router-dom"
import { useThemeContext } from "../../context/ThemeContext"
import { lightTheme, defaultTheme} from "../../styles/themes"




export const Header = () => {
    const {theme, setTheme} = useThemeContext();
    
    const toggleTheme = () =>{
        theme.title === "default" ? setTheme(lightTheme) : setTheme(defaultTheme)
    }

    return (
        <HeaderContainer>
            <div className="imgMenu">
                <img src={logoIgnite} alt="" />
                {theme.default ?  <Sun size={32} onClick={toggleTheme} alt = "Trocar de tema"/> : <Moon size={32} onClick={toggleTheme} alt = "Trocar de tema"/>}
            </div>
            
            <nav>
                <NavLink to={"/"} title="Ir para o Timer">
                    <Timer size={32} />
                </NavLink>
                <NavLink to={"/history"} title="Verificar historico">
                    <Scroll size={32} />
                </NavLink>
            </nav>
        </HeaderContainer>
        
    )
}
