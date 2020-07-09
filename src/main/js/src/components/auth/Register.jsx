import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/auth/AuthContext";
import {LoginButton, LoginLabel, LoginInput, LoginForm, LoginWrapper} from "./styles/LoginStyles";

const Login = () => {
    const [authUser, setAuthUser] = useState({fullName: "", password: ""});
    const history = useHistory();
    const isAuth = useContext(AuthContext);

    const usernameHandler = e => {
        setAuthUser({...authUser, fullName: e.target.value});
    };

    const passcodeHandler = e => {
        setAuthUser({...authUser, password: e.target.value});
    };

    const clickHandler = () => {

        const url = `${process.env.REACT_APP_API}/auth/register`;

        axios
            .post(url, authUser)
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data);
                    localStorage.setItem('isLogged', true);
                    localStorage.setItem('user', authUser.fullName);
                    isAuth.updateIsAuth(true);
                    history.push("/login");
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <LoginWrapper>
            <h3>Kayıt olun!</h3>
            <LoginForm>
                <LoginLabel>Kullanıcı Adı</LoginLabel>
                <LoginInput type="text" value={authUser.fullName} onChange={usernameHandler}/>
                <LoginLabel>Şifre</LoginLabel>
                <LoginInput type="password" value={authUser.password} onChange={passcodeHandler}/>
            </LoginForm>
            <LoginButton onClick={clickHandler}>Login</LoginButton>
        </LoginWrapper>
    );
};

export default Login;
