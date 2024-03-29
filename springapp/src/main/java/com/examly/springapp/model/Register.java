package com.examly.springapp.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;

@Entity
@Table(name = "registration")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Register {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "customer_id")
    private Long customerId;

    @Column(name = "registration_name")
    private String name;

    @Column(name = "registration_email")
    private String email;

    @Column(name = "registration_phone")
    private long phone;

    @Column(name = "registration_password")
    private String password;
}
