package com.security.drugInventory.kafka;

import com.security.drugInventory.user.AppointmentEvent;
import com.security.drugInventory.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KafkaConsumerService {
    private static final Logger logger = LoggerFactory.getLogger(KafkaConsumerService.class);
    private final AppointmentService appointmentService;

    @KafkaListener(topics = "appointment_topic", groupId = "appointment-group")
    public void listen(AppointmentEvent event) {
        logger.info("Consumed Event: {}", event);

        switch (event.getStatus()) {
            case "CREATED":
                appointmentService.bookAppointment(event);
                break;
            case "COMPLETED":
                appointmentService.completeAppointment(event.getAppointmentId());
                break;
            case "CANCELED":
                appointmentService.cancelAppointment(event.getAppointmentId());
                break;
            default:
                logger.warn("Unknown event type: {}", event.getStatus());
        }
    }
}
