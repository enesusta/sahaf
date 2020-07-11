import React from "react";
import {useAuthFetch} from "kanca/http";
import {Facebook} from 'react-content-loader';

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
        <li>{JSON.stringify(error)}</li>
    )
};

export default Admin;
