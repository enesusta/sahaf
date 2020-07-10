package com.github.enesusta.sahaf.book.service;

import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.book.Book;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class DefaultBookService implements BookService {

    private final MongoTemplate mongoTemplate;

    @Override
    public void save(Book book) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(book.getAuthor()));
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);

        Set<Book> books = author.getBooks();
        if (books == null) books = new HashSet<>();

        books.add(book);
        final Update update = new Update();
        update.set("books", books);
        mongoTemplate.updateFirst(findByNameQuery, update, Author.class);
        log.info("New book added ID {}", author.getFullName());
    }

    @Override
    public boolean remove(Book book) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(book.getAuthor()));
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);
        final Set<Book> books = author.getBooks();
        return books.removeIf(e -> e.getTitle().equals(book.getTitle()));
    }
}
