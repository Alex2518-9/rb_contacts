import React, { useContext } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs';
import ThemeContext from '../contextAPIs/ThemeContext'

const ThemeSwitcher = () => {
    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div className="switch-container">
            <div  onClick={() => setTheme(theme === "dark")} className={theme === "dark" && "moon"}>
              <BsMoon />
            </div>
            <div className={theme === "light" && "sun" } onClick={() => setTheme(theme === "light")}>
              <BsSun />
            </div>
          </div>
  )
}

export default ThemeSwitcher