package ztpai.wojciech_malik.hedgedeck.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ztpai.wojciech_malik.hedgedeck.entity.User;
import ztpai.wojciech_malik.hedgedeck.repositories.UserRepository;

import java.util.Optional;

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
    public ResponseEntity login(@RequestBody User user){
        Optional<User> userFromDB = userRepository.findUserByEmail(user.getEmail());

        if(userFromDB.isEmpty() || wrongPassword(userFromDB,user)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok().build();
    }

    private boolean wrongPassword(Optional<User> userFromDB, User user) {
        return !userFromDB.get().getPassword().equals(user.getPassword());
    }







}
