package com.security.drugInventory.service;

import com.security.drugInventory.repositories.AppointmentRepository;
import com.security.drugInventory.user.Appointment;
import com.security.drugInventory.user.AppointmentEvent;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AppointmentService {
    private static final Logger logger = LoggerFactory.getLogger(AppointmentService.class);
    private final AppointmentRepository appointmentRepository;

    public void bookAppointment(AppointmentEvent event) {
        Appointment appointment = new Appointment();
        appointment.setId(event.getAppointmentId());
        appointment.setDoctorId(event.getDoctorId());
        appointment.setPatientId(event.getUserId());
        appointment.setStatus("PENDING");
        appointment.setTimestamp(event.getTimestamp());

        appointmentRepository.save(appointment);
        logger.info("Added New Appointment: {}", appointment);
    }

    public void completeAppointment(Long appointmentId) {
        appointmentRepository.findById(appointmentId).ifPresent(appointment -> {
            appointment.setStatus("COMPLETED");
            appointmentRepository.save(appointment);
            logger.info("Marked Appointment as COMPLETED: {}", appointmentId);
        });
    }

    public void cancelAppointment(Long appointmentId) {
        appointmentRepository.findById(appointmentId).ifPresent(appointment -> {
            appointment.setStatus("CANCELED");
            appointmentRepository.save(appointment);
            logger.info("Marked Appointment as CANCELED: {}", appointmentId);
        });
    }
}
