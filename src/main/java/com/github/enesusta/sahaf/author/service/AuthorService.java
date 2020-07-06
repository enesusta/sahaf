package com.github.enesusta.sahaf.author.service;

import com.github.enesusta.sahaf.author.Author;

import java.util.function.Supplier;

public interface AuthorService {
    Supplier<Author> findByFullName(String fullName);
}
