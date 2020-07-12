import React from "react";
import {useAuthFetch} from "kanca/http";
import {Facebook} from 'react-content-loader';
import {AdminWrapper} from "./styles/AdminStyles";
import AdminHeader from "./AdminHeader";

const AdminNotFound = ({err}) => {
    return (
        <li>{err.data} : Hata Kodu: {err.status}</li>
    )
}

const Admin = () => {
    const {data, isLoading, error} = useAuthFetch('/admin');

    if (isLoading)
        return <Facebook/>

    return (
        <AdminWrapper>
            <AdminHeader />
        </AdminWrapper>
    )
};

export default Admin;
