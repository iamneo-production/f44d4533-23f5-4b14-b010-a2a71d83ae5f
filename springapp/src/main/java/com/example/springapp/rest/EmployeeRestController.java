package com.example.springapp.rest;

import com.example.springapp.binding.Employee;
import com.example.springapp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeRestController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employee")
    public ResponseEntity<String> createEmployee(@RequestBody Employee employee){
        String status = employeeService.Eupsert(employee);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable String id){
        Employee employee = employeeService.EgetById(id);
        return new ResponseEntity<>(employee,HttpStatus.OK);
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> allEmployees = employeeService.getAllEmployee();
        return new ResponseEntity<>(allEmployees,HttpStatus.OK);
    }

    @PutMapping("/employee")
    public ResponseEntity<String> updateEmployee(@RequestBody Employee employee){
        String status = employeeService.Eupsert(employee);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable String id){
        String status = employeeService.EdeleteById(id);
        return new ResponseEntity<>(status,HttpStatus.OK);
    }
}