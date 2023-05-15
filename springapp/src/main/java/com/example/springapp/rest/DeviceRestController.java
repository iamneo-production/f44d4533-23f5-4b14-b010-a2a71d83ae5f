package com.example.springapp.rest;

import com.example.springapp.binding.Device;

import com.example.springapp.service.DeviceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DeviceRestController {

    @Autowired
    private DeviceService deviceService;

    @PostMapping("/device")
    public ResponseEntity<String> createDevice(@RequestBody Device device){
        String status = deviceService.Dupsert(device);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @GetMapping("/device/{id}")
    public ResponseEntity<Device> getDevice(@PathVariable String id){
        Device device = deviceService.DgetById(id);
        return new ResponseEntity<>(device,HttpStatus.OK);
    }

    @GetMapping("/devices")
    public ResponseEntity<List<Device>> getAllDevices(){
        List<Device> allDevice = deviceService.getAllDevice();
        return new ResponseEntity<>(allDevice,HttpStatus.OK);
    }

    @PutMapping("/device")
    public ResponseEntity<String> updateDevice(@RequestBody Device device){
        String status = deviceService.Dupsert(device);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @DeleteMapping("/device/{id}")
    public ResponseEntity<String> deleteDevice(@PathVariable String id){
        String status = deviceService.DdeleteById(id);
        return new ResponseEntity<>(status,HttpStatus.OK);
    }
}