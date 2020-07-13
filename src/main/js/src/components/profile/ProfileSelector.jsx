import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 130px;
`;

const SelectorButton = styled.button`
  background-color: forestgreen;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: 200;
  text-decoration: none;
  width: 100%;
`;

const ProfileSelector = () => {

    return (
        <Wrapper>
            <Link to={`/profile`}>
                <SelectorButton>
                    Bilgilerim
                </SelectorButton>
            </Link>
            <Link to={`/profile/books`}>
                <SelectorButton>
                    Kitaplarım
                </SelectorButton>
            </Link>
            <Link to={`/profile/books/add`}>
                <SelectorButton>
                    Kitap Ekle
                </SelectorButton>
            </Link>
        </Wrapper>
    )
};

export default ProfileSelector;

/*

            <SelectorButton onClick={() => handler(1)}>Bilgilerim</SelectorButton>
            <SelectorButton onClick={() => handler(2)}>Kitaplarım</SelectorButton>
            <SelectorButton onClick={() => handler(3)}>Kitap Ekle</SelectorButton>
 */
