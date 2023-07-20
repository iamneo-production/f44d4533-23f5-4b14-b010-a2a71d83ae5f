package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Repair;


@Repository
public interface RepairRepo extends JpaRepository<Repair, Long>{
	List<Repair> findByCustomerCustomerId(Long customerId);
}

