package com.github.enesusta.sahaf.authentication.repository;

import com.github.enesusta.sahaf.author.Author;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
@Slf4j
public class DefaultAuthenticationRepository implements AuthenticationRepository {

    private final MongoTemplate mongoTemplate;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Optional<Author> findByUsername(final String username) {
        log.info("An author attempted to login..");
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(username));
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);
        return Optional.ofNullable(author);
    }

    @Override
    public boolean register(final Author author) {
        log.info("An author attempted to register..");
        Author temp = author;
        final String encodedPassword = passwordEncoder.encode(temp.getPassword());
        temp.setPassword(encodedPassword);
        return mongoTemplate.save(temp) != null;
    }
}
