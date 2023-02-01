package com.dion.jobportal.repository;

import com.dion.jobportal.entity.Education;
import com.dion.jobportal.entity.JobSeekerJobPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JobSeekerJobPostRepository extends JpaRepository<JobSeekerJobPost, Integer> {
    void deleteJobSeekerJobPostById(int id);
    Optional<JobSeekerJobPost> findJobSeekerJobPostById(int id);
}
