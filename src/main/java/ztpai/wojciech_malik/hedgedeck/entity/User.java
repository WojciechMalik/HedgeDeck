package ztpai.wojciech_malik.hedgedeck.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


import java.util.List;

@Data
@Entity
@Table(name = "users")
public class User {

    @JsonIgnore
    @Id
    @GeneratedValue
    private int id_user;

    private String email;

    private String password;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "id_user_details")
    private UserDetails userDetails;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Set> set;

    public void setPassword(String password) {
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-1");
            byte[] hashBytes = messageDigest.digest(password.getBytes(StandardCharsets.UTF_8));
            StringBuilder stringBuilder = new StringBuilder();
            for (byte hashByte : hashBytes) {
                stringBuilder.append(Integer.toHexString((hashByte & 0xFF) | 0x100).substring(1, 3));
            }
            this.password = stringBuilder.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Error hashing password", e);
        }
    }

}
