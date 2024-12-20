package com.security.drugInventory.service;

import com.security.drugInventory.repositories.UserRepository;
import com.security.drugInventory.user.Role;
import com.security.drugInventory.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserSerivce {
    private final UserRepository userRepository;
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }
    public List<User> findUserByRole(Role role) {
        return userRepository.findUserByRole(role)
                .map(List::of)
                .orElse(List.of());
    }



}
