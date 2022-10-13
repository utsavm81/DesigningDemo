import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context'

function Home() {
  const {data, handleCurrentTheme} = useContext(ThemeContext)

    useEffect(() => {
        handleCurrentTheme( new Date())
    }, [])
  return (
    <div>
      <h1 style={{color:data.color,background:data.background}}>
        Home
      </h1>
    </div>
  )
}

export default Home