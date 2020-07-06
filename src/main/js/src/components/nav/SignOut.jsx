import React, {useContext} from 'react';
import {AuthContext} from '../../context/auth/AuthContext';
import {useHistory} from "react-router-dom";

const SignOut = () => {
    const isAuth = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = async () => {
        localStorage.removeItem('isLogged');
        isAuth.updateIsAuth(false);
        history.push("/");
    };

    return (
        <div className="">
            <a className="navbar-buttom">
                <button onClick={logoutHandler}>Çıkış Yap</button>
            </a>
        </div>
    )
};

export default SignOut;