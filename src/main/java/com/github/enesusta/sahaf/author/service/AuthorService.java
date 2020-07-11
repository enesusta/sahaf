package com.github.enesusta.sahaf.author.service;

import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.author.dto.AuthorDTO;

import java.util.List;
import java.util.function.Supplier;

public interface AuthorService {
    Supplier<Author> findByFullName(String fullName);
    Supplier<AuthorDTO> findByNamePathQuery(String fullName);
    List<AuthorDTO> getAll();
}
