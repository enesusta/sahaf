package com.github.enesusta.sahaf.kullanici;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class KullaniciController {

    private final KullaniciRepository kullaniciRepository;

    public ResponseEntity<Kullanici> ekle(Kullanici kullanici) {
        return ResponseEntity.ok(kullaniciRepository.save(kullanici));
    }

    @GetMapping
    public ResponseEntity<List<Kullanici>> listele() {
        return ResponseEntity.ok(kullaniciRepository.findAll());
    }

}
