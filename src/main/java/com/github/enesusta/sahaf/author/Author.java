package com.github.enesusta.sahaf.author;

import com.github.enesusta.sahaf.book.Book;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.Set;

@Document
@Getter
@Setter
@ToString
public class Author {

    @Indexed(unique = true)
    private String fullName;

    private String password;

    /**
     * Standart bir yazar için belirlenen yetkiler aşağıdaki şekildedir:
     * - BOOK_WRITE = İlgili yazarın sisteme kitap girdisi yapabilmesi için
     * - BOOK_READ = İlgili yazarın sistemden kitap okuyabilmesi için
     *
     * admin kullanıcısı bu yetkilerden birini veya her ikisinide alarak ilgili kullanıcının sisteme
     * erişimini kısıtlayabilir.
     */

    private Set<String> authorRoles = Set.of("BOOK_WRITE", "BOOK_READ");


    private String literaryMovement;

    private short birthday;

    private Set<Book> books;

    @CreatedDate
    private Date createdDate;

    @LastModifiedDate
    private Date lastModifiedDate;
}
