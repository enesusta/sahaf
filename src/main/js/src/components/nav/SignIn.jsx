import React from 'react';
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <>
            <a className="navbar-buttom">
                <Link className="navbar-buttom" to="/register">
                    <button>Sign Up</button>
                </Link>
            </a>
            <Link className="navbar-buttom" to="/login">
                <button>Sign In</button>
            </Link>
        </>
    )
};

export default SignIn;