package com.security.drugInventory.kafka;

import com.security.drugInventory.user.AppointmentEvent;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class KafkaProducerService {
    private static final Logger logger = LoggerFactory.getLogger(KafkaProducerService.class);
    private final KafkaTemplate<String, AppointmentEvent> kafkaTemplate;
    private final String TOPIC = "appointment_topic";

    public void sendAppointmentEvent(Long appointmentId, Long doctorId, Long userId, String status) {
        AppointmentEvent event = new AppointmentEvent(
                appointmentId, doctorId, userId, status, LocalDateTime.now());
        kafkaTemplate.send(TOPIC, event);
        logger.info("Produced Event: {}", event);
    }
}
