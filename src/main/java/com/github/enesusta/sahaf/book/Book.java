package com.github.enesusta.sahaf.book;

import lombok.Data;

import java.util.Date;

@Data
public class Book {

    private String author;
    private String isbn;
    private String title;
    private String language;
    private String price;
    private short pages;

    private Date createdDate;

}
