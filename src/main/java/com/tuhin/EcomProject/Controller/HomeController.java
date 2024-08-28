package com.tuhin.EcomProject.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
