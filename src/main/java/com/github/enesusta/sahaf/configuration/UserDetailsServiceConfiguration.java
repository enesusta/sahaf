package com.github.enesusta.sahaf.configuration;

import com.github.enesusta.sahaf.authentication.SahafUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

@Configuration
@RequiredArgsConstructor
@Profile("prod")
public class UserDetailsServiceConfiguration {

    private final SahafUserDetailsService sahafUserDetailsService;

    @Bean
    @Profile("prod")
    public UserDetailsService userDetailsService() {
        return sahafUserDetailsService;
    }


}
