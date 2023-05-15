package com.example.springapp.repo;

import com.example.springapp.binding.Repair;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;

public interface RepairRepository extends JpaRepository<Repair, Serializable> {
}
