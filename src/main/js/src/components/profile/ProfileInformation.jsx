import React, {useState} from 'react';
import {
    ProfileTabForm,
    ProfileTabHeader,
    ProfileTabInput, ProfileTabLabel,
    ProfileTabWrapper
} from "./styles/ProfileStyles";

import {useAuthFetch} from "kanca/http";
import {Facebook} from 'react-content-loader'
import {LoginButton} from '../auth/styles/LoginStyles'
import {Li} from "../styles/GeneralStyles";
import axios from 'axios';
import httpHeader from "../../http/header";

const ProfileInformation = () => {
    const {data, isLoading, error} = useAuthFetch('/author');
    const [literary, setLiterary] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [mess, setMess] = useState('Güncelle');

    if (isLoading) {
        return <Facebook/>
    }

    if (error) {
        return <Li>Bu sayfayı görüntülemek için yetkiniz bulunmuyor. Tekrar giriş yapmayı deneyin. Hata
            Kodu: <b>{error.status}</b></Li>
    }

    const clickHandler = () => {


        let literaryData = literary ? literary : data.literary;
        let birthdayData = birthday ? birthday : data.birthday;

        const body = {
            fullName: `${localStorage.getItem('user')}`,
            literary: literaryData,
            birthday: birthdayData
        }

        console.log(body);

        if (window.confirm('Ilgili kayıt güncellenecektir. Onaylıyor musunuz?')) {
            const url = `${process.env.REACT_APP_API}/author`;

            axios
                .put(url, body, httpHeader)
                .then(res => {
                    setMess('Başarı ile güncellendi');
                })
                .catch(err => {
                    console.log(err.response);
                });
        }

    }


    return (
        <ProfileTabWrapper>
            <ProfileTabHeader>Bilgilerim</ProfileTabHeader>
            <ProfileTabForm>
                <ProfileTabLabel>Yazar İsmi</ProfileTabLabel>
                <ProfileTabInput defaultValue={data.fullName} readOnly/>
                <ProfileTabLabel>Edebi Akım</ProfileTabLabel>
                <ProfileTabInput defaultValue={data.literary}
                                 onChange={e => setLiterary(e.target.value)}/>
                <ProfileTabLabel>Doğum Yılı</ProfileTabLabel>
                <ProfileTabInput defaultValue={data.birthday}
                                 onChange={e => setBirthday(e.target.value)}/>
            </ProfileTabForm>
            <LoginButton width={100} onClick={clickHandler}>{mess}</LoginButton>
        </ProfileTabWrapper>
    )
};

export default ProfileInformation;
