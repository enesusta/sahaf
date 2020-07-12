import React from "react";
import {
    ProfileTabForm,
    ProfileTabInput,
    ProfileTabLabel,
} from "../profile/styles/ProfileStyles";

import {Button} from "../styles/GeneralStyles";
import styled from 'styled-components';
import axios from "axios";
import httpHeader from "../../http/header";
import ProfileBook from "../profile/book/ProfileBook";

const AdminSectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;


const AdminSection = ({user}) => {

    const titleHandler = e => {
    };

    const languageHandler = e => {
    };

    const pagesHandler = e => {
    };

    const priceHandler = e => {
    }

    const updateHandler = e => {

        if (window.confirm('Ilgili kayıt güncellenecektir , onaylıyor musunuz?')) {
            const url = `${process.env.REACT_APP_API}/user`;

            axios
                .put(url, user, httpHeader)
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
            const url = `${process.env.REACT_APP_API}/user`;

            const body = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                data: user
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
        <AdminSectionWrapper>
            <ProfileTabForm>
                <ProfileTabLabel>Kullanıcı Ismi</ProfileTabLabel>
                <ProfileTabInput defaultValue={user.fullName} readOnly/>
                <ProfileTabLabel>Rolleri</ProfileTabLabel>
                <ProfileTabInput
                    defaultValue={user.roles.join(", ")}
                    onChange={titleHandler}/>

                <ProfileTabLabel>Edebi Akım</ProfileTabLabel>
                <ProfileTabInput defaultValue={user.literary} />

                <ProfileTabLabel>Doğum Tarihi</ProfileTabLabel>
                <ProfileTabInput defaultValue={user.birthday} />

                <ProfileTabLabel>Kayıt Tarihi</ProfileTabLabel>
                <ProfileTabInput defaultValue={user.createdDate.substr(0,19)} />

                {
                    user.books ? user.books.map((e,i) => {
                        return <React.Fragment key={i}>
                            <ProfileBook bookProp={e} who={user.fullName} update="Kitap Güncelle" del='Kitap Sil' />
                        </React.Fragment>
                    }) : null
                }

                <Button width={100} color='#afe34f' hov='#c7ec83' onClick={updateHandler}>Kullanıcı Bilgilerini Güncelle</Button>
                <Button width={100} color='#ff475a' hov='#ff8591' onClick={deleteHandler}>Kullanıcıyı Sil</Button>
            </ProfileTabForm>
        </AdminSectionWrapper>
    );
}

export default AdminSection;
