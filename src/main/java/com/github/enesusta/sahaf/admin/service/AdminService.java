package com.github.enesusta.sahaf.admin.service;

import com.github.enesusta.sahaf.author.Author;

import java.util.Set;

public interface AdminService {
    void deleteAuthor(Author author);
    void updateAuthor(Author author);
    Set<Author> getAll();
}
