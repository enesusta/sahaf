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

    /**
     * {@link RedisDataSource} ilgili sınıfı ben yazdım.
     * Dürüst olmak gerekirse vakit ayıramadığım için dökümantasyon hazırlayamadım. Benzer projelerde çokça
     * kullandığım için bu tarz birşey yazma ihtiyacı hasıl oldu.
     * <p>
     * Benzer sebeplerle yazmis oldugum ve maven central repoya deploy etmis oldugum diger kutuphaneler:
     * - redis-starter
     * - spring-security-starter
     * - jdbc-starter
     * - mongodb-starter
     * <p>
     * Söz konusu proje OSSRH (  https://central.sonatype.org/pages/ossrh-guide.html ) üzerinden maven central'a deploy edildi.
     * pom.xml uzerinde dikkat ederseniz;
     *
     * <dependency>
     * <groupId>com.github.enesusta</groupId>
     * <artifactId>redis-starter</artifactId>
     * <version>1.0.0</version>
     * </dependency>
     * <p>
     * redis-starter artifactID ile deploy ettim. Soz konusu kaynak kod icin asagidaki link:
     * https://github.com/enesusta/redis-starter
     *
     * @return
     */

    @Bean
    public JedisPool jedisPool() {
        final RedisConfiguration redisConfiguration = new RedisConfiguration.RedisCongurationBuilder()
                .port(6379)
                .host("100.25.179.179")
                .password(password)
                .build();

        final RedisDataSource<JedisPool> jedisPoolRedisDataSource = new PoolRedisDataSource(redisConfiguration);
        return jedisPoolRedisDataSource.getRedisDataSource();
    }

}
