import React, {useState} from 'react';
import styled from 'styled-components';
import ProfileSelector from "./ProfileSelector";
import ProfileInformation from "./ProfileInformation";


const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 6fr;
  margin-top: 75px;
  grid-column-gap: 25px;
`;


const Profile = () => {
    const [count, setCount] = useState(1);

    const profileMap = new Map();
    profileMap.set(1, <ProfileInformation/>);

    return (
        <Wrapper>
            <ProfileSelector handler={setCount}/>
            {profileMap.get(count)}
        </Wrapper>
    )
};

export default Profile;
