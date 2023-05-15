package com.example.springapp.service;


import com.example.springapp.binding.Repair;
import com.example.springapp.repo.RepairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RepairServiceImple implements RepairService{

    @Autowired
    private RepairRepository repairRepo;
    @Override
    public String Rupsert(Repair repair) {
        repairRepo.save(repair);
        return "success";
    }

    @Override
    public Repair RgetById(String id) {
        Optional<Repair> findById = repairRepo.findById(id);
        return findById.orElse(null);
    }

    @Override
    public List<Repair> getAllRepair() {
        return repairRepo.findAll();
    }

    @Override
    public String RdeleteById(String id) {
        if(repairRepo.existsById(id)){
            repairRepo.deleteById(id);
            return "deleted";
        }
        else{
            return "No record found";
        }
    }

}
