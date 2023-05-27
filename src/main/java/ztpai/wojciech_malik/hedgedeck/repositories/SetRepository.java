package ztpai.wojciech_malik.hedgedeck.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ztpai.wojciech_malik.hedgedeck.entity.Set;

import java.util.List;

public interface SetRepository extends JpaRepository<Set,Integer> {


    @Query("SELECT s FROM Set s WHERE s.user.id_user = :userId")
    List<Set> findAllSetsByUserId(@Param("userId") Integer userId);


}