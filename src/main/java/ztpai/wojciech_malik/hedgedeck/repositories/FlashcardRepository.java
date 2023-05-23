package ztpai.wojciech_malik.hedgedeck.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ztpai.wojciech_malik.hedgedeck.entity.Flashcard;

public interface FlashcardRepository extends JpaRepository<Flashcard, Integer> {
}