import React, {useState} from 'react';
import {
    ProfileTabForm,
    ProfileTabHeader,
    ProfileTabInput,
    ProfileTabLabel,
    ProfileTabWrapper
} from "./styles/ProfileStyles";
import axios from 'axios';
import httpHeader from "../../http/header";
import {LoginButton} from "../auth/styles/LoginStyles";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialObject = {
    fullName: localStorage.getItem('user'),
    newPassword: ""
}

const ProfilePasswordChanger = () => {
    const [password, setPassword] = useState(initialObject);

    const notify = () => toast.success('Şifreniz başarı ile değişti!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const passwordHandler = e => {
        setPassword({...password, newPassword: e.target.value});
    }

    const clickHandler = () => {

        const url = `${process.env.REACT_APP_API}/author`;

        axios
            .put(url, password, httpHeader)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    if (res.data === true) notify();
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <ProfileTabWrapper>
            <ProfileTabHeader>Şifre Değiştir</ProfileTabHeader>
            <ProfileTabForm>
                <ProfileTabLabel>Yeni Şifre</ProfileTabLabel>
                <ProfileTabInput type='password' value={password.newPassword} onChange={passwordHandler}/>
            </ProfileTabForm>
            <LoginButton width={100} onClick={clickHandler}>Şifreyi Güncelle</LoginButton>
            <ToastContainer />
        </ProfileTabWrapper>
    );
};

export default ProfilePasswordChanger;
