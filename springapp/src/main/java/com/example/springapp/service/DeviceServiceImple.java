package com.example.springapp.service;


import com.example.springapp.binding.Device;
import com.example.springapp.repo.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeviceServiceImple implements DeviceService{

    @Autowired
    private DeviceRepository deviceRepo;
    @Override
    public String Dupsert(Device device) {
        deviceRepo.save(device);
        return "success";
    }

    @Override
    public Device DgetById(String id) {
        Optional<Device> findById = deviceRepo.findById(id);
        return findById.orElse(null);
    }

    @Override
    public List<Device> getAllDevice() {
        return deviceRepo.findAll();
    }

    @Override
    public String DdeleteById(String id) {
        if(deviceRepo.existsById(id)){
            deviceRepo.deleteById(id);
            return "deleted";
        }
        else{
            return "No record found";
        }
    }

}
