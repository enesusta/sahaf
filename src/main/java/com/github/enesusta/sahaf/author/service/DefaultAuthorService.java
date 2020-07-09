package com.github.enesusta.sahaf.author.service;

import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.change.PasswordChangeRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.function.Supplier;

@Service
@RequiredArgsConstructor
public class DefaultAuthorService implements AuthorService {

    private final MongoTemplate mongoTemplate;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Supplier<Author> findByFullName(final String fullName) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(fullName));
        return () -> mongoTemplate.findOne(findByNameQuery, Author.class);
    }

    @Override
    public Supplier<Boolean> changePassword(final PasswordChangeRequest passwordChangeRequest) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(passwordChangeRequest.getFullName()));
        final String newPassword = passwordEncoder.encode(passwordChangeRequest.getNewPassword());
        final Update update = new Update();
        update.set("password", newPassword);
        return () -> mongoTemplate.updateFirst(findByNameQuery, update, Author.class).wasAcknowledged();
    }

}
