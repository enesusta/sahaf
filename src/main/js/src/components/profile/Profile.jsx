import React, {useState} from 'react';
import styled from 'styled-components';
import ProfileSelector from "./ProfileSelector";
import ProfileInformation from "./ProfileInformation";
import ProfileBookAdd from "./book/ProfileBookAdd";
import ProfileBooks from "./book/ProfileBooks";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 10fr;
  margin-top: 75px;
  grid-column-gap: 25px;
`;

const Profile = () => {
    const [count, setCount] = useState(1);

    const profileMap = new Map();
    profileMap.set(1, <ProfileInformation/>);
    profileMap.set(2, <ProfileBooks/>)
    profileMap.set(3, <ProfileBookAdd handler={setCount}/>);

    return (
        <Wrapper>
            <ProfileSelector handler={setCount}/>
            {profileMap.get(count)}
        </Wrapper>
    )
};

export default Profile;
