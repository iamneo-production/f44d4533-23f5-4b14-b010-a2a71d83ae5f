package com.example.springapp.binding;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Repair_table")
public class Repair {
    @Id
    private String id;
    private String description;
    private String status;
}