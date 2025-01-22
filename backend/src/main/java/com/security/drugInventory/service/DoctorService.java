package com.security.drugInventory.service;

import com.security.drugInventory.repositories.DoctorRepository;
import com.security.drugInventory.user.Doctor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }
    public Doctor addDoctor(Doctor doctor){
        return doctorRepository.save(doctor);

    }
}
