import React from "react";
import {useAuthFetch} from "kanca/http";
import {Li} from "../styles/GeneralStyles";
import {Facebook} from "react-content-loader";

const NotDataFound = ({err}) => {
    return (
        <Li>{err.data} : Hata Kodu: <b>{err.status}</b></Li>
    );
};

const Home = () => {
    const {data, isLoading, error} = useAuthFetch('/author/all');

    if (isLoading) {
        return <Facebook/>
    }

    if (error) {
        return <NotDataFound err={error}/>
    }

    return (
        <li>{JSON.stringify(data)}</li>
    )

};

export default Home;
