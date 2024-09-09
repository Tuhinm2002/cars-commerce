package com.tuhin.EcomProject.Controller;

import com.tuhin.EcomProject.Model.Product;
import com.tuhin.EcomProject.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin()
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


//    @CrossOrigin(origins = "http://localhost:5173/")
    @PostMapping("/add_products")
    public ResponseEntity<?> addProduct(@RequestPart Product product,
                                        @RequestParam(value = "imageFile",required = false) MultipartFile imageFile){

        try {
            Product returnProdct = service.addProduct(product,imageFile);
            return new ResponseEntity<>(returnProdct, HttpStatus.CREATED);
        } catch (Exception e) {
        return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/products/{prodId}/image")
    public ResponseEntity<byte[]> getImageById(@PathVariable int prodId){
        Product product = service.getOneProduct(prodId);
        byte[] imageFile = product.getImageFileData();
        return ResponseEntity.ok()
                .contentType(MediaType.valueOf(product.getImagFileType()))
                .body(imageFile);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<String> updateProducts(@PathVariable int id,
                                                 @RequestPart Product product,
                                                 @RequestParam MultipartFile imageFile){

        Product product1 =null;
        try {
             product1 = service.updateProduct(id,product,imageFile);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        if(product1 != null){
            return new ResponseEntity<>("updated",HttpStatus.OK);
        }
        else return new ResponseEntity<>("Failed",HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id){
        Product product = service.getOneProduct(id);
        if(product != null){
            service.deleteProduct(id);
            return new ResponseEntity<>("Deleted",HttpStatus.OK);
        }
        else return new ResponseEntity<>("failed",HttpStatus.BAD_REQUEST);

    }

}
