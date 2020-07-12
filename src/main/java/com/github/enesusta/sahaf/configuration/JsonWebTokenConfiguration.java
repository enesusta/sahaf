package com.github.enesusta.sahaf.configuration;

import com.github.enesusta.spring.security.jwt.JsonWebTokenManager;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:application.yml")
public class JsonWebTokenConfiguration {

    @Value("${jwt.secret.key}")
    private String secretKey;

    @Value("${jwt.secret.validity}")
    private String validity;

    /**
     * {@link JsonWebTokenManager} ilgili sınıfı ben yazdım.
     Dürüst olmak gerekirse vakit ayıramadığım için dökümantasyon hazırlayamadım. Benzer projelerde çokça
     kullandığım için bu tarz birşey yazma ihtiyacı hasıl oldu.

     Benzer sebeplerle yazmis oldugum ve maven central repoya deploy etmis oldugum diger kutuphaneler:
     - redis-starter
     - spring-security-starter
     - jdbc-starter
     - mongodb-starter

     Söz konusu proje OSSRH (  https://central.sonatype.org/pages/ossrh-guide.html ) üzerinden maven central'a deploy edildi.
     pom.xml uzerinde dikkat ederseniz;

     <dependency>
        <groupId>com.github.enesusta</groupId>
         <artifactId>spring-security-starter</artifactId>
         <version>1.0.0</version>
         <exclusions>
             <exclusion>
                 <groupId>org.springframework.security</groupId>
                 <artifactId>spring-security-core</artifactId>
                 </exclusion>
         </exclusions>
     </dependency>

     spring-security-starter artifactID ile deploy ettim. Soz konusu kaynak kod icin asagidaki link:
     * https://github.com/enesusta/spring-security-starter/blob/master/src/main/java/com/github/enesusta/spring/security/jwt/JsonWebTokenManager.java
     * @return
     */

    @Bean
    public JsonWebTokenManager jsonWebTokenManager() {
        return new JsonWebTokenManager(secretKey, 1000 * 60 * 60);
    }

}
