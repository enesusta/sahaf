import React from "react";
import {AuthorsShowCaseButton, AuthorsShowCaseWrapper} from "./styles/AuthorStyles";
import {Link} from "react-router-dom";

const AuthorsShowCase = ({author}) => {

    return (
        <AuthorsShowCaseWrapper>
            <li>
                <Link to={`/author/${author['fullName']}`} >
                    <AuthorsShowCaseButton>Isim: {author['fullName']}</AuthorsShowCaseButton>
                </Link>
            </li>
            <li>Edebi Akım: {author['literary']}</li>
            <li>Doğum Tarihi: {author['birthday']}</li>
        </AuthorsShowCaseWrapper>
    )
};

export default AuthorsShowCase;
