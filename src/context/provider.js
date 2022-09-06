import { useState } from "react"
import { ThemeContext } from "."
import { themes } from "../constant"

export const ThemeProvider = (props) =>{
    const [data, setData] = useState({value: 'light', ...themes['light']})
 return(
    <ThemeContext.Provider value={{data, themes, setData}}>
        {props.children}
    </ThemeContext.Provider>
 )
}