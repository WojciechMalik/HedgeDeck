package ztpai.wojciech_malik.hedgedeck.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ztpai.wojciech_malik.hedgedeck.entity.Categories;

public interface CategoriesRepository extends JpaRepository<Categories, Integer> {
}