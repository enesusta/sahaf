package com.github.enesusta.sahaf.admin;

import com.github.enesusta.sahaf.admin.service.AdminService;
import com.github.enesusta.sahaf.author.Author;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@Slf4j
public class AdminController {

    private final AdminService adminService;
    private final Executor executor;

    @GetMapping
    public CompletableFuture<Set<Author>> getAll() {
        return CompletableFuture.supplyAsync(adminService::getAll, executor);
    }

    @DeleteMapping
    public CompletableFuture<Void> deleteAuthor(@RequestParam String name) {
        return CompletableFuture.runAsync(() -> adminService.deleteAuthor(name), executor);
    }

}
