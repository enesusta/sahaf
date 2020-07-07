package com.github.enesusta.sahaf.authentication.repository;

import com.github.enesusta.sahaf.author.Author;

import java.util.Optional;

public interface AuthenticationRepository {
    Optional<Author> findByUsername(String username);
    boolean register(Author author);
}
