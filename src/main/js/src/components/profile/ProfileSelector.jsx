import React from 'react';
import styled from 'styled-components';

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
`;

const ProfileSelector = ({handler}) => {

    return (
        <Wrapper>
            <SelectorButton onClick={() => handler(1)}>Bilgilerim</SelectorButton>
            <SelectorButton onClick={() => handler(2)}>Kitaplarım</SelectorButton>
        </Wrapper>
    )
};

export default ProfileSelector;
