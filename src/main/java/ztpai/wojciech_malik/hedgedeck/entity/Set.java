package ztpai.wojciech_malik.hedgedeck.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Table(name = "sets")
@AllArgsConstructor
@NoArgsConstructor
public class Set {

    @Id
    @GeneratedValue
    private int id_set;

    private String name;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;


    @OneToMany(mappedBy = "set")
    private List<Flashcard> flashcards;

    @ManyToMany(mappedBy = "sets")
    private List<Categories> categories;

    public Set(String name, User user) {
        this.name = name;
        this.user = user;
    }



}
