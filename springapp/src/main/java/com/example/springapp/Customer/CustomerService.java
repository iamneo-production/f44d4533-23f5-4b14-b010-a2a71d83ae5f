package com.example.springapp.Customer;

public interface CustomerService {
    public String upsert(Customer customer);

    public Customer getById(String id);
}
