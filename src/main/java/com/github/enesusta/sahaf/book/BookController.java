package com.github.enesusta.sahaf.book;

import com.github.enesusta.sahaf.author.Author;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
@Slf4j
public class BookController {

    private final MongoTemplate mongoTemplate;

    @PostMapping
    public void save(@RequestBody Book book) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(book.getAuthor()));
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);
        final Set<Book> books = author.getBooks();

        books.add(book);
        final Update update = new Update();
        update.set("books", books);

        mongoTemplate.updateFirst(findByNameQuery, update, Author.class);
        log.info("new book added!");
    }

}
