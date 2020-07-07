package com.github.enesusta.sahaf.configuration;

import com.github.enesusta.redis.PoolRedisDataSource;
import com.github.enesusta.redis.RedisConfiguration;
import com.github.enesusta.redis.RedisDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import redis.clients.jedis.JedisPool;

@Configuration
public class RedisDataSourceConfiguration {

    @Value("${spring.redis.jedis.password}")
    private String password;

    @Bean
    public JedisPool jedisPool() {
        final RedisConfiguration redisConfiguration = new RedisConfiguration.RedisCongurationBuilder()
                .password(password)
                .build();

        final RedisDataSource<JedisPool> jedisPoolRedisDataSource = new PoolRedisDataSource(redisConfiguration);
        return jedisPoolRedisDataSource.getRedisDataSource();
    }

}
