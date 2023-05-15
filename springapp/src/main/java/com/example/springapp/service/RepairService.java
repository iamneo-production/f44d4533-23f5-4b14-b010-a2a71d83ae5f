package com.example.springapp.service;

import com.example.springapp.binding.Repair;

import java.util.List;

public interface RepairService {
    public String Rupsert(Repair customer);

    public Repair RgetById(String id);

    public List<Repair> getAllRepair();

    public String RdeleteById(String id);
}
