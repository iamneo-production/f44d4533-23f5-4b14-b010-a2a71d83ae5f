//package com.AcServiceBackend.AcServiceBackend.model;

package com.springapp.springapp.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "registration")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class registermodel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "registration_name")
    private String name;

    @Column(name = "registration_email")
    private String email;

    @Column(name = "registration_phone")
    private long phone;

    @Column(name = "registration_password")
    private String password;
}
