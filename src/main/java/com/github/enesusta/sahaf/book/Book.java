package com.github.enesusta.sahaf.book;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.UUID;

@Document
@Data
public class Book {

    private String author;
    private String isbn = UUID.randomUUID().toString();
    private String title;
    private String language;
    private String price;
    private short pages;

    @CreatedDate
    private Date createdDate;

    @LastModifiedDate
    private Date lastModifiedDate;
}
