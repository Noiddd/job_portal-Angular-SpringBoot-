package com.dion.jobportal.service;

import com.dion.jobportal.entity.Employer;
import com.dion.jobportal.entity.JobPost;
import com.dion.jobportal.entity.JobSeeker;
import com.dion.jobportal.exception.UserNotFoundException;
import com.dion.jobportal.repository.EmployerRepository;
import com.dion.jobportal.repository.JobPostRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JobPostService {
    private final JobPostRepository jobPostRepository;
    private final EmployerRepository employerRepository;

    @Autowired
    EntityManager em;

    public Employer findById(int id){
        return employerRepository.findEmployerById(id).orElseThrow(()-> new UserNotFoundException("Employer by id " + id + " was not found"));
    }

    public JobPostService(JobPostRepository jobPostRepository,
                          EmployerRepository employerRepository) {
        this.jobPostRepository = jobPostRepository;
        this.employerRepository = employerRepository;
    }

    public List<JobPost> getAllJobPost(){
        return jobPostRepository.findAll();
    }


}
