import styled from "styled-components";

const Li = styled.li`
  margin-top: 100px;
  list-style: none;
  text-align: center;
  align-self: center;
  justify-self: center;
`;

const Button = styled.button`
    display: grid;
    margin-top: 30px;
    width: ${props => props.width || 65}%;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.color || 'cornflowerblue'};
    transition: all 0.3s ease 0s;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.hov || 'dodgerblue'};
    }
    
    
     @media only screen and (max-width: 768px) {
      width: 80%;
    }
    
`;
export {
    Li,
    Button
};
