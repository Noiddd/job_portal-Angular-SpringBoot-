package com.dion.jobportal.repository;

import com.dion.jobportal.entity.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployerRepository extends JpaRepository<Employer, Integer> {
    void deleteEmployerById(int id);
    Optional<Employer> findEmployerById(int id);

}
