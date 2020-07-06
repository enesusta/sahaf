import React, { useState, createContext, useEffect } from 'react';

const AuthContext = createContext(false);

const AuthProvider = ({ children }) => {
    const isCredentialsExist = localStorage.getItem('isLogged');
    const [isAuth, setIsAuth] = useState(isCredentialsExist);

    return (
        <AuthContext.Provider value={{ isAuth, updateIsAuth: value => setIsAuth(value) }}>
            {children}
        </AuthContext.Provider>
    );
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer, AuthContext };