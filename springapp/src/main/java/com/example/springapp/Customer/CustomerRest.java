package com.example.springapp.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CustomerRest {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/customer")
    public ResponseEntity<String> createCustomer(@RequestBody Customer customer){
        String status = customerService.upsert(customer);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<Customer> getCustomer(@PathVariable String id){
        Customer customer = customerService.getById(id);
        return new ResponseEntity<>(customer,HttpStatus.OK);
    }
}
