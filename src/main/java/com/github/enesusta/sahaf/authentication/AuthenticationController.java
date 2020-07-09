package com.github.enesusta.sahaf.authentication;

import com.github.enesusta.sahaf.authentication.repository.AuthenticationRepository;
import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.spring.security.jwt.JsonWebTokenManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@Slf4j
@RequiredArgsConstructor
public class AuthenticationController {

    private final JsonWebTokenManager jsonWebTokenManager;
    private final AuthenticationRepository authenticationRepository;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody final Author author) throws UsernameNotFoundException {
        final UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(author.getFullName(), author.getPassword());
        authenticationManager.authenticate(authenticationToken);
        final String authToken = jsonWebTokenManager.generateToken(author.getFullName());
        return ResponseEntity.ok(authToken);
    }

    @PostMapping("/register")
    public ResponseEntity<Boolean> register(@RequestBody final Author author) {
        boolean result = authenticationRepository.register(author);
        return ResponseEntity.ok(result);
    }

}
