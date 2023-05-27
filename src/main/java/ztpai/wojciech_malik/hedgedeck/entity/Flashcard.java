package ztpai.wojciech_malik.hedgedeck.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "flashcard")
public class Flashcard {

    @JsonIgnore
    @Id
    @GeneratedValue
    private int id_flashcard;

    private String term;

    private String definition;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_set")
    private Set set;

}
