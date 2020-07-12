package com.github.enesusta.sahaf.admin.service;

import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.author.repository.AuthorRepository;
import com.github.enesusta.sahaf.author.service.AuthorService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class DefaultAdminService implements AdminService {

    private final AuthorService authorService;
    private final AuthorRepository authorRepository;

    @Override
    public void deleteAuthor(String name) {
        final Author author = authorService.findByFullName(name).get();
        authorRepository.delete(author);
    }

    @Override
    public Set<Author> getAll() {
        return new HashSet<>(authorRepository.findAll());
    }
}
