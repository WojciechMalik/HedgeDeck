package ztpai.wojciech_malik.hedgedeck.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ztpai.wojciech_malik.hedgedeck.entity.Categories;
import ztpai.wojciech_malik.hedgedeck.entity.Set;
import ztpai.wojciech_malik.hedgedeck.entity.User;
import ztpai.wojciech_malik.hedgedeck.repositories.CategoriesRepository;
import ztpai.wojciech_malik.hedgedeck.repositories.SetRepository;
import ztpai.wojciech_malik.hedgedeck.repositories.UserRepository;

import java.util.List;
import java.util.Optional;

@Tag(name = "Set")
@RestController
@RequestMapping("/api/set")
public class SetController {
    @Autowired
    SetRepository setRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CategoriesRepository categoriesRepository;

    @GetMapping("/getAllSets/{user_id}")
    public List<Set> getAllSetsByUserId(@PathVariable(value = "user_id")Integer user_id){
        return setRepository.findAllSetsByUserId(user_id);
    }

    @GetMapping("/getSet/{id_set}")
    public Optional<Set> getSetById(@PathVariable(value = "id_set") int id_set){
        return setRepository.findById(id_set);
    }

    @PostMapping("/addSet/{userId}")
    public ResponseEntity<String> addSet(@PathVariable(value = "userId") int userId, @RequestBody String setName) {
        Optional<User> userFromDB = userRepository.findById(userId);

        Set savedSet = new Set(
                setName,
                userFromDB.get()
        );

        setRepository.save(savedSet);
        return ResponseEntity.ok("Set o podanym urzytkowniku został utworzony");
    }


    @DeleteMapping("/deleteSet/{id_set}")
    public void deleteTaskById(@PathVariable(value = "id_set") int id_set){
         setRepository.deleteById(id_set);
    }





}
