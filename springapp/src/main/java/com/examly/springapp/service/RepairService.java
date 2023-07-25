package com.examly.springapp.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.repository.RepairRepo;

@Service
public class RepairService {
    @Autowired
    private RepairRepo repairRepository;

    public Long numberOfRepairs(){
        return repairRepository.count();
    }
}





