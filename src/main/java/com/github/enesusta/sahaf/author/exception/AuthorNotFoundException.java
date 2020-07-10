package com.github.enesusta.sahaf.author.exception;

import java.util.function.Supplier;

public class AuthorNotFoundException extends Exception implements Supplier<AuthorNotFoundException> {

    public AuthorNotFoundException() {
        super("Kayıtlı yazar bulunamadı!");
    }

    @Override
    public AuthorNotFoundException get() {
        return new AuthorNotFoundException();
    }
}
