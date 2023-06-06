package ztpai.wojciech_malik.hedgedeck.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ztpai.wojciech_malik.hedgedeck.entity.User;
import ztpai.wojciech_malik.hedgedeck.entity.UserDetails;
import ztpai.wojciech_malik.hedgedeck.repositories.SetRepository;
import ztpai.wojciech_malik.hedgedeck.repositories.UserDetailsRepository;
import ztpai.wojciech_malik.hedgedeck.repositories.UserRepository;

import java.util.Optional;

@CrossOrigin("http://localhost:3000")
@Tag(name = "UserDetails")
@RestController
@RequestMapping("/api/userDetails")
public class UserDetailsController {
    @Autowired
    UserDetailsRepository userDetailsRepository;
    @Autowired
    UserRepository userRepository;

    @PostMapping("/add_user_details/{userId}")
    public ResponseEntity addUserDetails(@PathVariable(value = "userId") Integer userId, @RequestBody UserDetails userDetails){
        Optional<User> userFromDB = userRepository.findById(userId);

        UserDetails savedUserDetails = new UserDetails(userDetails.getName(), userDetails.getSurname());
        savedUserDetails.setUser(userFromDB.get());
        userDetailsRepository.save(savedUserDetails);

        User user = userFromDB.get();
        user.setUserDetails(savedUserDetails);
        userRepository.save(user);

        return ResponseEntity.ok(savedUserDetails);
    }
}
