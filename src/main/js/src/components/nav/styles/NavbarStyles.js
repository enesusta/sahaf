import styled from 'styled-components';

const NavbarWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10px;
  
`

const NavbarButton = styled.button`
  padding: 5px 10px;
  margin-left: 8px;
  border: none;
  border-radius: 3px;
  background-color: hotpink;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: deeppink;
  }
`;
