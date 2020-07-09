package com.github.enesusta.sahaf.author.repository;

import com.github.enesusta.sahaf.author.Author;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface AuthorRepository extends MongoRepository<Author, String> {
    Author findByFullName(String fullName);

    @Query(value = "{}", fields = "{fullName : 1, password : 0, roles : 0, literary : 1, birthday : 1, books: 1, createdDate : 1, lastModifiedDate : 0")
    List<Author> findAllByQuery();
}
