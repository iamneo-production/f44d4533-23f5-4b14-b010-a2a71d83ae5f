package com.example.springapp.service;


import com.example.springapp.binding.Employee;

import java.util.List;

public interface EmployeeService {
    public String Eupsert(Employee employee);

    public Employee EgetById(String id);

    public List<Employee> getAllEmployee();

    public String EdeleteById(String id);
}
