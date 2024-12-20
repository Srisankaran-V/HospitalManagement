package com.security.drugInventory.controller;

import com.security.drugInventory.service.PatientService;
import com.security.drugInventory.user.Patient;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/patient/")
public class PatientController {
    private final PatientService patientService;

    @PostMapping("/add")
    public ResponseEntity<Patient> addPatiend(@RequestBody Patient patient){
        return ResponseEntity.ok(patientService.addPatient(patient));
    }
}
