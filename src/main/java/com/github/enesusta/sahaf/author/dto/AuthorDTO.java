package com.github.enesusta.sahaf.author.dto;

import com.github.enesusta.sahaf.book.Book;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class AuthorDTO {

    private String fullName;
    private String literary;
    private short birthday;
    private Set<Book> books;
    private Date createdDate;

}
