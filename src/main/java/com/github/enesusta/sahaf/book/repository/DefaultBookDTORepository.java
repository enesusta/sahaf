package com.github.enesusta.sahaf.book.repository;

import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.book.Book;
import com.github.enesusta.sahaf.book.dto.BookDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Set;

@Repository
@RequiredArgsConstructor
@Slf4j
public class DefaultBookDTORepository implements BookDTORepository {

    private final MongoTemplate mongoTemplate;

    @Override
    public Set<BookDTO> getBooksOfTheAuthor(final String authorName) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(authorName));
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);
        final Set<Book> books = author.getBooks();
        final Set<BookDTO> dtoBooks = new HashSet<>();

        books
                .stream()
                .map(e -> {
                    final BookDTO bookDTO = new BookDTO();
                    bookDTO.setIsbn(e.getIsbn());
                    bookDTO.setLanguage(e.getLanguage());
                    bookDTO.setPages(e.getPages());
                    bookDTO.setTitle(e.getTitle());
                    bookDTO.setPrice(e.getPrice());
                    return bookDTO;
                }).forEach(dtoBooks::add);

        return dtoBooks;
    }
}
