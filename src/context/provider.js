import { useState } from "react"
import { ThemeContext } from "."
import { dateProvider, dateTimeProvider } from "../constant"

export const ThemeProvider = (props) =>{
    const [data, setData] = useState({value: 'morning', ...dateProvider['morning']})

    const handleCurrentTheme = (date) => {
        const hours = date.getHours()
        const minutes = date.getMinutes()
        if( (hours +"."+ minutes) >= Number(dateTimeProvider.earlyMorning) && (hours +"."+ minutes) <= Number(dateTimeProvider.earlyAfternoon) ){
          setData({...data, ...dateProvider['morning'], value: 'morning'})
        }else if((hours +"."+ minutes) >= Number(dateTimeProvider.earlyAfternoon) && (hours +"."+ minutes) <= Number(dateTimeProvider.earlyEvening)){
          setData({...data, ...dateProvider['afternoon'], value: 'afternoon'})
        }else if((hours +"."+ minutes) > Number(dateTimeProvider.earlyEvening) && (hours +"."+ minutes) <= Number(dateTimeProvider.earlyNight)){
          setData({...data, ...dateProvider['evening'], value: 'evening'})
        }else if((hours +"."+ minutes) > Number(dateTimeProvider.earlyNight) && (hours +"."+ minutes) <= Number(dateTimeProvider.earlyMorning)){
          setData({...data, ...dateProvider["night"], value: 'night'})
        }
      }

 return(
    <ThemeContext.Provider value={{data, dateProvider, setData, handleCurrentTheme}}>
        {props.children}
    </ThemeContext.Provider>
 )
}


