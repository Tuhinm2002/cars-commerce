package com.tuhin.EcomProject.Model;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;

import javax.annotation.processing.Generated;
import java.util.Date;

@Component
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String Brand;
    private String Model;
    private Date date;
    private String category;
    private boolean available;
    private String imageFileName;
    private String imagFileType;
    private byte[] imageFileData;

    public byte[] getImageFileData() {
        return imageFileData;
    }

    public void setImageFileData(byte[] imageFileData) {
        this.imageFileData = imageFileData;
    }

    public String getImagFileType() {
        return imagFileType;
    }

    public void setImagFileType(String imagFileType) {
        this.imagFileType = imagFileType;
    }

    public String getImageFileName() {
        return imageFileName;
    }

    public void setImageFileName(String imageFileName) {
        this.imageFileName = imageFileName;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand() {
        return Brand;
    }

    public void setBrand(String brand) {
        Brand = brand;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return Model;
    }

    public void setModel(String model) {
        Model = model;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
