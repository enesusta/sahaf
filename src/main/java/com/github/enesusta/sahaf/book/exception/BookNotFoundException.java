package com.github.enesusta.sahaf.book.exception;

import java.util.function.Supplier;

public class BookNotFoundException extends Exception implements Supplier<BookNotFoundException> {

    public BookNotFoundException() {
        super("Kayıtlı herhangi bir kitap bulunamadı!");
    }

    @Override
    public BookNotFoundException get() {
        return new BookNotFoundException();
    }
}
