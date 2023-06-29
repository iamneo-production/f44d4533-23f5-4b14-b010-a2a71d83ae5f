package com.example.springapp.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerServiceImp implements CustomerService {

    @Autowired
    private CustomerRepository customerRepo;

    @Override
    public String upsert(Customer customer) {
        customerRepo.save(customer);
        return "";
    }

    @Override
    public Customer getById(String id) {
        Optional<Customer> findById = customerRepo.findById(id);

        if(findById.isPresent()){
            return findById.get();
        }
        return null;
    }
}
