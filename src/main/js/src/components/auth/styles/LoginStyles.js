import styled from "styled-components";

const LoginWrapper = styled.section`
    display: flex;
    padding-top: 180px;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

const LoginForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2 ,1fr);
  grid-auto-rows: 35px;
  padding-top: 20px;
  grid-row-gap: 5px;
  width: 65%;
  
  @media only screen and (max-width: 768px) {
    width: 80%;
    grid-template-columns: 1fr;
    grid-auto-rows: 35px;
  }
`;

const LoginLabel = styled.label`
  display: flex;
  justify-content: center;
  padding: 0.5em;
  
  @media only screen and (max-width: 768px) {
   justify-content: start;
  }
`;

const LoginInput = styled.input`
  padding: 3px 5px;
  border: 1px solid #eee;
  border-radius: 4px;
`;

const LoginButton = styled.button`
    display: grid;
    margin-top: 30px;
    width: ${props => props.width || 65}%;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: cornflowerblue;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    &:hover {
      background-color: dodgerblue;
    }
    
     @media only screen and (max-width: 768px) {
      width: 80%;
    }
    
`;

export {LoginWrapper, LoginForm, LoginLabel, LoginInput, LoginButton};
