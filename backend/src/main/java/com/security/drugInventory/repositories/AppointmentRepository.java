package com.security.drugInventory.repositories;

import com.security.drugInventory.user.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}
