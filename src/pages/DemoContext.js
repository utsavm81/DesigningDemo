import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context';


function DemoContext() {
    const { setData, data, dateProvider, handleCurrentTheme } = useContext(ThemeContext)

    useEffect(() => {
      handleCurrentTheme( new Date())
    },[])


    const handleChange = (e) =>{
       const { value } = e.target
       setData({...data, ...dateProvider[value], value})
    }
    
  return (
    <div>
      <select onChange={handleChange} value={data?.value}>
        {Object.keys?.(dateProvider)?.map?.((item)=><option key={item} name={item} >{item}</option>)}  
      </select>
    </div>
  )
}

export default DemoContext;