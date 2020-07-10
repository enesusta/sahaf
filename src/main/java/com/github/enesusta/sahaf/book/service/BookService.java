package com.github.enesusta.sahaf.book.service;

import com.github.enesusta.sahaf.book.Book;

public interface BookService {
    void save(Book book);
    boolean remove(Book book);
}
