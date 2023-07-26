package com.examly.springapp.controller;
import java.util.List;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.Register;
import com.examly.springapp.service.RegisterService;
import com.examly.springapp.model.StringResponse;

@RestController
@RequestMapping("/register")
public class RegisterController {
  private RegisterService registerService;

  public RegisterController(RegisterService registerService) {
    this.registerService = registerService;
  }
  @GetMapping
  public ResponseEntity<List<Register>> getAllCustomers() {
    List<Register> customers = registerService.getAllCustomers();
    if (customers.isEmpty()) {
      return ResponseEntity.noContent().build();
    }
    return ResponseEntity.ok(customers);
  }
  @PutMapping("/{customerId}")
  public ResponseEntity<Register> updateUser(@PathVariable("customerId") Long customerId, @RequestBody Register updatedUser) {
    Register existingUser = registerService.findUserById(customerId);

    if (existingUser == null) {
      return ResponseEntity.notFound().build();
    }

    existingUser.setName(updatedUser.getName());
    existingUser.setEmail(updatedUser.getEmail());
    existingUser.setPhone(updatedUser.getPhone());

    Register updatedUserr = registerService.updateUser(existingUser);

    return ResponseEntity.ok(updatedUserr);
  }

  @PostMapping
  public ResponseEntity<Register> addregisteruser(@RequestBody Register register) {
    Register createdUser = registerService.addregister(register);

    return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
  }
  @GetMapping("/{customerId}")
  public ResponseEntity<Register> getCustomerById(@PathVariable("customerId") Long customerId) {
    Register customer = registerService.findUserById(customerId);

    if (customer == null) {
      return ResponseEntity.notFound().build();
    }

    return ResponseEntity.ok(customer);
  }
  @GetMapping("/{email}/{password}")
  public ResponseEntity<Map<String, Object>> loginService(@PathVariable("email") String email, @PathVariable("password") String password) {
      Map<String, Object> loginResponse = registerService.loginValidation(email, password);
      if (loginResponse.get("customerId") != null) {
          return ResponseEntity.ok(loginResponse);
      } else {
          return ResponseEntity.notFound().build();
      }
  }

  @DeleteMapping("/{customerId}")
  public ResponseEntity<Void> deleteUser(@PathVariable("customerId") Long customerId) {
    boolean deleted = registerService.deleteUser(customerId);

    if (deleted) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
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

  @GetMapping("/customer-number")
    public ResponseEntity<?> numberOfCustomers(){
        Long number = registerService.numberOfCustomers();
        StringResponse response = new StringResponse();
        response.setResponse(number.toString());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}