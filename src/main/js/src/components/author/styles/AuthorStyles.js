import styled from 'styled-components';

const AuthorWrapper = styled.section`
margin-top: 75px;
  display: flex;
  flex-direction: column;
  
`;

const AuthorBooksWrapper = styled.section`
  margin-top: 30px;
`;

const AuthorsWrapper = styled.section`
  margin-top: 75px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
`;

const AuthorsShowCaseWrapper = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid black;
  border-radius: 5px;
  li {
    text-align: center;
    list-style: none;
    padding: 5px;
  }
`;

const AuthorsShowCaseButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
  
`;

export {
    AuthorWrapper,
    AuthorBooksWrapper,
    AuthorsWrapper,
    AuthorsShowCaseWrapper,
    AuthorsShowCaseButton
};
