package com.security.drugInventory.service;



import com.security.drugInventory.repositories.DrugRepository;
import com.security.drugInventory.user.Drug;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DrugService {
    private final DrugRepository drugRepository;

    // Fetch all drugs - Only Doctors and Admins
    @PreAuthorize("hasRole('DOCTOR') or hasRole('ADMIN')")
    public List<Drug> getAllDrugs() {
        return drugRepository.findAll();
    }

    // Fetch drug by ID - Any authenticated user
    @PreAuthorize("isAuthenticated()")
    public Optional<Drug> getDrugById(Long id) {
        return drugRepository.findById(id);
    }

    // Create new drug - Only Admins
    @PreAuthorize("hasRole('ADMIN')")
    public Drug createDrug(Drug drug) {
        return drugRepository.save(drug);
    }


    // Update drug - Only Admins
    @PreAuthorize("hasRole('ADMIN')")
    public Drug updateDrug(Long id, Drug updatedDrug) {
        Drug existingDrug = drugRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Drug not found with id: " + id));
        existingDrug.setName(updatedDrug.getName());
        existingDrug.setComposition(updatedDrug.getComposition());
        existingDrug.setImages(updatedDrug.getImages());
        existingDrug.setManufacturer(updatedDrug.getManufacturer());
        existingDrug.setUses(updatedDrug.getUses());
        existingDrug.setSideEffect(updatedDrug.getSideEffect());
        existingDrug.setStock(updatedDrug.getStock());

        return drugRepository.save(existingDrug);
    }
    public void updateStock(Long drugId, int newStock) {
        Drug drug = drugRepository.findById(drugId).orElseThrow();
        drug.setStock(newStock);
        drugRepository.save(drug);
    }

    // Delete drug - Only Admins
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteDrug(Long id) {
        drugRepository.deleteById(id);
    }

    // Fetch stock details - Only Doctors
    @PreAuthorize("hasRole('DOCTOR') or hasRole('ADMIN')")
    public List<Drug> getStockDetails() {
        return drugRepository.findAll(); // Modify this if a stock threshold filter is required
    }
}
