package com.example.springapp.rest;

import com.example.springapp.binding.Repair;

import com.example.springapp.service.RepairService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RepairRestController {

    @Autowired
    private RepairService repairService;

    @PostMapping("/repair")
    public ResponseEntity<String> createRepair(@RequestBody Repair repair){
        String status = repairService.Rupsert(repair);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @GetMapping("/repair/{id}")
    public ResponseEntity<Repair> getRepair(@PathVariable String id){
        Repair repair = repairService.RgetById(id);
        return new ResponseEntity<>(repair,HttpStatus.OK);
    }

    @GetMapping("/repairs")
    public ResponseEntity<List<Repair>> getAllRepairs(){
        List<Repair> allRepairs = repairService.getAllRepair();
        return new ResponseEntity<>(allRepairs,HttpStatus.OK);
    }

    @PutMapping("/repair")
    public ResponseEntity<String> updateRepair(@RequestBody Repair repair){
        String status = repairService.Rupsert(repair);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @DeleteMapping("/repair/{id}")
    public ResponseEntity<String> deleteRepair(@PathVariable String id){
        String status = repairService.RdeleteById(id);
        return new ResponseEntity<>(status,HttpStatus.OK);
    }
}