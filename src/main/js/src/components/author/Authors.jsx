import React from 'react';
import {useAuthFetch} from "kanca/http";
import {AuthorsWrapper} from "./styles/AuthorStyles";
import {Facebook} from "react-content-loader";
import AuthorsShowCase from "./AuthorsShowcase";
import styled from "styled-components";

const Li = styled.li`
  margin-top: 100px;
  list-style: none;
  text-align: center;
  align-self: center;
  justify-self: center;
`;

const Authors = () => {
    const {data, isLoading, error} = useAuthFetch('/author/all')


    if (isLoading) {
        return <Facebook/>
    }


    return (
        <AuthorsWrapper>
            {
                data.map((e, i) => {
                    return <AuthorsShowCase key={i} author={e}/>
                })
            }
        </AuthorsWrapper>
    )

};

export default Authors;
