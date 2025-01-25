package klu.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import klu.model.Users;
import klu.model.UsersManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/users")
public class UsersController {

    UsersManager UM;

    @PostMapping("/signup")
    public String signUp(@RequestBody Users U) {
        return UM.addUser(U);
    }



}