package com.example.springapp.service;

import com.example.springapp.binding.Device;

import java.util.List;

public interface DeviceService {
    public String Dupsert(Device device);

    public Device DgetById(String id);

    public List<Device> getAllDevice();

    public String DdeleteById(String id);
}
