package com.security.drugInventory.repositories;

// PatientRepository.java

import com.security.drugInventory.user.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
