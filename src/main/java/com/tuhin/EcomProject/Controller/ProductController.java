package com.tuhin.EcomProject.Controller;

import com.tuhin.EcomProject.Model.Product;
import com.tuhin.EcomProject.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin
public class ProductController {
    @Autowired
    ProductService service;

    @RequestMapping("/products")
    public List<Product> showProducts(){
        return service.getAllProducts();
    }

    @GetMapping("/products/{prodId}")
    public Product showProduct(@PathVariable int prodId){
        return service.getOneProduct(prodId);
    }

    @PostMapping("/add_products")
    public ResponseEntity<?> addProduct(@RequestPart Product product,
                                        @RequestPart MultipartFile imageFile){

        try {
            Product returnProdct = service.addProduct(product,imageFile);
            return new ResponseEntity<>(returnProdct, HttpStatus.CREATED);
        } catch (Exception e) {
        return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
