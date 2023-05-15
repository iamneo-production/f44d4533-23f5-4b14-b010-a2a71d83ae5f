package com.example.springapp.service;

import com.example.springapp.binding.Customer;

import java.util.List;

public interface CustomerService {
    public String upsert(Customer customer);

    public Customer getById(String id);

    public List<Customer> getAllCustomer();

    public String deleteById(String id);

}
