package com.examly.springapp.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.Device;
import com.examly.springapp.repository.DeviceRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DeviceController {
	
	@Autowired
	private DeviceRepo deviceRepository;
	
	// get all devices
	@GetMapping("/devices")
	public List<Device> getAllDevices(){
		
		return deviceRepository.findAll();
	}

	// create device rest APII
		@PostMapping("/devices")
		public Device createDevice(@RequestBody Device device) {
			return deviceRepository.save(device);
		}
		
	// get device by id rest API
		@GetMapping("/devices/{id}")
		public ResponseEntity<Device> getDeviceById(@PathVariable Long id) {
			Device device = deviceRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("device not exist with id :" + id));
			return ResponseEntity.ok(device);
		}
		
	// update device rest API
		
		@PutMapping("/devices/{id}")
		public ResponseEntity<Device> updateDevice(@PathVariable Long id, @RequestBody Device deviceDetails){
		    Device device = deviceRepository.findById(id)
		            .orElseThrow(() -> new ResourceNotFoundException("Device does not exist with id: " + id));

		    device.setDeviceType(deviceDetails.getDeviceType());
		    device.setDeviceBrand(deviceDetails.getDeviceBrand());
		    device.setDeviceModel(deviceDetails.getDeviceModel());

		    Device updatedDevice = deviceRepository.save(device);
		    return ResponseEntity.ok(updatedDevice);
		}

	// delete device rest API
		
	@DeleteMapping("/devices/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBooking(@PathVariable Long id){
		Device device = deviceRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("device not exist with id :" + id));
		
		deviceRepository.delete(device);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
