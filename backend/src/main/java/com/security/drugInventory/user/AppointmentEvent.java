package com.security.drugInventory.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentEvent {
    private Long appointmentId;
    private Long userId;
    private Long doctorId;
    private String status; // PENDING, COMPLETED, CANCELED
    private LocalDateTime timestamp;
}

