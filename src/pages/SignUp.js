import React from 'react'

const SignIn = React.lazy(()=>import('./SignIn'))

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <h1>Sign Up</h1>
            <h1>Sign Up</h1>
            <h1>Sign Up</h1>
            <h1>Sign Up</h1>
            
            <h1>Sign Up</h1>
            <h1>Sign Up</h1>
            <h1>Sign Up</h1>
            <>
            <React.Suspense fallback={<div>Please wait...</div>}>
                <SignIn/>
            </React.Suspense>
            </>
        </div>
    )
}

export default SignUp;
