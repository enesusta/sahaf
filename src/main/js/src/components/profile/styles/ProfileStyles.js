import styled from 'styled-components';


const ProfileTabHeader = styled.label`
  text-align: center;
`;

const ProfileTabWrapper = styled.section`
  display: grid;
  grid-template-rows: 35px 6fr;
`;

const ProfileTabForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`;

const ProfileTabInput = styled.input`
  border: 1px solid #eee;
  border-radius: 4px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5px;
`;


export {ProfileTabHeader, ProfileTabWrapper, ProfileTabForm, ProfileTabInput};
