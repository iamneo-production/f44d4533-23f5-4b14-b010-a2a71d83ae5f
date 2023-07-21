package com.examly.springapp.controller;
import org.springframework.http.HttpStatus;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.Device;
import com.examly.springapp.repository.DeviceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "https://8081-fcefddbaffdeffacdcbbceeaeaadbdbabf.project.examly.io")
public class DeviceController {

    private final DeviceRepo deviceRepository;

    @Autowired
    public DeviceController(DeviceRepo deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    // Get all devices
    @GetMapping("/devices")
    public List<Device> getAllDevices() {
        return deviceRepository.findAll();
    }

    // Create device
    @PostMapping("/devices")
    public ResponseEntity<?> createDevice(@RequestBody Device device) {
        Device createdDevice = deviceRepository.save(device);
        if (createdDevice != null) {
            return ResponseEntity.ok().body(true);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    

    // Get device by ID
    @GetMapping("/devices/{id}")
    public ResponseEntity<Device> getDeviceById(@PathVariable Long id) {
        Optional<Device> optionalDevice = deviceRepository.findById(id);
        if (optionalDevice.isPresent()) {
            Device device = optionalDevice.get();
            return ResponseEntity.ok(device);
        } else {
            return ResponseEntity.ok().body(null);
        }
    }
    
    
    // Update device
    @PutMapping("/devices/{id}")
    public ResponseEntity<Map<String, Boolean>> updateDevice(@PathVariable Long id, @RequestBody Device deviceDetails) {
        Optional<Device> optionalDevice = deviceRepository.findById(id);
        if (optionalDevice.isPresent()) {
            Device device = optionalDevice.get();
            device.setType(deviceDetails.getType());
            device.setBrand(deviceDetails.getBrand());
            device.setModel(deviceDetails.getModel());
            deviceRepository.save(device);
            Map<String, Boolean> response = new HashMap<>();
            response.put("updated", true);
            return ResponseEntity.ok(response);
        } else {
            Map<String, Boolean> response = new HashMap<>();
            response.put("Not Updated", false);
            return ResponseEntity.ok(response);
        }
    }

    // Delete device
    @DeleteMapping("/devices/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDevice(@PathVariable Long id) {
        Optional<Device> optionalDevice = deviceRepository.findById(id);
        if (optionalDevice.isPresent()) {
            Device device = optionalDevice.get();
            deviceRepository.delete(device);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", true);
            return ResponseEntity.ok(response);
        } else {
            Map<String, Boolean> response = new HashMap<>();
            response.put("Not deleted", false);
            return ResponseEntity.ok(response);
        }
    }

}