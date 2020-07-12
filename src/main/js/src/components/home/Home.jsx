import React from "react";
import {useAuthFetch} from "kanca/http";
import {Li} from "../styles/GeneralStyles";
import {Facebook} from "react-content-loader";
import {HomeWrapper} from "./styles/HomeStyles";
import HomeHeader from "./HomeHeader";

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
        <HomeWrapper>
            <HomeHeader/>
            <li>{JSON.stringify(data)}</li>
        </HomeWrapper>
    )

};

export default Home;
