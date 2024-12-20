package com.security.drugInventory.user;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Data
@Setter
@Getter
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private LocalDate admittedDate;
    private String cause;
    private long phoneNumber;
    private String email;

//    private LocalDate dischargeDate;


}

