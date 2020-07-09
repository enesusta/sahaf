import React from 'react';
import {useAuthFetch} from "kanca/http";

const Authors = () => {
    const {data, isLoading, error} = useAuthFetch('/author/all')

    if (isLoading)
        return <li>is loading</li>

    return (
        <li>{JSON.stringify(data)}</li>
    )

};

export default Authors;
