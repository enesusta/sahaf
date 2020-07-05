import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/auth/AuthContext";
import { LoginButton, LoginLabel , LoginInput, LoginForm, LoginWrapper } from "./styles/LoginStyles";

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

    //    const url = `${process.env.REACT_APP_API}/login`;

        console.log(authUser)

        /**
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
*/
    }

    return (
        <LoginWrapper>
            <h3>Giriş Yapın</h3>
            <LoginForm>
                <LoginLabel>Kullanıcı Adı</LoginLabel>
                <LoginInput type="text" value={authUser.username} onChange={usernameHandler}/>
                <LoginLabel>Şifre</LoginLabel>
                <LoginInput type="password" value={authUser.user_pwd} onChange={passcodeHandler}/>
            </LoginForm>
            <LoginButton onClick={clickHandler}>Login</LoginButton>
        </LoginWrapper>
    );
};

export default Login;