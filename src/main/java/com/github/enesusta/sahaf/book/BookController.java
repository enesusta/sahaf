package com.github.enesusta.sahaf.book;

import com.github.enesusta.sahaf.book.dto.BookDTO;
import com.github.enesusta.sahaf.book.exception.BookNotFoundException;
import com.github.enesusta.sahaf.book.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;


@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
@Slf4j
public class BookController {

    private final BookService bookService;
    private final Executor executor;

    @PostMapping
    public void save(@RequestBody Book book) {
        bookService.save(book);
    }

    @GetMapping("/all")
    public CompletableFuture<Set<BookDTO>> getAllBooks() throws BookNotFoundException {
        return CompletableFuture.supplyAsync(bookService::getAllBooks, executor);
    }

    @GetMapping
    public CompletableFuture<Set<BookDTO>> getBooks() throws BookNotFoundException {
        final User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        final Set<BookDTO> books = bookService.getBooks(user.getUsername());
        if (books.size() == 0) throw new BookNotFoundException();
        /**
         * Null olamaz zira BookDTORepository içinde initialize ettim. dolayısı ile size'i check ediyorum.
         */
        return CompletableFuture.supplyAsync(() -> books, executor);
    }

    @PutMapping
    public CompletableFuture<Boolean> updateBook(@RequestBody Book book) {
        return CompletableFuture.supplyAsync(() -> bookService.update(book), executor);
    }

    @DeleteMapping
    public CompletableFuture<Boolean> deleteBook(@RequestBody Book book) {
        return CompletableFuture.supplyAsync(() -> bookService.delete(book), executor);
    }

}
