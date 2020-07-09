package com.github.enesusta.sahaf.author;

import com.github.enesusta.sahaf.author.repository.AuthorRepository;
import com.github.enesusta.sahaf.author.service.AuthorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.function.Supplier;

@RestController
@RequestMapping("/author")
@RequiredArgsConstructor
@Slf4j
public class AuthorController {

    private final AuthorRepository authorRepository;
    private final AuthorService authorService;

    @GetMapping
    public final CompletableFuture<Author> findByName(@RequestParam String name) {
        final Supplier<Author> authorSupplier = authorService.findByFullName(name);
        return CompletableFuture.supplyAsync(authorSupplier);
    }

    @GetMapping("/all")
    public final List<Author> getAll() {
        log.info("geliyor");
        return authorRepository.findAll();
    }

}
