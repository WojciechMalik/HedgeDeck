package ztpai.wojciech_malik.hedgedeck.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_details")
public class UserDetails {
    @JsonIgnore
    @Id
    @GeneratedValue
    private int id_user_details;

    private String name;
    private String surname;

    @JsonIgnore
    @OneToOne(mappedBy = "userDetails")
    private User user;

    public UserDetails(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }
}
