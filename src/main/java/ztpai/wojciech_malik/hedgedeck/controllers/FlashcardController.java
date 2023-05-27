package ztpai.wojciech_malik.hedgedeck.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ztpai.wojciech_malik.hedgedeck.entity.Set;
import ztpai.wojciech_malik.hedgedeck.repositories.FlashcardRepository;
import ztpai.wojciech_malik.hedgedeck.repositories.SetRepository;

import java.util.Optional;

@Tag(name = "Flashcard")
@RestController
@RequestMapping("/api/flashcard")
public class FlashcardController {
    @Autowired
    FlashcardRepository flashcardRepository;
    @Autowired
    SetRepository setRepository;




    @GetMapping("getAllFlashCards/{id_set}")
    public Optional<Set> getAllFlashCards(@PathVariable(value = "id_set") Integer id_set){

        return setRepository.findById(id_set);
    }

}
