import React from "react";
import {AuthorsShowCaseButton, AuthorsShowCaseWrapper} from "./styles/AuthorStyles";
import {Link} from "react-router-dom";

const AuthorsShowCase = ({author}) => {

    return (
        <AuthorsShowCaseWrapper>
            <li>
                <Link to={`/author/${author['fullName']}`} >
                    <AuthorsShowCaseButton>{author['fullName']}</AuthorsShowCaseButton>
                </Link>
            </li>
            <li>{author['literary']}</li>
            <li>{author['birthday']}</li>
        </AuthorsShowCaseWrapper>
    )
};

export default AuthorsShowCase;
