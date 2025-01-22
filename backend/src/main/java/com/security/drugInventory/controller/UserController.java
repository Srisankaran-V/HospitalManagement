package com.security.drugInventory.controller;

import com.security.drugInventory.service.UserSerivce;
import com.security.drugInventory.user.Role;
import com.security.drugInventory.user.User;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
    
import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {


}
