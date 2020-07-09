package com.github.enesusta.sahaf.author;

import com.github.enesusta.sahaf.author.repository.AuthorRepository;
import com.github.enesusta.sahaf.author.service.AuthorService;
import com.github.enesusta.sahaf.change.PasswordChangeRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    public final CompletableFuture<Author> findByName() {
        final User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        final Supplier<Author> authorSupplier = authorService.findByFullName(user.getUsername());
        return CompletableFuture.supplyAsync(authorSupplier);
    }

    @GetMapping("/search")
    public final CompletableFuture<Author> findByNamePathQuery(@RequestParam String name) {
        return CompletableFuture.supplyAsync(authorService.findByNamePathQuery(name));
    }

    @PutMapping
    public final CompletableFuture<Boolean> changePassword(@RequestBody PasswordChangeRequest passwordChangeRequest) {
        //       final Supplier<Boolean> changeSupplier = authorService.changePassword(passwordChangeRequest);
        return null;
//        return CompletableFuture.supplyAsync(changeSupplier);
    }

    @GetMapping("/all")
    public final List<Author> getAll() {
        return authorRepository.findAllByQuery();
    }


}
