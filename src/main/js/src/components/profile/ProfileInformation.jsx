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


const ProfileInformation = () => {

    const {data, isLoading, error} = useAuthFetch('/author');

    if (isLoading) {
        return <Facebook/>
    }

    if (error) {
        return <li>Bu sayfayı görüntülemek için yetkiniz bulunmuyor.</li>
    }

    return (
        <ProfileTabWrapper>
            <ProfileTabHeader>Bilgilerim</ProfileTabHeader>
            <ProfileTabForm>
                <ProfileTabLabel>Yazar İsmi</ProfileTabLabel>
                <ProfileTabInput defaultValue={data.fullName}/>
                <ProfileTabLabel>Edebi Akım</ProfileTabLabel>
                <ProfileTabInput defaultValue={data.literaryMovement}/>
                <ProfileTabLabel>Doğum Yılı</ProfileTabLabel>
                <ProfileTabInput defaultValue={data.birthday}/>
            </ProfileTabForm>
            <LoginButton width={100}>Güncelle</LoginButton>
        </ProfileTabWrapper>
    )
};

export default ProfileInformation;
