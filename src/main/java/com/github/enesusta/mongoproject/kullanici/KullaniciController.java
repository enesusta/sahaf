package com.github.enesusta.mongoproject.kullanici;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class KullaniciController {

    private final KullaniciRepository kullaniciRepository;

    @PostConstruct
    void init() {
        Kullanici kullanici = new Kullanici();
        kullanici.setAd("enes");
        kullanici.setSoyad("usta");
        kullanici.setIpList(Arrays.asList(new UserIP("1.1.1.1"), new UserIP("1.2.3.1")));
        kullaniciRepository.save(kullanici);
    }

    public ResponseEntity<Kullanici> ekle(Kullanici kullanici) {
        return ResponseEntity.ok(kullaniciRepository.save(kullanici));
    }

    @GetMapping
    public ResponseEntity<List<Kullanici>> listele() {
        return ResponseEntity.ok(kullaniciRepository.findAll());
    }

}
