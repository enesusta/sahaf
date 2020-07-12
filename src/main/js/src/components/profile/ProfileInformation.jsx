import React from 'react';
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


const ProfileInformation = () => {

    const {data, isLoading, error} = useAuthFetch('/author');

    if (isLoading) {
        return <Facebook/>
    }


    if (error) {
        return <Li>Bu sayfayı görüntülemek için yetkiniz bulunmuyor. Tekrar giriş yapmayı deneyin. Hata
            Kodu: <b>{error.status}</b></Li>
    }


    return (
        <ProfileTabWrapper>
            <ProfileTabHeader>Bilgilerim</ProfileTabHeader>
            <ProfileTabForm>
                <ProfileTabLabel>Yazar İsmi</ProfileTabLabel>
                <ProfileTabInput defaultValue={data.fullName} readOnly/>
                <ProfileTabLabel>Edebi Akım</ProfileTabLabel>
                <ProfileTabInput defaultValue={data.literary}/>
                <ProfileTabLabel>Doğum Yılı</ProfileTabLabel>
                <ProfileTabInput defaultValue={data.birthday}/>
            </ProfileTabForm>
            <LoginButton width={100}>Güncelle</LoginButton>
        </ProfileTabWrapper>
    )
};

export default ProfileInformation;
