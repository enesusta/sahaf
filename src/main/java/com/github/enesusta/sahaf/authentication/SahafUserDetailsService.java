package com.github.enesusta.sahaf.authentication;

import com.github.enesusta.sahaf.authentication.cache.AuthenticationCacheService;
import com.github.enesusta.sahaf.author.Author;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
@RequiredArgsConstructor
@Slf4j
public class SahafUserDetailsService implements UserDetailsService {

    private AuthenticationCacheService authenticationCacheService;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        final Author author = authenticationCacheService.get(s);
        final Set<GrantedAuthority> authoritySet = new HashSet<>();

        author.getAuthorRoles().stream().map(SimpleGrantedAuthority::new).forEach(authoritySet::add);
        return new User(author.getFullName(), author.getPassword(), authoritySet);
    }

    @Autowired
    @Qualifier("defaultAuthenticationCacheService")
    public void setAuthenticationCacheService(AuthenticationCacheService authenticationCacheService) {
        this.authenticationCacheService = authenticationCacheService;
    }
}
