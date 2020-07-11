import React from 'react';
import styled from 'styled-components';
import user from '../../assets/user.svg';

const Header = styled.label`
  margin-top: 20px;
  text-align: center;
  align-self: center;
  justify-self: center;
`;

const Image = styled.img`
  width: 10%;
  height: 10%;
  margin: 0 auto;
`;

const AuthorHeader = ({name, date}) => {

    return (
        <>
            <Image src={user}/>
            <Header>{name}</Header>
            <Header>Joined {date}</Header>
        </>
    );

};


export default AuthorHeader;


