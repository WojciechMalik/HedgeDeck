package ztpai.wojciech_malik.hedgedeck.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "flashcard")
public class Flashcard {

    @Id
    private int id_flashcard;

    private String term;

    private String definition;

    @ManyToOne
    @JoinColumn(name = "id_set")
    private Set set;

}
