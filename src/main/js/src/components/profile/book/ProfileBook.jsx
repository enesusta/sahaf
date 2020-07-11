import React, {useState} from "react";
import bookSvg from '../../../assets/book.svg';
import {BookImage, ProfileBooksWrapper} from "./styles/BookStyles";
import {
    ProfileTabForm,
    ProfileTabInput,
    ProfileTabLabel,
} from "../styles/ProfileStyles";
import {Button} from "../../styles/GeneralStyles";

import axios from 'axios';
import httpHeader from "../../../http/header";

const ProfileBook = ({bookProp}) => {
    const [book, setBook] = useState({...bookProp, author: `${localStorage.getItem('user')}`});

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
    }

    const updateHandler = e => {

        if (window.confirm('Ilgili kayıt güncellenecektir , onaylıyor musunuz?')) {
            const url = `${process.env.REACT_APP_API}/book`;

            axios
                .put(url, book, httpHeader)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.response)
                });
        }


    }

    const deleteHandler = () => {

        if (window.confirm('Bu kitabı silmek istediğinizden emin misiniz?')) {
            const url = `${process.env.REACT_APP_API}/book`;

            const body = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                data: book
            }

            axios
                .delete(url, body)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err.response)
                });
        }

    }

    return (
        <>
            <BookImage src={bookSvg}/>
            <ProfileTabForm>
                <ProfileTabLabel>ISBN</ProfileTabLabel>
                <ProfileTabInput defaultValue={bookProp.isbn} readOnly/>
                <ProfileTabLabel>Isim</ProfileTabLabel>
                <ProfileTabInput
                    defaultValue={bookProp.title}
                    onChange={titleHandler}/>
                <ProfileTabLabel>Dil</ProfileTabLabel>
                <ProfileTabInput
                    defaultValue={bookProp.language}
                    onChange={languageHandler}/>
                <ProfileTabLabel>Tutar</ProfileTabLabel>
                <ProfileTabInput
                    defaultValue={bookProp.price}
                    onChange={priceHandler}/>
                <ProfileTabLabel>Sayfa Sayısı</ProfileTabLabel>
                <ProfileTabInput
                    defaultValue={bookProp.pages}
                    onChange={pagesHandler}/>
                <Button width={100} color='#afe34f' hov='#c7ec83' onClick={updateHandler}>Güncelle</Button>
                <Button width={100} color='#ff475a' hov='#ff8591' onClick={deleteHandler}>Sil</Button>
            </ProfileTabForm>
        </>
    );
};

export default ProfileBook;
