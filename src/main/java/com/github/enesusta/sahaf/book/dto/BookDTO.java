package com.github.enesusta.sahaf.book.dto;

import lombok.Data;

@Data
public class BookDTO {

    private String isbn;
    private String title;
    private String language;
    private String price;
    private short pages;

}
