package com.dion.jobportal.repository;

import com.dion.jobportal.entity.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EducationRepository extends JpaRepository<Education, Integer> {
    void deleteEducationById(int id);
    Optional<Education> findEducationById(int id);
}
