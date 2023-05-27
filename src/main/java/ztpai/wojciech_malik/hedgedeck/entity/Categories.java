package ztpai.wojciech_malik.hedgedeck.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "categories")
public class Categories {
    @JsonIgnore
    @Id
    @GeneratedValue
    private int id_category;

    private String name;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "sets_categories",
            joinColumns = @JoinColumn(name = "id_set"),
            inverseJoinColumns = @JoinColumn(name = "id_category")
    )
    private List<Set> sets;

    public Categories(String name) {
        this.name = name;
    }

    public Categories() {

    }
}
