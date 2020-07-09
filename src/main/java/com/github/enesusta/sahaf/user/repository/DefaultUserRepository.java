package com.github.enesusta.sahaf.user.repository;

import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.author.repository.AuthorRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
@Slf4j
public class DefaultUserRepository implements UserRepository {

    private final AuthorRepository authorRepository;

    @Override
    public List<Author> getAll() {

        final List<Author> current = authorRepository.findAll();
        final List<Author> authors = new ArrayList<>(32);

        current.forEach(e -> {

            Author author = new Author();
            author.setFullName(e.getFullName());
            author.setBirthday(e.getBirthday());
            author.setBooks(e.getBooks());
            author.setLiterary(e.getLiterary());
            authors.add(author);

        });

        return authors;
    }
}
