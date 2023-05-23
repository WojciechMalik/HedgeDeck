package ztpai.wojciech_malik.hedgedeck.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "sets")
public class Set {
    @Id
    private int id_set;

    private String name;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    @OneToMany(mappedBy = "set")
    private List<Flashcard> flashcards;

    @ManyToMany(mappedBy = "sets")
    private List<Categories> categories;

}
