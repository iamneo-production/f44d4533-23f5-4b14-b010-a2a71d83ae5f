package com.examly.springapp.repository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.registermodel;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface registerrepo extends JpaRepository<registermodel, Long> {

    registermodel findByEmail(String email);

}
