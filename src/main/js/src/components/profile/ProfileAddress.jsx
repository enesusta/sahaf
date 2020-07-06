import React from 'react';
import {ProfileTabHeader, ProfileTabForm, ProfileTabInput, ProfileTabWrapper} from "./styles/ProfileStyles";


const ProfileInformation = () => {

    return (
        <ProfileTabWrapper>
            <ProfileTabHeader>Adres Defterim</ProfileTabHeader>
            <ProfileTabForm>
                <ProfileTabInput/>
                <ProfileTabInput/>
                <ProfileTabInput/>
                <ProfileTabInput/>
            </ProfileTabForm>
        </ProfileTabWrapper>
    )
};

export default ProfileInformation;