import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/auth/AuthContext";







const Login = () => {
    const [authUser, setAuthUser] = useState({username: "", user_pwd: ""});
    const history = useHistory();
    const isAuth = useContext(AuthContext);

    const usernameHandler = e => {
        setAuthUser({...authUser, username: e.target.value});
    };

    const passcodeHandler = e => {
        setAuthUser({...authUser, user_pwd: e.target.value});
    };

    const clickHandler = () => {

        const url = `${process.env.REACT_APP_API}/login`;

        axios
            .post(url, authUser)
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data);
                    localStorage.setItem('isLogged', true);
                    isAuth.updateIsAuth(true);
                    history.push("/");
                }
            })
            .catch(err => {
                console.log(err);
            });

    }

    return (
        <section className="login">
            <h3>Login</h3>
            <form action="" className="login-form">
                <label htmlFor="" className="login-form-label">
                    Username
                </label>
                <input
                    type="text"
                    value={authUser.username}
                    onChange={usernameHandler}
                />
                <label htmlFor="" className="login-form-label">
                    Password
                </label>
                <input
                    type="test"
                    value={authUser.user_pwd}
                    onChange={passcodeHandler}
                />
            </form>
            <button className="login-button" onClick={clickHandler}>Login</button>
        </section>
    );
};

export default Login;