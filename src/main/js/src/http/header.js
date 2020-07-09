const httpHeader = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
}

export default httpHeader;
