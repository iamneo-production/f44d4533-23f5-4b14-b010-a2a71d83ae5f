package com.example.springapp.rest;

import com.example.springapp.binding.Customer;
import com.example.springapp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerRestController {

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

    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomers(){
        List<Customer> allCustomers = customerService.getAllCustomer();
        return new ResponseEntity<>(allCustomers,HttpStatus.OK);
    }

    @PutMapping("/customer")
    public ResponseEntity<String> updateCustomer(@RequestBody Customer customer){
        String status = customerService.upsert(customer);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @DeleteMapping("/customer/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable String id){
        String status = customerService.deleteById(id);
        return new ResponseEntity<>(status,HttpStatus.OK);
    }
}
