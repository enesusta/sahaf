package com.github.enesusta.mongoproject.kullanici;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface KullaniciRepository extends MongoRepository<Kullanici, String> {
}
