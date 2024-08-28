package com.tuhin.EcomProject.Service;

import com.tuhin.EcomProject.Model.Product;
import com.tuhin.EcomProject.Repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo repo;

    public List<Product> getAllProducts(){
        return repo.findAll();
    }

    public Product getOneProduct(int prodId) {
        return repo.findById(prodId).orElse(new Product());
    }
}
