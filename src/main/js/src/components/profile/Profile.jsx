import React, {useReducer, useState} from 'react';
import styled from 'styled-components';
import ProfileSelector from "./ProfileSelector";
import ProfileInformation from "./ProfileInformation";
import ProfileAddress from "./ProfileAddress";
import ProfilePasswordChanger from "./ProfilePasswordChanger";


const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 6fr;
  margin-top: 75px;
`;


const Profile = () => {
    const [count, setCount] = useState(0);

    const profileMap = new Map();
    profileMap.set(1, <ProfileInformation/>);
    profileMap.set(2, <ProfileAddress/> );
    profileMap.set(3, <ProfilePasswordChanger/> );

    return (
        <Wrapper>
            <ProfileSelector handler={setCount}/>
            {profileMap.get(count)}
        </Wrapper>
    )
};

export default Profile;