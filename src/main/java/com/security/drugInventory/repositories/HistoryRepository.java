package com.security.drugInventory.repositories;

import com.security.drugInventory.user.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long> {
}
