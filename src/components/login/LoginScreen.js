import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const navigate = useNavigate()

    const handlelogin = () => {
        navigate('/' , {
            replace: true
        })
    }
    
    
    return (
        <div className='container mt-5'>
            <h1>LoginScreen</h1>
            <hr/>

            <button className='btn btn-primary'
                onClick={handlelogin}
            >
                Login
            </button>
        </div>
    )
}
