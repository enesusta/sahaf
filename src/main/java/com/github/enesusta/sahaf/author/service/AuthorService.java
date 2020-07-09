package com.github.enesusta.sahaf.author.service;

import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.change.PasswordChangeRequest;
import com.mongodb.client.result.UpdateResult;

import java.util.function.Supplier;

public interface AuthorService {
    Supplier<Author> findByFullName(String fullName);
    Supplier<Boolean> changePassword(PasswordChangeRequest passwordChangeRequest);
}
