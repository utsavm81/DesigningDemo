import React, { useContext } from 'react'
import { ThemeContext } from '../context';

function DemoContext() {

    const { setData, data, themes } = useContext(ThemeContext)

    const handleChange = (e) =>{
       const { value } = e.target
       setData({...data, ...themes[value], value})
    }

  return (
    <select onChange={handleChange} value={data.value}>
        {Object.keys(themes).map((item)=><option key={item} name={item} >{item}</option>)}  
    </select>
  )
}

export default DemoContext;