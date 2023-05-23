package ztpai.wojciech_malik.hedgedeck.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    private int id_user;

    private String email;

    private String password;

    @OneToOne
    @JoinColumn(name = "id_user_details")
    private UserDetails userDetails;

    @OneToMany(mappedBy = "user")
    private List<Set> set;

}
