import React from "react";
import {useAuthFetch} from "kanca/http";
import {Facebook} from 'react-content-loader';

const Admin = () => {
    const {data, isLoading} = useAuthFetch('/admin');

    if (isLoading)
        return <Facebook/>

    return (
        <li>{JSON.stringify(data)}</li>
    )
};

export default Admin;
