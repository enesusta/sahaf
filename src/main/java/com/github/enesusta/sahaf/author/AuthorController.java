package com.github.enesusta.sahaf.author;

import com.github.enesusta.sahaf.author.repository.AuthorRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/author")
@RequiredArgsConstructor
@Slf4j
public class AuthorController {

    private final AuthorRepository authorRepository;
    private final MongoTemplate mongoTemplate;

    @PostMapping
    public void saveAuthor(@RequestBody Author author) {
        log.info("An request has been come");
        authorRepository.save(author);
    }

    @GetMapping
    public final Author findByName(@RequestParam String name) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(name));
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);
        return author;
    }

}
