package com.github.enesusta.sahaf.author;

import com.github.enesusta.sahaf.book.Book;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Document
@Getter
@Setter
@ToString
public class Author {

    @Indexed(unique = true)
    private String fullName;
    private String literaryMovement;
    private short birthday;
    private Set<Book> books = new HashSet<>();

    @CreatedDate
    private Date createdDate;

    @LastModifiedDate
    private Date lastModifiedDate;
}
