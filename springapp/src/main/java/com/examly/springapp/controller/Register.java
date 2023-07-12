package com.examly.springapp.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.registermodel;
import com.examly.springapp.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin(origins = "https://8081-fcefddbaffdeffacdcbbcecdcebafeccfa.project.examly.io")
@RequestMapping("/register")
public class Register {
  private RegisterService registerService;

  public Register(RegisterService registerService) {
    this.registerService = registerService;
  }
  @PostMapping
  public ResponseEntity<registermodel> addregisteruser(@RequestBody registermodel register) {
    registermodel createdUser = registerService.addregister(register);

    return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
  }

  @GetMapping("/{email}/{password}")
  public int registerService(@PathVariable("email") String username1, @PathVariable("password") String password1) {
    return registerService.loginValidation(username1, password1);
  }

  @PostMapping("/forgetpassword")
  public ResponseEntity<String> forgetPassword(@RequestParam("email") String email,
      @RequestParam("newPassword") String newPassword) {
    try {
      String result = registerService.resetPassword(email, newPassword);
      return ResponseEntity.ok(result);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred.");
    }
  }
}