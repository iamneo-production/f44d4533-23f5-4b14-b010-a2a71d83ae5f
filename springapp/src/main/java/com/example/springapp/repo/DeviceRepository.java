package com.example.springapp.repo;

import com.example.springapp.binding.Device;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;

public interface DeviceRepository extends JpaRepository<Device, Serializable> {
}
