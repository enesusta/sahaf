package com.github.enesusta.sahaf.authentication.cache;

import com.github.enesusta.sahaf.author.Author;

public interface AuthenticationCacheService {
    Author get(String username);
    void flushAll();
}
