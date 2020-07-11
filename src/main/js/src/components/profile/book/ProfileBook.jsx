import React from "react";
import bookSvg from '../../../assets/book.svg';
import {BookImage, ProfileBooksWrapper} from "./styles/BookStyles";
import {
    ProfileTabForm,
    ProfileTabHeader,
    ProfileTabInput,
    ProfileTabLabel,
    ProfileTabWrapper
} from "../styles/ProfileStyles";

const ProfileBook = ({book}) => {

    return (
        <>
            <BookImage src={bookSvg} />
            <ProfileTabForm>
                <ProfileTabLabel>ISBN</ProfileTabLabel>
                <ProfileTabInput defaultValue={book.isbn}/>
                <ProfileTabLabel>Title</ProfileTabLabel>
                <ProfileTabInput defaultValue={book.title}/>
                <ProfileTabLabel>Price</ProfileTabLabel>
                <ProfileTabInput defaultValue={book.price}/>
            </ProfileTabForm>
        </>
    );
};

export default ProfileBook;
