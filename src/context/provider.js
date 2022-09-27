import { useState } from "react"
import { ThemeContext } from "."
import { dateProvider, dateTimeProvider } from "../constant"

export const ThemeProvider = (props) =>{
    const [data, setData] = useState({value: 'morning', ...dateProvider['morning']})

    const handleCurrentTheme = (date) => {
      // let date = new Date('Tue Sep 27 2022 06:00:01 GMT+0530 (India Standard Time)')
      //   console.log('date :>> ',date);
        const hours = date.getHours()
        const minutes = date.getMinutes()
        console.log('date :>> ',Number(dateTimeProvider.earlyMorning));
        if( (hours +"."+ minutes) >= Number(dateTimeProvider.earlyMorning) && (hours +"."+ minutes) <= Number(dateTimeProvider.earlyAfternoon) ){
          setData({...data, ...dateProvider['morning'], value: 'morning'})
        }else if((hours +"."+ minutes) >= dateTimeProvider.earlyAfternoon && (hours +"."+ minutes) <= dateTimeProvider.earlyEvening){
          setData({...data, ...dateProvider['afternoon'], value: 'afternoon'})
        }else if((hours +"."+ minutes) > dateTimeProvider.earlyEvening && (hours +"."+ minutes) <= dateTimeProvider.earlyNight){
          setData({...data, ...dateProvider['evening'], value: 'evening'})
        }else if((hours +"."+ minutes) > dateTimeProvider.earlyNight && (hours +"."+ minutes) <= dateTimeProvider.earlyMorning){
          setData({...data, ...dateProvider["night"], value: 'night'})
        }
      }

 return(
    <ThemeContext.Provider value={{data, dateProvider, setData, handleCurrentTheme}}>
        {props.children}
    </ThemeContext.Provider>
 )
}


