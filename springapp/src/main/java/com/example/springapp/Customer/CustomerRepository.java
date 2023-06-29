package com.example.springapp.Customer;

import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;

public interface CustomerRepository extends JpaRepository<Customer, Serializable> {

}
