package com.github.enesusta.sahaf.user.repository;

import com.github.enesusta.sahaf.author.Author;

import java.util.List;

public interface UserRepository {
    List<Author> getAll();
}
