package com.github.enesusta.sahaf.authentication.cache;

import com.github.enesusta.sahaf.author.Author;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.exceptions.JedisException;

@Component
@RequiredArgsConstructor
@Slf4j
public class RemoveAuthenticationCacheService implements AuthenticationCacheService {

    private final JedisPool jedisPool;

    @Override
    public Author get(String username) {
        return null;
    }

    @Override
    public void flushAll() {
        try (Jedis jedis = jedisPool.getResource()) {
            jedis.flushAll();
        } catch (JedisException e) {
            log.error(e.getMessage());
        }
    }
}
