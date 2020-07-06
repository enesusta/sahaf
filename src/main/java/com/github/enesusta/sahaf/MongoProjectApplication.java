package com.github.enesusta.sahaf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
@EnableMongoRepositories
@EnableMongoAuditing
public class MongoProjectApplication {
	public static void main(String[] args) {
		SpringApplication.run(MongoProjectApplication.class, args);
	}
}
