import React from 'react';
import {
    ProfileTabForm,
    ProfileTabHeader,
    ProfileTabInput,
    ProfileTabWrapper
} from "./styles/ProfileStyles";

import {useAuthFetch} from "kanca/http";
import {Facebook} from 'react-content-loader'


const ProfileInformation = () => {

    const url = `/author?name=${localStorage.getItem('user')}`;
    const {data, isLoading, error} = useAuthFetch(url);

    /**
     const [data, setData] = useState(null);
     const [isLoading, setLoading] = useState(true);

     useEffect(() => {

        axios
            .get(`${process.env.REACT_APP_API} / author ? name =${localStorage.getItem('user')}`, httpHeader)
            .then(res => {
                setData(res.data);
                setLoading(false);
            });

    }, []);

     */
    if (isLoading) {
        return <Facebook/>
    }

    return (
        <ProfileTabWrapper>
            <ProfileTabHeader>Üyelik Bilgilerim</ProfileTabHeader>
            <ProfileTabForm>
                <ProfileTabInput defaultValue={data.fullName}/>
                <ProfileTabInput defaultValue={data.literaryMovement}/>
                <ProfileTabInput defaultValue={data.birthday}/>
            </ProfileTabForm>
        </ProfileTabWrapper>
    )
};

export default ProfileInformation;
