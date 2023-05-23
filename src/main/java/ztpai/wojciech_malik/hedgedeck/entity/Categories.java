package ztpai.wojciech_malik.hedgedeck.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "categories")
public class Categories {
    @Id
    private int id_category;

    private String name;

    @ManyToMany
    @JoinTable(
            name = "sets_categories",
            joinColumns = @JoinColumn(name = "id_set"),
            inverseJoinColumns = @JoinColumn(name = "id_category")
    )
    private List<Set> sets;
}
