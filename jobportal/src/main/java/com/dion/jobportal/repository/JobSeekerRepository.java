package com.dion.jobportal.repository;

import com.dion.jobportal.entity.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JobSeekerRepository extends JpaRepository<JobSeeker, Integer> {
    void deleteJobSeekerById(int id);
    Optional<JobSeeker> findJobSeekerById(int id);
}
