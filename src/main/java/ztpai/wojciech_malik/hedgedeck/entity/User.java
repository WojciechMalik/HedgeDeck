package ztpai.wojciech_malik.hedgedeck.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "users")
public class User {

    @JsonIgnore
    @Id
    @GeneratedValue
    private int id_user;

    private String email;

    private String password;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "id_user_details")
    private UserDetails userDetails;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Set> set;

}
