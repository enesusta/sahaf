package com.github.enesusta.sahaf.book.repository;

import com.github.enesusta.sahaf.book.dto.BookDTO;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Set;

import static org.hamcrest.Matchers.*;
import static org.hamcrest.MatcherAssert.*;

@ExtendWith(SpringExtension.class)
class DefaultBookDTORepositoryTest {

    @Mock
    private BookDTORepository bookDTORepository;

    @Test
    public void shouldReturnAuthorNameOfGivenParameter() {
        BookDTO user1 = new BookDTO();
        user1.setAuthor("user1");

        BookDTO user2 = new BookDTO();
        user2.setAuthor("user2");

        Mockito.when(bookDTORepository.getAllBooks()).thenReturn(Set.of(user1, user2));

        assertThat(bookDTORepository.getAllBooks(), hasItems(user1, user2));
    }

    @Test
    public void shouldReturnRightAuthorGivenParameter() throws InterruptedException {
        BookDTO book1 = new BookDTO();
        book1.setAuthor("enesusta");
        book1.setIsbn("1");

        BookDTO book2 = new BookDTO();
        book2.setAuthor("enesusta");
        book2.setIsbn("2");

        Mockito.when(bookDTORepository.getBooksOfTheAuthor("enesusta")).thenReturn(Set.of(book1, book2));
        assertThat(bookDTORepository.getBooksOfTheAuthor("enesusta"), hasItems(book1, book2));
    }
}