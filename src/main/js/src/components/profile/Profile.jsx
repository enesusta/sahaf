import React, {useState} from 'react';
import styled from 'styled-components';
import ProfileSelector from "./ProfileSelector";
import ProfileInformation from "./ProfileInformation";
import ProfileBookAdd from "./book/ProfileBookAdd";
import ProfileBooks from "./book/ProfileBooks";
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 10fr;
  margin-top: 75px;
  grid-column-gap: 25px;
`;

const SubView = ({match}) => (
    <div>
        <h3>Section: {match.params.sectionName}</h3>
    </div>
);

const Profile = ({match}) => {
    const [count, setCount] = useState(1);

    const profileMap = new Map();
    profileMap.set(1, <ProfileInformation/>);
    profileMap.set(2, <ProfileBooks/>)
    profileMap.set(3, <ProfileBookAdd handler={setCount}/>);


    return (
        <Wrapper>
            <BrowserRouter>
                <ProfileSelector handler={setCount} match={match}/>
                <Switch>
                    <Route exact path={`${match.url}`} component={ProfileInformation} />
                    <Route exact path={`${match.url}/books`} component={ProfileBooks}/>
                    <Route exact path={`${match.url}/books/add`} component={ProfileBookAdd}/>
                </Switch>
            </BrowserRouter>
        </Wrapper>
    )
};

export default Profile;

//{profileMap.get(count)}

/**

 <Switch>
 <Route exact path='/profile/information' component={ProfileInformation}/>
 <Route exact path='/profile/books' component={ProfileBooks}/>
 <Route exact path='/profile/books/add' component={ProfileBookAdd}/>
 </Switch>
 */
