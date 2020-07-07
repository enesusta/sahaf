package com.github.enesusta.sahaf.configuration;

import com.github.enesusta.sahaf.authentication.SahafUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
@RequiredArgsConstructor
public class UserDetailsServiceConfiguration {

    private final SahafUserDetailsService sahafUserDetailsService;

    @Primary
    @Bean
    public UserDetailsService userDetailsService() {
        return sahafUserDetailsService;
    }

}
