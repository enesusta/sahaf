package com.github.enesusta.sahaf.author.service;

import com.github.enesusta.sahaf.author.Author;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.function.Supplier;

@Service
@RequiredArgsConstructor
@Slf4j
public class DefaultAuthorService implements AuthorService {

    private final MongoTemplate mongoTemplate;

    @Override
    public Supplier<Author> findByFullName(final String fullName) {
        log.info("An author who attempt to get his/her information | username : {}", fullName);
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(fullName));
        return () -> mongoTemplate.findOne(findByNameQuery, Author.class);
    }


}

