package com.github.enesusta.sahaf.authentication.cache;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.enesusta.sahaf.author.Author;
import com.github.enesusta.sahaf.author.service.AuthorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.exceptions.JedisException;

import java.util.Optional;

@Component
@Slf4j
@RequiredArgsConstructor
public class DefaultAuthenticationCacheService implements AuthenticationCacheService {

    private final JedisPool jedisPool;
    private final ObjectMapper objectMapper;
    private final AuthorService authorService;

    @Override
    public Author get(String username) {

        Author author = null;

        try (Jedis jedis = jedisPool.getResource()) {
            final String cachedUserJson = jedis.get(username);

            if (cachedUserJson != null) {
                author = objectMapper.readValue(cachedUserJson, Author.class);
            } else {
                author = Optional
                        .ofNullable(authorService.findByFullName(username).get())
                        .orElseThrow(() -> new UsernameNotFoundException("Author not found : " + username));
                jedis.set(username, objectMapper.writeValueAsString(author));
            }

        } catch (JsonMappingException e) {
            log.error(e.getMessage());
        } catch (JedisException | JsonProcessingException e) {
            log.error(e.getMessage());
        }

        return author;
    }

    @Override
    public void removeCache(String username) {



    }
}
