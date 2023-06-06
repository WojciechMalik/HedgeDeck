package ztpai.wojciech_malik.hedgedeck.controllers;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ztpai.wojciech_malik.hedgedeck.entity.Categories;
import ztpai.wojciech_malik.hedgedeck.repositories.CategoriesRepository;

import java.util.List;

@Tag(name = "Category")
@RestController
@RequestMapping("/api/category")
@CrossOrigin("http://localhost:3000")
public class CategoryController {
    @Autowired
    CategoriesRepository categoriesRepository;

    @GetMapping("/getAllCategories")
    public ResponseEntity<List<Categories>> getAllCategories() {
        List<Categories> categories = categoriesRepository.findAll();
        return ResponseEntity.ok(categories);
    }

}
