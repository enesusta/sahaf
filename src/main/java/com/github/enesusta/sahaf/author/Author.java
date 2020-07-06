package com.github.enesusta.sahaf.author;

import com.github.enesusta.sahaf.book.Book;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.Set;

@Document
@Data
public class Author {

    private String fullName;
    private String literaryMovement;
    private short birthday;
    private Set<Book> books;

    @CreatedDate
    private Date createdDate;

    @LastModifiedDate
    private Date lastModifiedDate;
}
