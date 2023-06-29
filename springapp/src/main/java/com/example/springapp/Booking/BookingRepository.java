package com.example.springapp.Booking;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbootbackend.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking,Long> {

}
