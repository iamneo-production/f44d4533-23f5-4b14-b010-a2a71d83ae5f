package com.examly.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
