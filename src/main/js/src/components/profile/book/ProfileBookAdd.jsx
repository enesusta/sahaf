import {
    ProfileTabForm,
    ProfileTabHeader,
    ProfileTabInput, ProfileTabLabel,
    ProfileTabWrapper
} from "../styles/ProfileStyles";

import {LoginButton} from '../../auth/styles/LoginStyles'
import React, {useState} from "react";
import axios from 'axios';
import httpHeader from "../../../http/header";
import {useHistory} from "react-router-dom";

const initialObject = {
    author: `${localStorage.getItem('user')}`,
    isbn: "",
    title: "",
    language: "",
    pages: "",
    price: ""
}

const ProfileBookAdd = () => {
    const [book, setBook] = useState(initialObject);
    const history = useHistory();

    const isbnHandler = e => {
        setBook({...book, isbn: e.target.value});
    };

    const titleHandler = e => {
        setBook({...book, title: e.target.value});
    };

    const languageHandler = e => {
        setBook({...book, language: e.target.value});
    };

    const pagesHandler = e => {
        setBook({...book, pages: e.target.value});
    };

    const priceHandler = e => {
        setBook({...book, price: e.target.value});
    };

    const clickHandler = () => {

        const url = `${process.env.REACT_APP_API}/book`

        axios
            .post(url, book, httpHeader)
            .then(res => {
                console.log(res.data);
                history.push('/profile/books');
            })
            .catch(err => {
                console.log(err.response);
            });

    }

    return (
        <ProfileTabWrapper>
            <ProfileTabHeader>Kitap Ekleyin</ProfileTabHeader>
            <ProfileTabForm>
                <ProfileTabLabel>ISBN</ProfileTabLabel>
                <ProfileTabInput onChange={isbnHandler}
                                 placeholder='Boş bırakmanız halinde rastgele bir değer atanacaktır.'/>
                <ProfileTabLabel>Isim</ProfileTabLabel>
                <ProfileTabInput onChange={titleHandler}/>
                <ProfileTabLabel>Fiyat</ProfileTabLabel>
                <ProfileTabInput onChange={priceHandler}/>
                <ProfileTabLabel>Dil</ProfileTabLabel>
                <ProfileTabInput onChange={languageHandler}/>
                <ProfileTabLabel>Sayfa Sayısı</ProfileTabLabel>
                <ProfileTabInput onChange={pagesHandler}/>
            </ProfileTabForm>
            <LoginButton width={100} onClick={clickHandler}>Ekle</LoginButton>
        </ProfileTabWrapper>
    )
};

export default ProfileBookAdd;
