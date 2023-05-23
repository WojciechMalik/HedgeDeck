package ztpai.wojciech_malik.hedgedeck.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ztpai.wojciech_malik.hedgedeck.entity.UserDetails;

public interface UserDetailsRepository extends JpaRepository<UserDetails, Integer> {
}