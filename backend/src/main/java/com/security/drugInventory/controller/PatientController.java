package com.security.drugInventory.controller;

import com.security.drugInventory.service.PatientService;
import com.security.drugInventory.user.Patient;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/patient")
public class PatientController {
    private final PatientService patientService;

    @PostMapping("/add")
    public ResponseEntity<Patient> addPatiend(@RequestBody Patient patient){
        System.out.println("patient controller : "+patient);
        return ResponseEntity.ok(patientService.addPatient(patient));
    }
    @GetMapping("/all")
    public List<Patient> getAllPatient(){
        List<Patient> patients = patientService.getAllPatients();
        patients.forEach(System.out::println); // Debugging

        return patients;
    }

}
