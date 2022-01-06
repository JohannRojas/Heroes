import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

    const navigate = useNavigate()

    const { dispatch } = useContext(AuthContext)

    const handlelogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Jhann'
            },
        }

        dispatch(action)

        const lastPath = localStorage.getItem('lastPath') || '/';

        navigate(lastPath, { replace: true })

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
