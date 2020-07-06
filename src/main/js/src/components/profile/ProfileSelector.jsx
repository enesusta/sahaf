import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 5px;

`;

const SelectorButton = styled.button`
  padding: 5px;
  background-color: forestgreen;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const ProfileSelector = ({handler}) => {

    return (
        <Wrapper>
            <SelectorButton onClick={() => handler(1)}>Üyelik Bilgilerim</SelectorButton>
            <SelectorButton onClick={() => handler(2)}>Adres Defterim</SelectorButton>
            <SelectorButton onClick={() => handler(3)}>Şifre Değiştir</SelectorButton>
            <SelectorButton>1</SelectorButton>
            <SelectorButton>1</SelectorButton>
        </Wrapper>
    )
};

export default ProfileSelector;