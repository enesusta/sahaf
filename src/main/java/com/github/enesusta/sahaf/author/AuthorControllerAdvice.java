package com.github.enesusta.sahaf.author;

import com.mongodb.MongoWriteException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(assignableTypes = AuthorController.class)
@Slf4j
public class AuthorControllerAdvice {

    @ExceptionHandler(MongoWriteException.class)
    public ResponseEntity<String> handleMongoDuplicateWriteException(MongoWriteException e) {
        log.error(e.getMessage());
        return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
    }

}