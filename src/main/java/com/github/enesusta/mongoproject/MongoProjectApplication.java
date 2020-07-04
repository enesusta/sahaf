package com.github.enesusta.mongoproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
@EnableMongoAuditing
public class MongoProjectApplication {
	public static void main(String[] args) {
		SpringApplication.run(MongoProjectApplication.class, args);

	}
}
