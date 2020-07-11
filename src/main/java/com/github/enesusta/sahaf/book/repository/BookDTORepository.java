package com.github.enesusta.sahaf.book.repository;

import com.github.enesusta.sahaf.book.dto.BookDTO;

import java.util.Set;

public interface BookDTORepository {
    Set<BookDTO> getBooksOfTheAuthor(String authorName);
}
