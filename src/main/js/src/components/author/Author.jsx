import React from 'react';
import {useParams} from 'react-router-dom';
import {AuthorWrapper} from "./styles/AuthorStyles";
import AuthorHeader from "./AuthorHeader";
import AuthorBook from "./AuthorBook";
import {useAuthFetch} from "kanca/http";
import {Facebook} from "react-content-loader";

const AuthorLoad = () => {
    return (
        <AuthorWrapper>
            <Facebook />
        </AuthorWrapper>
    )
}

const Author = () => {
    const {username} = useParams();
    const { data, isLoading, error } = useAuthFetch(`/author/search?name=${username}`);

    if (isLoading || error) {
        return <AuthorLoad />
    }

    return (
        <AuthorWrapper>
            { error }
            <AuthorHeader name={username} date={data['createdDate']}/>
            <AuthorBook/>
        </AuthorWrapper>
    )

}

export default Author;
