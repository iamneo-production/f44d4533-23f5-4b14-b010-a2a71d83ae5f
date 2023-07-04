package com.examly.springapp.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.registermodel;
import com.examly.springapp.repository.registerrepo;

@Service
@Configuration
public class RegisterService {
    @Autowired
    private registerrepo registerRepository;
    public registermodel addregister(registermodel register) {
        String email = register.getEmail();
        registermodel existingUser = registerRepository.findByEmail(email);
        if (existingUser == null) {
            return registerRepository.save(register);
        } else {
            return null;
        }
    }
    public int loginValidation(String email, String password) {
        registermodel existingUser = registerRepository.findByEmail(email);
        if (existingUser != null && password.equals(existingUser.getPassword())) {
            return 1;
        } else {
            return 0;
        }
    }
    public String resetPassword(String email, String newPassword) {
        registermodel existingUser = registerRepository.findByEmail(email);
        if (existingUser != null) {
            existingUser.setPassword(newPassword);
            registerRepository.save(existingUser);
            return "Password reset successful. New password: ";
        } else {
            return "Email not found. Password reset failed.";
        }
    }
    
}
