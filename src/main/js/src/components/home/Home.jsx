import React from "react";
import {useAuthFetch} from "kanca/http";
import {Li} from "../styles/GeneralStyles";
import {Facebook} from "react-content-loader";
import {HomeTable, HomeWrapper} from "./styles/HomeStyles";
import HomeHeader from "./HomeHeader";

const NotDataFound = ({err}) => {
    return (
        <Li>{err.data} Hata Kodu: <b>{err.status}</b></Li>
    );
};

const Home = () => {
    const {data, isLoading, error} = useAuthFetch('/book/all');

    if (isLoading) {
        return <Facebook/>
    }

    if (error) {
        return <NotDataFound err={error}/>
    }

    return (
        <HomeWrapper>
            <HomeHeader/>
            <HomeTable>
                <span> <strong>Yazar</strong> </span>
                <span> <strong>ISBN</strong> </span>
                <span> <strong>Isim</strong> </span>
                <span> <strong>Dil</strong> </span>
                <span> <strong>Fiyat</strong> </span>
                <span> <strong>Sayfa Sayısı</strong> </span>
                {
                    data.map((e, i) => {
                        return (
                            <React.Fragment key={i}>
                                <span>{e.author}</span>
                                <span>{e.isbn}</span>
                                <span>{e.title}</span>
                                <span>{e.language}</span>
                                <span>{e.price}</span>
                                <span>{e.pages}</span>
                            </React.Fragment>
                        )
                    })
                }
            </HomeTable>
        </HomeWrapper>
    )

};

export default Home;
