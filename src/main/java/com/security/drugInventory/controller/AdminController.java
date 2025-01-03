package com.security.drugInventory.controller;

import com.security.drugInventory.repositories.UserRepository;
import com.security.drugInventory.service.UserSerivce;
import com.security.drugInventory.user.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.security.drugInventory.service.EmployeeService;
import com.security.drugInventory.service.DrugService;
import com.security.drugInventory.service.PatientService;



import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final EmployeeService employeeService;
    private final DrugService drugService;
    private final PatientService patientService;
    private final UserSerivce userSerivce;

    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return employeeService.getAllEmployee();
    }


    @PostMapping("/drugs/update/Stock")
    public void updateStock(@RequestParam Long drugId, @RequestParam int stock) {
        drugService.updateStock(drugId, stock);
    }

    @GetMapping("/patients")
    public List<Patient> getPatients() {
        return patientService.getAllPatients();
    }

    @PostMapping("/create")
    public ResponseEntity<Drug> createDrug(@RequestBody Drug drug) {
        Drug savedDrug = drugService.createDrug(drug);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDrug);
    }

    @PutMapping("/drug/{id}")
    public ResponseEntity<Drug> updateDrug(@PathVariable Long id, @RequestBody Drug drug) {
        return ResponseEntity.ok(drugService.updateDrug(id, drug));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDrug(@PathVariable Long id) {
        drugService.deleteDrug(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/role/{role}")
    public ResponseEntity<List<User>> getUsersByRole(@PathVariable @Valid Role role) {
        try {

            List<User> users = userSerivce.findUserByRole(role);
            return ResponseEntity.ok(users);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null); // Return 400 for invalid roles
        }
    }

    // Example: Error handling for non-existing roles
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleInvalidRole(IllegalArgumentException e) {
        return ResponseEntity.badRequest().body("Invalid role provided.");
    }
}
