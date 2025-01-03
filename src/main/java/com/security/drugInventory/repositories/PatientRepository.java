package com.security.drugInventory.repositories;

// PatientRepository.java

import com.security.drugInventory.user.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
}

