package ztpai.wojciech_malik.hedgedeck.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ztpai.wojciech_malik.hedgedeck.entity.Categories;
import ztpai.wojciech_malik.hedgedeck.entity.User;

import java.util.Optional;

public interface CategoriesRepository extends JpaRepository<Categories, Integer> {
    Optional<Categories> findByName(String name);

}