package com.security.drugInventory.repositories;


import com.security.drugInventory.user.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
