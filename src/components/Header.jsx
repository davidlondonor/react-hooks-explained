import React, { useState, useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const Header= ()=> {
const [darkMode, setDarkMode ] = useState(false)
const color = useContext(ThemeContext)
const handleClick = () => {
    setDarkMode(!darkMode)
}

    return (
        <>   
<div className="header">
    <h1 style={{color}}>React Hooks</h1>
    <button type="button" onClick={handleClick}>{darkMode ? "dark mode" : "ligth mode"}</button>
    <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? "dark mode 2" : "ligth mode 2"}</button>

    </div>        </>
    )
}

export default Header