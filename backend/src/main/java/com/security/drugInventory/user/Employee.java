// Employee.java
package com.security.drugInventory.user;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Data
@Setter
@Getter
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String role; // ADMIN, DOCTOR
    private boolean isPresent;
    private double workHours;

    private LocalDateTime loginTime;
    private LocalDateTime logoutTime;
}
