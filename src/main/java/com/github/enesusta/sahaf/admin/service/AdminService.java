package com.github.enesusta.sahaf.admin.service;

import com.github.enesusta.sahaf.author.Author;

import java.util.Set;

public interface AdminService {
    void deleteAuthor(String name);
    Set<Author> getAll();
}
