package ztpai.wojciech_malik.hedgedeck.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user_details")
public class UserDetails {
    @Id
    private int id_user_details;

    private String name;
    private String surname;

    @OneToOne(mappedBy = "userDetails")
    private User user;
}
