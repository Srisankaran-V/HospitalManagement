package com.security.drugInventory.service;




import com.security.drugInventory.repositories.PatientRepository;
import com.security.drugInventory.user.Patient;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientService {
    private final PatientRepository patientRepository;

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Patient addPatient(Patient patient) {
        return patientRepository.save(patient);
    }
    public List<Patient> getPatientsByName(Sort name){
        return patientRepository.findAll(name);
    }
}
