package ztpai.wojciech_malik.hedgedeck.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ztpai.wojciech_malik.hedgedeck.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}