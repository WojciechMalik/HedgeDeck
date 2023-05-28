package ztpai.wojciech_malik.hedgedeck.controllers;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ztpai.wojciech_malik.hedgedeck.entity.Categories;
import ztpai.wojciech_malik.hedgedeck.repositories.CategoriesRepository;

@Tag(name = "Category")
@RestController
@RequestMapping("/api/category")
@CrossOrigin("http://localhost:3000")
public class CategoryController {
    @Autowired
    CategoriesRepository categoriesRepository;

    @PostMapping("/addCategory")
    public void addNewCategory(@RequestBody Categories categories){

        Categories categories1 = new Categories(categories.getName());
        categoriesRepository.save(categories1);

    }


//    @PutMapping("/update")
//    public void update
}
