package klu.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import klu.repository.UsersRepository;

@Service
public class UsersManager {
  @Autowired
  UsersRepository UR;
  public String addUser(Users U) {    
    if(UR.validateEmail(U.getEmail()) > 0)
      return "401::Email already exist";    
    UR.save(U);
    return "200::User Registered Successfully";
  
  }
  
}