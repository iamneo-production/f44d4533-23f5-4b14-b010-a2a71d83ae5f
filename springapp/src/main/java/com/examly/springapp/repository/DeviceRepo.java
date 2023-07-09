package com.examly.springapp.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Device;

@Repository
public interface DeviceRepo extends JpaRepository<Device,Long> {
}
