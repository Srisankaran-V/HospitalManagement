package com.security.drugInventory.repositories;

import com.security.drugInventory.user.Drug;
import com.security.drugInventory.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface DrugRepository extends JpaRepository<Drug, Long> {

}


