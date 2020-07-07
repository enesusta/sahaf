package com.github.enesusta.sahaf.author;

import com.github.enesusta.sahaf.author.repository.AuthorRepository;
import com.github.enesusta.sahaf.author.service.AuthorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;
import java.util.function.Supplier;

@RestController
@RequestMapping("/author")
@RequiredArgsConstructor
@Slf4j
public class AuthorController {

    private final AuthorRepository authorRepository;
    private final AuthorService authorService;

    @PostMapping
    public void saveAuthor(@RequestBody Author author) {
        log.info("An request has been come");
        authorRepository.save(author);
    }

    @GetMapping
    public final CompletableFuture<Author> findByName(@RequestParam String name) {
        final Supplier<Author> authorSupplier = authorService.findByFullName(name);
        return CompletableFuture.supplyAsync(authorSupplier);
    }

}
