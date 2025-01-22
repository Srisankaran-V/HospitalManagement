package com.security.drugInventory.user;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "doctors")
@Getter
@Setter
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int doctorId;

    private String name;
    private String speciality;
    private String about;
    private String description;
    private Integer age;
    private  String address;
    private String gender;
    private String email;
    private String phone;

}
