package com.github.enesusta.sahaf.author.repository;

import com.github.enesusta.sahaf.author.Author;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AuthorRepository extends MongoRepository<Author, String> {
    Author findByFullName(String fullName);
}
