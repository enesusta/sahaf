package com.github.enesusta.sahaf.authentication;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.enesusta.sahaf.authentication.repository.AuthenticationRepository;
import com.github.enesusta.sahaf.author.Author;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.exceptions.JedisException;

@Component
@RequiredArgsConstructor
@Slf4j
public class SahafUserDetailsService implements UserDetailsService {

    private final AuthenticationRepository authenticationRepository;
    private final JedisPool jedisPool;
    private final ObjectMapper objectMapper;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        Author author = null;

        try (Jedis jedis = jedisPool.getResource()) {
            final String cachedAuthorJsonString = jedis.set(s, "user");

            if (cachedAuthorJsonString != null) {

            }


        } catch (JedisException e) {
            log.error(e.getMessage());
        }


        return null;
    }
}
