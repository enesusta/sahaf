import styled from 'styled-components';

const HomeWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
`;

const HomeTable = styled.div`
margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1fr;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  
  span {
    text-align: center;
    padding-top: 3px;
    padding-bottom: 3px;
  }
`

export {
    HomeWrapper,
    HomeTable
};
