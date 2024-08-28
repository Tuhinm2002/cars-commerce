package com.tuhin.EcomProject.Controller;

import com.tuhin.EcomProject.Model.Product;
import com.tuhin.EcomProject.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
