package com.example.springapp.binding;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Device_table")
public class Device {
    @Id
    private String id;
    private String type;
    private String brand;
    private String model;
}
