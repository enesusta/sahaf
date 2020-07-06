import React from 'react';
import styled from 'styled-components';
import {
    ProfileTabForm,
    ProfileTabHeader,
    ProfileTabInput,
    ProfileTabWrapper
} from "./styles/ProfileStyles";




const ProfileInformation = () => {

    return (
        <ProfileTabWrapper>
            <ProfileTabHeader>Üyelik Bilgilerim</ProfileTabHeader>
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