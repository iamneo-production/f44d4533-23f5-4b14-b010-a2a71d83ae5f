package com.examly.springapp.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.Repair;
import com.examly.springapp.repository.RepairRepo;


@CrossOrigin(origins = "https://8081-fcefddbaffdeffacdcbbcecdcebafeccfa.project.examly.io")
@RestController
public class RepairController {

	@Autowired
	private RepairRepo repairRepository;
	
	
	// get all repairs
	@GetMapping("/repairs")
	public List<Repair> getAllRepairs(){
		return repairRepository.findAll();
	}	
	// get repair by customer id
	@GetMapping("/repairs/register/{customerId}")
	public ResponseEntity<List<Repair>> getRepairsByCustomerId(@PathVariable Long customerId) {
	    List<Repair> repairs = repairRepository.findByCustomerCustomerId(customerId);
	    return ResponseEntity.ok(repairs);
	}


	// create repair rest api
	@PostMapping("/repairs")
	public Repair createRepair(@RequestBody Repair repair) {
	    repair.setStatus("booked"); // Set the initial status to "booking"
	    return repairRepository.save(repair);
	}
	  
    
	
	// get repair by id rest api
	@GetMapping("/repairs/{id}")
	public ResponseEntity<Repair> getRepairById(@PathVariable Long id) {
		Repair repair = repairRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Repair not exist with Id :" + id));
		return ResponseEntity.ok(repair);
	}
	
	// update repair rest api
	
	@PutMapping("/repairs/{id}")
	public ResponseEntity<Repair> updateRepair(@PathVariable Long id, @RequestBody Repair repairDetails){
		Repair repair = repairRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Repair not exist with id :" + id));
		repair.setType(repairDetails.getType());
		repair.setBrand(repairDetails.getBrand());
		repair.setModel(repairDetails.getModel());
		repair.setDescription(repairDetails.getDescription());
		repair.setStatus(repairDetails.getStatus());
		
		Repair updatedRepair = repairRepository.save(repair);
		return ResponseEntity.ok(updatedRepair);
	}
	
	// delete employee rest api
	@DeleteMapping("/repairs/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteRepair(@PathVariable Long id){
		Repair repair = repairRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Repair not exist with id :" + id));
		
		repairRepository.delete(repair);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}