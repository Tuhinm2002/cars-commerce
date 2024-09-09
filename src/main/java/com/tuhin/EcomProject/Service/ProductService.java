package com.tuhin.EcomProject.Service;

import com.tuhin.EcomProject.Model.Product;
import com.tuhin.EcomProject.Repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


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

    public Product addProduct(Product product, MultipartFile imageFile) throws Exception{
        product.setImageFileName(imageFile.getOriginalFilename());
        product.setImagFileType(imageFile.getContentType());
        product.setImageFileData(imageFile.getBytes());
        return repo.save(product);
    }

    public Product updateProduct(int id,Product product,MultipartFile imageFile) throws Exception{
        product.setImageFileName(imageFile.getOriginalFilename());
        product.setImagFileType(imageFile.getContentType());
        product.setImageFileData(imageFile.getBytes());
        return repo.save(product);
    }

    public void deleteProduct(int id){
        repo.deleteById(id);
    }
}
