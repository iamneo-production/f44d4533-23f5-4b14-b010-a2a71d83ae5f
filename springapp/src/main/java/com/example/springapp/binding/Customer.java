package com.example.springapp.binding;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Customer_table")
public class Customer {
    @Id
    private String id;
    private String name;
    private String email;
    private String phno;
}
