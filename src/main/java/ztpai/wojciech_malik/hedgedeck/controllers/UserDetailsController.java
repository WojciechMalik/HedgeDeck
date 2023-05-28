package ztpai.wojciech_malik.hedgedeck.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ztpai.wojciech_malik.hedgedeck.repositories.SetRepository;
import ztpai.wojciech_malik.hedgedeck.repositories.UserDetailsRepository;
import ztpai.wojciech_malik.hedgedeck.repositories.UserRepository;
@CrossOrigin("http://localhost:3000")
@Tag(name = "UserDetails")
@RestController
@RequestMapping("/api/userDetails")
public class UserDetailsController {
    @Autowired
    UserDetailsRepository userDetailsRepository;
    @Autowired
    UserRepository userRepository;

}
