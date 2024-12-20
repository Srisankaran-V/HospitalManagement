package com.security.drugInventory.service;




import com.security.drugInventory.repositories.EmployeeRepository;
import com.security.drugInventory.user.Employee;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public void markPresent(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow();
        employee.setPresent(true);
        employee.setLoginTime(LocalDateTime.now());
        employeeRepository.save(employee);
    }

    public void markLogout(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow();
        employee.setLogoutTime(LocalDateTime.now());
        employee.setPresent(false);

        Duration duration = Duration.between(employee.getLoginTime(), employee.getLogoutTime());
        employee.setWorkHours(duration.toHours());
        employeeRepository.save(employee);
    }
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }
}
