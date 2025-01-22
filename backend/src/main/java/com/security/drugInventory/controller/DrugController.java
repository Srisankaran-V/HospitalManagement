package com.security.drugInventory.controller;

import com.security.drugInventory.repositories.DrugRepository;
import com.security.drugInventory.service.DrugService;
import com.security.drugInventory.user.Drug;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/drugs")
@RequiredArgsConstructor
public class DrugController {
    private final DrugService drugService;
//    private DrugRepository drugRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Drug>> getAllDrugs() {
        return ResponseEntity.ok(drugService.getAllDrugs());
    }



    @GetMapping("/{id}")
    public ResponseEntity<Drug> getDrugById(@PathVariable Long id) {
        try {
            Optional<Drug> drugOptional = drugService.getDrugById(id);

            // If the drug is not found, return a 404 Not Found status
            return drugOptional.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
        } catch (Exception e) {
            // Log the exception (optional)
            e.printStackTrace();

            // Return a 500 Internal Server Error with a generic error message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null); // Or you can return a custom error message if needed
        }
    }


}
