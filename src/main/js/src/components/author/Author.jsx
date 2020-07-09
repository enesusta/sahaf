import React from 'react';
import {useParams} from 'react-router-dom';
import {AuthorWrapper} from "./styles/AuthorStyles";
import AuthorHeader from "./AuthorHeader";
import AuthorBook from "./AuthorBook";
import {useAuthFetch} from "kanca/http";
import {Instagram} from "react-content-loader";


const Author = () => {
    const {username} = useParams();
    const { data, isLoading, error } = useAuthFetch(`/author/search?name=${username}`);

    if (isLoading) {
        return <Instagram/>
    }

    return (
        <AuthorWrapper>
            <AuthorHeader name={username} date={data['createdDate']}/>
            <AuthorBook/>
        </AuthorWrapper>
    )

}

export default Author;
