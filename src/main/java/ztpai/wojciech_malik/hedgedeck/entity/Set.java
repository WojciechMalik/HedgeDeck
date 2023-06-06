package ztpai.wojciech_malik.hedgedeck.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Optional;

@Data
@Entity
@Table(name = "sets")
@AllArgsConstructor
@NoArgsConstructor
public class Set {

    @Id
    @GeneratedValue
    @Column(name = "id_set")
    private int idSet;

    private String name;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id_user")
    private User user;

    @ManyToOne
    @JoinColumn(name = "id_category", referencedColumnName = "id_category")
    private Categories categories;

    @OneToMany(mappedBy = "set")
    private List<Flashcard> flashcards;

    public Set(String name, User user, Categories categories) {
        this.name = name;
        this.user = user;
        this.categories = categories;
    }
}