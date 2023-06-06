package ztpai.wojciech_malik.hedgedeck.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ztpai.wojciech_malik.hedgedeck.entity.Categories;
import ztpai.wojciech_malik.hedgedeck.entity.Flashcard;
import ztpai.wojciech_malik.hedgedeck.entity.Set;
import ztpai.wojciech_malik.hedgedeck.entity.User;
import ztpai.wojciech_malik.hedgedeck.repositories.CategoriesRepository;
import ztpai.wojciech_malik.hedgedeck.repositories.SetRepository;
import ztpai.wojciech_malik.hedgedeck.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin("http://localhost:3000")
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
    public ResponseEntity<Set> getSetById(@PathVariable(value = "id_set") int id_set) {
        Optional<Set> optionalSet = setRepository.findById(id_set);

        if (optionalSet.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Set set = optionalSet.get();
        return ResponseEntity.ok(set);
    }

    @PutMapping("/updateSetCategory/{setId}")
    public ResponseEntity<Set> updateSetCategory(@PathVariable(value = "setId") int setId, @RequestBody ObjectNode requestObject) {
        int categoryId = requestObject.get("categoryId").asInt();

        Optional<Set> optionalSet = setRepository.findById(setId);
        Optional<Categories> optionalCategory = categoriesRepository.findById(categoryId);

        if (optionalSet.isEmpty() || optionalCategory.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Set set = optionalSet.get();
        Categories category = optionalCategory.get();

        set.setCategories(category);

        Set savedSet = setRepository.save(set);

        return ResponseEntity.ok(savedSet);
    }

    @PostMapping("/addSet")
    public ResponseEntity<Set> addSet(@RequestBody ObjectNode requestObject) {
        String title = requestObject.get("title").asText();
        int categoryId = requestObject.get("category").asInt();
        int userId = requestObject.get("tokenId").asInt();

        Optional<User> optionalUser = userRepository.findById(userId);
        User user = optionalUser.orElse(null);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        Optional<Categories> optionalCategory = categoriesRepository.findById(categoryId);

        if (optionalCategory.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Categories category = optionalCategory.get();

        Set newSet = new Set(title, user, category);
        Set savedSet = setRepository.save(newSet);
        return ResponseEntity.ok(savedSet);
    }

    @PutMapping("/updateSetTitle")
    public ResponseEntity<Set> updateSetTitle(@RequestBody ObjectNode requestObject) {
        Integer setId = requestObject.get("setId").asInt();
        String newName = requestObject.get("name").asText();

        Optional<Set> optionalSet = setRepository.findById(setId);

        if (optionalSet.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Set set = optionalSet.get();
        set.setName(newName);

        Set savedSet = setRepository.save(set);

        return ResponseEntity.ok(savedSet);
    }

    @DeleteMapping("/deleteSet/{id_set}")
    public void deleteTaskById(@PathVariable(value = "id_set") int id_set){
         setRepository.deleteById(id_set);
    }


}
