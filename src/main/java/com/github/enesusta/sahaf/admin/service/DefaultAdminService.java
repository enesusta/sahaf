package com.github.enesusta.sahaf.admin.service;

import com.github.enesusta.sahaf.authentication.cache.AuthenticationCacheService;
import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.author.repository.AuthorRepository;
import com.github.enesusta.sahaf.author.service.AuthorService;
import com.mongodb.client.result.DeleteResult;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class DefaultAdminService implements AdminService {

    private final AuthorRepository authorRepository;
    private final MongoTemplate mongoTemplate;
    private AuthenticationCacheService authenticationCacheService;


    @Override
    public void updateAuthor(Author author) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(author.getFullName()));

        final Update update = new Update();
        update.set("roles", author.getRoles());
        update.set("literary", author.getLiterary());
        update.set("birthday", author.getBirthday());

        mongoTemplate.updateFirst(findByNameQuery, update, Author.class);
        authenticationCacheService.flushAll();

        /**
         * flushAll deme sebebimiz su.
         * AuthenticationFilter icinde her bir request' uzere gelen istek cache'lenen veri ile islem goruyor.
         * Dolayisi ile role'u degisen bir kullanici yetkisi oldugu halde kaynaga erisemeyebilir. gibi gibi.
         */
    }

    @Override
    public void deleteAuthor(Author author) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(author.getFullName()));
        mongoTemplate.remove(findByNameQuery, Author.class);
    }

    @Override
    public Set<Author> getAll() {
        return new HashSet<>(authorRepository.findAll());
    }


    @Autowired
    @Qualifier("removeAuthenticationCacheService")
    public void setAuthenticationCacheService(AuthenticationCacheService authenticationCacheService) {
        this.authenticationCacheService = authenticationCacheService;
    }
}
