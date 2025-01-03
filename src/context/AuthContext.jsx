// import React from 'react'

import { createContext, useState } from "react"
import PropTypes from 'prop-types';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [newToken, setNewToken] = useState(localStorage.getItem('token'));

    const login = (token) => {
        localStorage.setItem('token', token);
        setNewToken(token);
    }
    const logout = () =>{
        localStorage.removeItem('token');
        setNewToken(null);
    }

    return <AuthContext.Provider value={{newToken, login, logout}}>
        {children}</AuthContext.Provider>

}

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
}
  

export default AuthProvider;
