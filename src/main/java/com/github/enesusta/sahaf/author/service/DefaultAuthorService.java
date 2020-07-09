package com.github.enesusta.sahaf.author.service;

import com.github.enesusta.sahaf.authentication.cache.AuthenticationCacheService;
import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.change.PasswordChangeRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.function.Supplier;

@Service
@RequiredArgsConstructor
@Slf4j
public class DefaultAuthorService implements AuthorService {

    private final MongoTemplate mongoTemplate;
    private final PasswordEncoder passwordEncoder;

    private AuthenticationCacheService authenticationCacheService;

    @Override
    public Supplier<Author> findByFullName(final String fullName) {
        log.info("An author who attempt to get his/her information | username : {}", fullName);
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(fullName));
        return () -> mongoTemplate.findOne(findByNameQuery, Author.class);
    }

    @Override
    public Supplier<Boolean> changePassword(final PasswordChangeRequest passwordChangeRequest) {
        log.info("An author who attempt to change his/her password");

        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(passwordChangeRequest.getFullName()));
        final String newPassword = passwordEncoder.encode(passwordChangeRequest.getNewPassword());
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);

        author.setPassword(newPassword);
        authenticationCacheService.removeCache(passwordChangeRequest.getFullName());

        mongoTemplate.save(author);
        return () -> false;
    }

    @Autowired
    @Qualifier("removeAuthenticationCacheService")
    public void setAuthenticationCacheService(AuthenticationCacheService authenticationCacheService) {
        this.authenticationCacheService = authenticationCacheService;
    }
}

