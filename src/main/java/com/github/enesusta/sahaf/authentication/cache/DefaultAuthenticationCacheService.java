package com.github.enesusta.sahaf.authentication.cache;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.enesusta.sahaf.author.Author;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import redis.clients.jedis.JedisPool;

@Service
@Slf4j
@RequiredArgsConstructor
public class DefaultAuthenticationCacheService implements AuthenticationCacheService {

    private final JedisPool jedisPool;
    private final ObjectMapper objectMapper;

    @Override
    public Author getCache(String username) {

        Author author = null;


        return null;
    }
}
