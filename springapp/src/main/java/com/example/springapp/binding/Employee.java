package com.example.springapp.binding;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Employee_table")
public class Employee {
    @Id
    private String id;
    private String name;
    private String email;
    private String phno;
}