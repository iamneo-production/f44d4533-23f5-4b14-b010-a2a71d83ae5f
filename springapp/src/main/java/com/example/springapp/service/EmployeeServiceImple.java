package com.example.springapp.service;


import com.example.springapp.binding.Employee;

import com.example.springapp.repo.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImple implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepo;
    @Override
    public String Eupsert(Employee employee) {
        employeeRepo.save(employee);
        return "success";
    }

    @Override
    public Employee EgetById(String id) {
        Optional<Employee> findById = employeeRepo.findById(id);
        return findById.orElse(null);
    }

    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepo.findAll();
    }

    @Override
    public String EdeleteById(String id) {
        if(employeeRepo.existsById(id)){
            employeeRepo.deleteById(id);
            return "deleted";
        }
        else{
            return "No record found";
        }
    }

}
