import React from "react";
import {AuthorBooksWrapper} from "./styles/AuthorStyles";


const AuthorBook = ({books}) => {

    return (
        <ul className="table">
            <li className="table-header">
                <div className="col col-1">ISBN</div>
                <div className="col col-2">Kitap Isim</div>
                <div className="col col-3">Dil</div>
                <div className="col col-4">Sayfa Sayısı</div>
                <div className="col col-5">Fiyat</div>
            </li>
            {books.length
                ? books.map((e, i) => {
                    return (
                        <li className="table-row" key={i}>
                            <div className="col col-1" data-label="isbn">
                                {e.isbn}
                            </div>
                            <div className="col col-2" data-label="isim">
                                {e.title}
                            </div>
                            <div className="col col-3" data-label="dil">
                                {e.language}
                            </div>
                            <div className="col col-4" data-label="fiyat">
                                {e.pages}
                            </div>
                            <div className="col col-5" data-label="fiyat">
                                {e.price}
                            </div>
                        </li>
                    );
                })
                : null}
        </ul>
    );
};

export default AuthorBook;
