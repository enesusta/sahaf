import React from 'react';
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <>
            <a className="navbar-buttom">
                <Link className="navbar-buttom" to="/register">
                    <button>Kayıt ol!</button>
                </Link>
            </a>
            <Link className="navbar-buttom" to="/login">
                <button>Giriş yap</button>
            </Link>
        </>
    )
};

export default SignIn;