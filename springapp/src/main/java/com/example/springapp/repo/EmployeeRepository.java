package com.example.springapp.repo;

import com.example.springapp.binding.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;

public interface EmployeeRepository extends JpaRepository<Employee, Serializable> {
}
