import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: absolute;
  bottom: 0;
  width: 80%;
  text-align: center;
  height: 2.5rem;
  
  h4 {
    font-weight: lighter;
  }
`;

const Footer = () => {

    return (
        <Wrapper>
            <h4>Copyright &copy; Sahaf Sepeti - Enes Usta 2020</h4>
        </Wrapper>
    );
};

export default Footer;