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
            <Header><strong>{name}</strong> isimli yazar <strong>{date.substring(0,19)}</strong> tarihinden beri üye.</Header>
            <Header>Aşağıdaki tabloda yazarımıza ait kitapların listesini görmektesiniz.</Header>
        </>
    );

};


export default AuthorHeader;


