package com.example.springapp.Booking;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbackend.exception.ResourceNotFoundException;
import com.example.springbootbackend.model.Booking;
import com.example.springbootbackend.repository.BookingRepository;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {
	
	@Autowired
	private BookingRepository bookingRepository;
	// get all employees
	@GetMapping("/bookings")
	public List<Booking> getAllBookings(){
		return bookingRepository.findAll();
	}

	// create employee rest API
		@PostMapping("/bookings")
		public Booking createEmployee(@RequestBody Booking booking) {
			return bookingRepository.save(booking);
		}
	// get employee by id rest API
		@GetMapping("/bookings/{id}")
		public ResponseEntity<Booking> getEmployeeById(@PathVariable Long id) {
			Booking booking = bookingRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			return ResponseEntity.ok(booking);
		}
		// update employee rest api
	
		
		@PutMapping("/bookings/{id}")
		public ResponseEntity<Booking> updateEmployee(@PathVariable Long id, @RequestBody Booking bookingDetails){
			Booking booking = bookingRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Booking not exist with id :" + id));
			
			booking.setDeviceType(bookingDetails.getDeviceType());
			booking.setDeviceBrand(bookingDetails.getDeviceBrand());
			booking.setDeviceModel(bookingDetails.getDeviceModel());
			booking.setProblem(bookingDetails.getProblem());
			booking.setDate(bookingDetails.getDate());
			booking.setTimeSlot(bookingDetails.getTimeSlot());
			booking.setCustomer_name(bookingDetails.getCustomer_name());
			booking.setCustomerid(bookingDetails.getCustomerid());
			booking.setStatus(bookingDetails.getStatus());
			Booking updatedEmployee = bookingRepository.save(booking);
			return ResponseEntity.ok(updatedEmployee);
		}

	// delete employee rest api
	@DeleteMapping("/bookings/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBooking(@PathVariable Long id){
		Booking booking = bookingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Booking not exist with id :" + id));
		
		bookingRepository.delete(booking);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
