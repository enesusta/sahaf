package com.github.enesusta.sahaf.change;

import lombok.Data;

@Data
public class PasswordChangeRequest {
    private String fullName;
    private String newPassword;
}
