package ztpai.wojciech_malik.hedgedeck.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ztpai.wojciech_malik.hedgedeck.entity.Flashcard;
import ztpai.wojciech_malik.hedgedeck.entity.Set;
import ztpai.wojciech_malik.hedgedeck.repositories.FlashcardRepository;
import ztpai.wojciech_malik.hedgedeck.repositories.SetRepository;

import java.util.Optional;
@CrossOrigin("http://localhost:3000")
@Tag(name = "Flashcard")
@RestController
@RequestMapping("/api/flashcard")
public class FlashcardController {
    @Autowired
    FlashcardRepository flashcardRepository;
    @Autowired
    SetRepository setRepository;

    @PutMapping("/updateFlashcard")
    public ResponseEntity<String> updateFlashcard(@RequestBody Flashcard flashcard) {
        int flashcardId = flashcard.getId_flashcard();
        if (flashcardId == 0) {
            return ResponseEntity.badRequest().body("Nieprawidłowy identyfikator flashcarda.");
        }

        Optional<Flashcard> existingFlashcard = flashcardRepository.findById(flashcardId);
        if (!existingFlashcard.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        flashcard.setSet(existingFlashcard.get().getSet());

        Flashcard updatedFlashcard = flashcardRepository.save(flashcard);

        if (updatedFlashcard != null) {
            return ResponseEntity.ok("Flashcard został zaktualizowany.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Wystąpił błąd podczas aktualizacji flashcarda.");
        }
    }

    @PostMapping("/addFlashcard")
    public ResponseEntity<String> addFlashcard(@RequestBody Flashcard flashcard, @RequestParam int setId) {
        if (setId == 0) {
            return ResponseEntity.badRequest().body("Nieprawidłowy identyfikator setu.");
        }

        Optional<Set> existingSet = setRepository.findById(setId);
        if (!existingSet.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Flashcard newFlashcard = new Flashcard();
        newFlashcard.setTerm(flashcard.getTerm());
        newFlashcard.setDefinition(flashcard.getDefinition());
        newFlashcard.setSet(existingSet.get());

        Flashcard savedFlashcard = flashcardRepository.save(newFlashcard);

        if (savedFlashcard != null) {
            return ResponseEntity.ok("Flashcard został dodany.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Wystąpił błąd podczas dodawania flashcarda.");
        }
    }

    @GetMapping("getAllFlashCards/{id_set}")
    public Optional<Set> getAllFlashCards(@PathVariable(value = "id_set") Integer id_set){

        return setRepository.findById(id_set);
    }

}
