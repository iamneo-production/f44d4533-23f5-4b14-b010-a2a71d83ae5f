package com.example.springapp.service;

import com.example.springapp.binding.Customer;
import com.example.springapp.repo.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository customerRepo;
    @Override
    public String upsert(Customer customer) {
        customerRepo.save(customer);
        return "success";
    }

    @Override
    public Customer getById(String id) {
        Optional<Customer> findById = customerRepo.findById(id);
        return findById.orElse(null);
    }

    @Override
    public List<Customer> getAllCustomer() {
        return customerRepo.findAll();
    }

    @Override
    public String deleteById(String id) {
        if(customerRepo.existsById(id)){
            customerRepo.deleteById(id);
            return "deleted";
        }
        else{
            return "No record found";
        }
    }
}
