import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context'

const SignIn = React.lazy(()=>import('./SignIn'))

const SignUp = () => {
    const {data, handleCurrentTheme} = useContext(ThemeContext)

    useEffect(() => {
        handleCurrentTheme( new Date())
    }, [])
    

    return (
        <div style={{background:data.background}}>
            <h1 style={{color:data.color}}>Sign Up</h1>
            <>
            <React.Suspense fallback={<div>Please wait...</div>}>
                <SignIn/>
            </React.Suspense>
            </>
        </div>
    )
}

export default SignUp;
