import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {LoginButton, LoginLabel, LoginInput, LoginForm, LoginWrapper} from "./styles/LoginStyles";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialObject = {
    fullName: "",
    password: "",
    literary: "",
    birthday: "",
}

const Register = () => {
    const [register, setRegister] = useState(initialObject);
    const history = useHistory();

    const nameHandler = e => {
        setRegister({...register, fullName: e.target.value});
    };

    const passwordHandler = e => {
        setRegister({...register, password: e.target.value});
    };

    const literaryHandler = e => {
        setRegister({...register, literary: e.target.value})
    }

    const birthdayHandler = e => {
        setRegister({...register, birthday: e.target.value});
    }

    const notify = () => toast.success('Kayıt işlemi başarılı!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const clickHandler = () => {

        const url = `${process.env.REACT_APP_API}/auth/register`;

        axios
            .post(url, register)
            .then(res => {
                if (res.status === 200) {
                    notify();
                    setTimeout(() => {
                        history.push("/login");
                    }, 2000);
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
                <LoginLabel>Yazar Ismi</LoginLabel>
                <LoginInput type="text" placeholder='İsim Soyisim şeklinde giriniz' value={register.fullName}
                            onChange={nameHandler}/>
                <LoginLabel>Yazar Şifresi</LoginLabel>
                <LoginInput type="password" value={register.password} onChange={passwordHandler}/>
                <LoginLabel>Yazarın Edebi Akımları</LoginLabel>
                <LoginInput type="text" placeholder='Virgül bırakarak giriniz.' value={register.literary}
                            onChange={literaryHandler}/>
                <LoginLabel>Yazarın Doğum Yılı</LoginLabel>
                <LoginInput type="text" value={register.birthday} onChange={birthdayHandler}/>
            </LoginForm>
            <LoginButton onClick={clickHandler}>Kayıt</LoginButton>
            <ToastContainer/>
        </LoginWrapper>
    );
};

export default Register;
