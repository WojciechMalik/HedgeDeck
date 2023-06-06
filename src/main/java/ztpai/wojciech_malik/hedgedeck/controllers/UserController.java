package ztpai.wojciech_malik.hedgedeck.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ztpai.wojciech_malik.hedgedeck.entity.User;
import ztpai.wojciech_malik.hedgedeck.repositories.UserRepository;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import java.util.Optional;
@CrossOrigin("http://localhost:3000")
@Tag(name = "Users")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @GetMapping("/{userId}")
    public User getUser(@PathVariable Integer userId) {
        return userRepository.findById(userId)
                .orElseThrow(ResourceNotFoundException::new);
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody User user) {
        Optional<User> userFromDB = userRepository.findUserByEmail(user.getEmail());

        if (userFromDB.isEmpty() || wrongPassword(userFromDB, user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok().build();
    }

    private boolean wrongPassword(Optional<User> userFromDB, String password) {
        User user = userFromDB.get();
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-1");
            byte[] hashBytes = messageDigest.digest(password.getBytes(StandardCharsets.UTF_8));
            StringBuilder stringBuilder = new StringBuilder();
            for (byte hashByte : hashBytes) {
                stringBuilder.append(Integer.toHexString((hashByte & 0xFF) | 0x100).substring(1, 3));
            }
            String hashedPassword = stringBuilder.toString();
            return !user.getPassword().equals(hashedPassword);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Error hashing password", e);
        }
    }

    @PostMapping("/add_user")
    public ResponseEntity addUser(@RequestBody User user) {
        Optional<User> userFromDB = userRepository.findUserByEmail(user.getEmail());

        if (userFromDB.isPresent()) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();
        }
        user.setPassword(user.getPassword());
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }


    @GetMapping("/id/{userEmail}")
    public int getUserIdByEmail(@PathVariable String userEmail){
        return userRepository.findUserIdByEmail(userEmail);
    }





}
