package ztpai.wojciech_malik.hedgedeck.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "flashcard")
public class Flashcard {


    @Id
    @GeneratedValue
    private int id_flashcard;

    private String term;

    private String definition;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_set")
    private Set set;

    public Flashcard(String term, String definition) {
        this.term = term;
        this.definition = definition;
    }
}
