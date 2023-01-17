package com.dion.jobportal.repository;

import com.dion.jobportal.entity.Skills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SkillsRepository extends JpaRepository<Skills, Integer> {
    void deleteSkillsById(int id);
    Optional<Skills> findSkillsById(int id);
}
