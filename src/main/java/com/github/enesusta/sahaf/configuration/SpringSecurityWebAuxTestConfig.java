package com.github.enesusta.sahaf.configuration;

import com.github.enesusta.sahaf.security.UserImpl;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import java.util.List;

@TestConfiguration
@Profile("test")
public class SpringSecurityWebAuxTestConfig {

    @Bean
    public UserDetailsService userDetailsService() {

        final SimpleGrantedAuthority BOOK_WRITE = new SimpleGrantedAuthority("BOOK_WRITE");
        final SimpleGrantedAuthority BOOK_READ = new SimpleGrantedAuthority("BOOK_READ");
        final SimpleGrantedAuthority ADMIN = new SimpleGrantedAuthority("ADMIN");

        User basicUser = new UserImpl("testuser", "testuser", List.of(BOOK_WRITE, BOOK_READ));
        User adminUser = new UserImpl("enesusta", "admin", List.of(BOOK_WRITE, BOOK_READ, ADMIN));

        return new InMemoryUserDetailsManager(basicUser, adminUser);
    }

}
