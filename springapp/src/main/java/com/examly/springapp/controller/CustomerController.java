package com.examly.springapp.controller;
import org.springframework.http.HttpStatus;
import com.examly.springapp.model.Customer; 
import com.examly.springapp.service.CustomerService; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

  @Autowired
  private final CustomerService customerService;

  public CustomerController(CustomerService customerService) {
    this.customerService = customerService;
  }

  @GetMapping
  public List<Customer> getAllCustomers() {
    return customerService.getAllCustomers();
  }

  @PostMapping
  public ResponseEntity<Object> createCustomer(@RequestBody Customer customer) {
    boolean created = customerService.createCustomer(customer);
    if (created) {
      return ResponseEntity.ok().body(true);
    } else {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
  @GetMapping("/{id}")
  public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
    Customer customer = customerService.getCustomerById(id);
    if (customer != null) {
      return ResponseEntity.ok(customer);
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  @PutMapping("/{id}")
  public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer customer) {
    Customer updatedCustomer = customerService.updateCustomer(id, customer);
    if (updatedCustomer != null) {
      return ResponseEntity.ok(updatedCustomer);
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
    boolean deleted = customerService.deleteCustomer(id);
    if (deleted) {
      return ResponseEntity.ok().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
}
