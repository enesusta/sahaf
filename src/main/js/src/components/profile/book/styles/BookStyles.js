import styled from "styled-components";

const ProfileBooksWrapper = styled.section`
   display: grid;
   grid-template-columns:  1fr;
   grid-row-gap: 20px;
   padding-bottom: 100px;
`;

const BookImage = styled.img`
  margin: 0 auto;
  width: 30%;
`;

export {
    ProfileBooksWrapper,
    BookImage
};
