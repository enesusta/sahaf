import React from "react";
import {useAuthFetch} from "kanca/http";
import {Facebook} from 'react-content-loader';
import {ProfileBooksWrapper} from "./styles/BookStyles";
import ProfileBook from "./ProfileBook";
import {Li} from "../../styles/GeneralStyles";
import {ProfileTabHeader} from "../styles/ProfileStyles";


const ProfileBooks = () => {
    const {data, isLoading, error} = useAuthFetch('/book');

    if (isLoading) {
        return <Facebook/>
    }

    if (error) {
        return <Li>Bu sayfayı görüntülemek için yetkiniz bulunmuyor. Tekrar giriş yapmayı deneyin. Hata
            Kodu: <b>{error.status}</b></Li>
    }

    return (
        <ProfileBooksWrapper>
            <ProfileTabHeader>Kitaplarım</ProfileTabHeader>
            {
                data ? data.map((e, i) => {
                    return <ProfileBook key={i} book={e}/>
                }) : null
            }
        </ProfileBooksWrapper>
    );
};

export default ProfileBooks;
