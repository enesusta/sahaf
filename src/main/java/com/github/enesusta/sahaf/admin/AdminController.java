package com.github.enesusta.sahaf.admin;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@Slf4j
public class AdminController {

    @GetMapping
    public String getAdminString() {
        log.info("Admin get resource from endpoint");
        return "enes";
    }

}
