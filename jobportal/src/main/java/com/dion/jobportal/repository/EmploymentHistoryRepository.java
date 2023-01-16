package com.dion.jobportal.repository;

import com.dion.jobportal.entity.EmploymentHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmploymentHistoryRepository extends JpaRepository<EmploymentHistory, Integer> {
    void deleteEmploymentHistoryById(int id);
    Optional<EmploymentHistory> findEmploymentHistoryById(int id);
}
