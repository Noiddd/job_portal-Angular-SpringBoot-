package com.dion.jobportal.repository;

import com.dion.jobportal.entity.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JobPostRepository extends JpaRepository<JobPost, Integer> {
    void deleteJobPostById(int id);
    Optional<JobPost> findJobPostById(int id);
}
