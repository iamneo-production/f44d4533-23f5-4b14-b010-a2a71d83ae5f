package com.examly.springapp.service;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.Register;
import com.examly.springapp.repository.RegisterRepo;

@Service
@Configuration
public class RegisterService {
    @Autowired
    private RegisterRepo registerRepository;
    public Register addregister(Register register) {
        String email = register.getEmail();
        Register existingUser = registerRepository.findByEmail(email);
        Long phone = register.getPhone();
        Register existingPhone = registerRepository.findByPhone(phone);
        if (existingUser == null && existingPhone == null) {
            return registerRepository.save(register);
        } else {
            return null;
        }
    }
    public Map<String, Object> loginValidation(String email, String password) {
        Register existingUser = registerRepository.findByEmail(email);
        Map<String, Object> response = new HashMap<>();

        if (existingUser != null && password.equals(existingUser.getPassword())) {
            response.put("customerId", existingUser.getCustomerId());
            response.put("status", 1);
        } else {
            response.put("customerId", null);
            response.put("status", 0);
        }

        return response;
    }

    public List<Register> getAllCustomers() {
        return registerRepository.findAll();
      }
    public String resetPassword(String email, String newPassword) {
        Register existingUser = registerRepository.findByEmail(email);
        if (existingUser != null) {
            existingUser.setPassword(newPassword);
            registerRepository.save(existingUser);
            return "Password reset successful.";
        } else {
            return "Email not found. Password reset failed.";
        }
    }
    public Register updateUser(Register user) {
        return registerRepository.save(user);
      }
    public boolean deleteUser(Long customerId) {
        if (registerRepository.existsById(customerId)) {
          registerRepository.deleteById(customerId);
          return true;
        }
        return false;
      }
      public Register findUserById(Long customerId) {
        Optional<Register> userOptional = registerRepository.findById(customerId);
        return userOptional.orElse(null);
      }
}