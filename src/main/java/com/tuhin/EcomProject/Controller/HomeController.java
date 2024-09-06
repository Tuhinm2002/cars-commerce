package com.tuhin.EcomProject.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class HomeController {

    @RequestMapping("/")
    public String greetHome(){
        return "Hello to ecommerce";
    }

    @RequestMapping("/about")
    public String aboutPage(){
        return "Hello from about";
    }

}
