import React from "react";
import {useAuthFetch} from "kanca/http";
import {Facebook} from 'react-content-loader';
import {AdminWrapper} from "./styles/AdminStyles";
import AdminHeader from "./AdminHeader";
import AdminSection from "./AdminSection";
import {Li} from "../styles/GeneralStyles";

const AdminNotFound = ({err}) => {
    return (
        <Li>Hata Kodu: <strong>{err.status}</strong></Li>
    )
}

const Admin = () => {
    const {data, isLoading, error} = useAuthFetch('/admin');

    if (isLoading)
        return <Facebook/>

    if (error)
        return <AdminNotFound err={error}/>

    return (
        <AdminWrapper>
            <AdminHeader/>
            {
                data.map((e, i) => {
                    return (
                        <AdminSection user={e} key={i}/>
                    );
                })
            }
        </AdminWrapper>
    )
};

export default Admin;
