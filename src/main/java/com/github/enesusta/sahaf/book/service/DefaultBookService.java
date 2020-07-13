package com.github.enesusta.sahaf.book.service;

import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.book.Book;
import com.github.enesusta.sahaf.book.dto.BookDTO;
import com.github.enesusta.sahaf.book.repository.BookDTORepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
@SuppressWarnings("Duplicates")
public class DefaultBookService implements BookService {

    private final MongoTemplate mongoTemplate;
    private final BookDTORepository bookDTORepository;

    @Override
    public void save(Book book) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(book.getAuthor()));
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);

        Set<Book> books = author.getBooks();
        if (books == null) books = new HashSet<>();

        book.setIsbn(UUID.randomUUID().toString());
        book.setCreatedDate(new Date());
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

    @Override
    public Set<BookDTO> getBooks(String authorName) {
        return bookDTORepository.getBooksOfTheAuthor(authorName);
    }

    @Override
    public Set<BookDTO> getAllBooks() {
        return bookDTORepository.getAllBooks();
    }

    @Override
    public boolean update(Book book) {
        boolean isUpdated = false;
        boolean isAdded = false;

        log.info("Accepted request {}", book.toString());

        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(book.getAuthor()));
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);
        final Set<Book> books = author.getBooks();
        final Book oldBook = books.stream().filter(e -> e.getIsbn().equals(book.getIsbn())).findFirst().get();
        book.setCreatedDate(oldBook.getCreatedDate());

        isUpdated = books.remove(oldBook);
        isAdded = books.add(book);

        final Update update = new Update();
        update.set("books", books);
        mongoTemplate.updateFirst(findByNameQuery, update, Author.class);

        return isUpdated && isAdded;
    }

    @Override
    public boolean delete(Book book) {
        boolean isDeleted = false;

        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(book.getAuthor()));
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);
        final Set<Book> books = author.getBooks();
        final Book oldBook = books.stream().filter(e -> e.getIsbn().equals(book.getIsbn())).findFirst().get();

        isDeleted = books.remove(oldBook);

        final Update update = new Update();
        update.set("books", books);
        mongoTemplate.updateFirst(findByNameQuery, update, Author.class);

        return isDeleted;
    }
}
