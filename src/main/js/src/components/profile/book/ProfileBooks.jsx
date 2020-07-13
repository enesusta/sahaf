import React from "react";
import {useAuthFetch} from "kanca/http";
import {Facebook} from 'react-content-loader';
import {ProfileBooksWrapper} from "./styles/BookStyles";
import ProfileBook from "./ProfileBook";
import {Li} from "../../styles/GeneralStyles";
import {ProfileTabHeader} from "../styles/ProfileStyles";

const ProfileBooksErrorHandler = ({error}) => {

    if (error.status === 404) {
        return <Li>
            Kayıtlı kitap bulunamadı.
        </Li>
    }

    if (error.status === 403) {
        return <Li>Bu sayfayı görüntülemek için yetkiniz bulunmuyor. Tekrar giriş yapmayı deneyin. Hata
            Kodu: <b>{error.status}</b></Li>
    }

}

const ProfileBooks = () => {
    const {data, isLoading, error} = useAuthFetch('/book');

    if (isLoading) {
        return <Facebook/>
    }

    if (error) {
        return <ProfileBooksErrorHandler error={error} />
    }

    return (
        <ProfileBooksWrapper>
            <ProfileTabHeader>Kitaplarım</ProfileTabHeader>
            {
                data ? data.map((e, i) => {
                    return <ProfileBook update='Güncelle' del="Sil" key={i} bookProp={e}/>
                }) : null
            }
        </ProfileBooksWrapper>
    );
};

export default ProfileBooks;
