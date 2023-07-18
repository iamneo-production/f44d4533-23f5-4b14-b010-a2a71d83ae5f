package com.examly.springapp.service;
import com.examly.springapp.model.Customer;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {

  private final List<Customer> customers = new ArrayList<>();
  private Long customerIdSequence = 1L;

  public List<Customer> getAllCustomers() {
    return customers;
  }

  public boolean createCustomer(Customer customer) {
    customer.setId(customerIdSequence++);
    return customers.add(customer);
  }
  
  public Customer getCustomerById(Long id) {
    return customers.stream()
        .filter(customer -> customer.getId().equals(id))
        .findFirst()
        .orElse(null);
  }

  public Customer updateCustomer(Long id, Customer updatedCustomer) {
    for (int i = 0; i < customers.size(); i++) {
      Customer customer = customers.get(i);
      if (customer.getId().equals(id)) {
        updatedCustomer.setId(id);
        customers.set(i, updatedCustomer);
        return updatedCustomer;
      }
    }
    return null;
  }

  public boolean deleteCustomer(Long id) {
    return customers.removeIf(customer -> customer.getId().equals(id));
  }
}
