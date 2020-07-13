import React, {useState} from "react";
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
    const [roles, setRoles] = useState(null);
    const [literary, setLiterary] = useState(null);
    const [birthday, setBirthday] = useState(null);

    const rolesHandler = e => {
        const temp = e.target.value;
        setRoles(temp.split(','));
    };

    const literaryHandler = e => {
        setLiterary(e.target.value);
    };

    const birthdayHandler = e => {
        setBirthday(e.target.value);
    };


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

    const userUpdateHandler = e => {

        e.preventDefault();

        let rolesData = roles ? roles : user.roles;
        let literaryData = literary ? literary : user.literary;
        let birthdayData = birthday ? birthday : user.birthday;

        if (window.confirm('Kullanıcı bilgileri güncellenecektir. Onaylıyor musunuz?')) {

            const body = {
                fullName: user.fullName,
                roles: rolesData,
                literary: literaryData,
                birthday: birthdayData
            }

            console.log(body);
        }
    }

    return (
        <AdminSectionWrapper>
            <ProfileTabForm>
                <ProfileTabLabel>Kullanıcı Ismi</ProfileTabLabel>
                <ProfileTabInput defaultValue={user.fullName} readOnly/>
                <ProfileTabLabel>Rolleri</ProfileTabLabel>
                <ProfileTabInput
                    defaultValue={user.roles.join(",")}
                    onChange={rolesHandler}/>

                <ProfileTabLabel>Edebi Akım</ProfileTabLabel>
                <ProfileTabInput defaultValue={user.literary} onChange={literaryHandler}/>

                <ProfileTabLabel>Doğum Tarihi</ProfileTabLabel>
                <ProfileTabInput defaultValue={user.birthday} onChange={birthdayHandler}/>

                <ProfileTabLabel>Kayıt Tarihi</ProfileTabLabel>
                <ProfileTabInput defaultValue={user.createdDate.substr(0, 19)} readOnly/>

                {
                    user.books ? user.books.map((e, i) => {
                        return <React.Fragment key={i}>
                            <ProfileBook bookProp={e} who={user.fullName} update="Kitap Güncelle" del='Kitap Sil'/>
                        </React.Fragment>
                    }) : null
                }

                <Button width={100} color='#afe34f' hov='#c7ec83' onClick={userUpdateHandler}>Kullanıcı Bilgilerini
                    Güncelle</Button>
                <Button width={100} color='#ff475a' hov='#ff8591' onClick={deleteHandler}>Kullanıcıyı Sil</Button>
            </ProfileTabForm>
        </AdminSectionWrapper>
    );
}

export default AdminSection;
