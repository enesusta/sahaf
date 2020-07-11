package com.github.enesusta.sahaf.author;

import com.github.enesusta.sahaf.author.dto.AuthorDTO;
import com.github.enesusta.sahaf.author.exception.AuthorNotFoundException;
import com.github.enesusta.sahaf.author.service.AuthorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
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

    private final AuthorService authorService;

    @GetMapping
    public final CompletableFuture<Author> findByName() {
        final User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        final Supplier<Author> authorSupplier = authorService.findByFullName(user.getUsername());
        return CompletableFuture.supplyAsync(authorSupplier);
    }

    @GetMapping("/search")
    public final CompletableFuture<AuthorDTO> findByNamePathQuery(@RequestParam String name) {
        return CompletableFuture.supplyAsync(authorService.findByNamePathQuery(name));
    }

    @GetMapping("/all")
    public final CompletableFuture<List<AuthorDTO>> getAll() throws AuthorNotFoundException {
        final List<AuthorDTO> list = authorService.getAll();
        log.info("size {}", list.size());
        if (list.size() == 0 || list == null) throw new AuthorNotFoundException();
        return CompletableFuture.supplyAsync(() -> list);
    }


}
