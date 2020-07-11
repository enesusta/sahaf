package com.github.enesusta.sahaf.author.service;

import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.author.dto.AuthorDTO;
import com.github.enesusta.sahaf.author.repository.AuthorRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

@Service
@RequiredArgsConstructor
@Slf4j
public class DefaultAuthorService implements AuthorService {

    private final MongoTemplate mongoTemplate;
    private final AuthorRepository authorRepository;

    @Override
    public Supplier<Author> findByFullName(final String fullName) {
        log.info("An author who attempt to get his/her information | username : {}", fullName);
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(fullName));
        return () -> mongoTemplate.findOne(findByNameQuery, Author.class);
    }

    @Override
    public Supplier<Author> findByNamePathQuery(String fullName) {
        final Query findByNameQuery = Query.query(Criteria.where("fullName").is(fullName));
        final Author author = mongoTemplate.findOne(findByNameQuery, Author.class);
        final Author temp = new Author();
        temp.setFullName(author.getFullName());
        temp.setBooks(author.getBooks());
        temp.setCreatedDate(author.getCreatedDate());
        temp.setLiterary(author.getLiterary());
        temp.setBirthday(author.getBirthday());
        return () -> temp;
    }

    @Override
    public List<AuthorDTO> getAll() {
        log.info("Get request on /author/all PATH");

        final List<Author> current = authorRepository.findAll();
        final List<AuthorDTO> authors = new ArrayList<>(32);

        current.forEach(e -> {

            AuthorDTO author = new AuthorDTO();
            author.setFullName(e.getFullName());
            author.setBirthday(e.getBirthday());
            author.setBooks(e.getBooks());
            author.setLiterary(e.getLiterary());
            authors.add(author);

        });

        return authors;
    }


}

