package com.github.enesusta.sahaf.book.service;

import com.github.enesusta.sahaf.book.Book;
import com.github.enesusta.sahaf.book.dto.BookDTO;

import java.util.Set;

public interface BookService {
    void save(Book book);

    boolean remove(Book book);

    Set<BookDTO> getBooks(String authorName);
}
