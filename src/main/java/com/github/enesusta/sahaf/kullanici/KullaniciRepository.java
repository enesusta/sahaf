package com.github.enesusta.sahaf.kullanici;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface KullaniciRepository extends MongoRepository<Kullanici, String> {
}
