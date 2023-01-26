package com.dion.jobportal.service;

import com.dion.jobportal.entity.Employer;
import com.dion.jobportal.entity.JobPost;
import com.dion.jobportal.entity.JobSeeker;
import com.dion.jobportal.exception.UserNotFoundException;
import com.dion.jobportal.repository.EmployerRepository;
import com.dion.jobportal.repository.JobPostRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EmployerService {
    private final JobPostRepository jobPostRepository;
    private final EmployerRepository employerRepository;

    @Autowired
    EntityManager em;

    public EmployerService(JobPostRepository jobPostRepository, EmployerRepository employerRepository) {
        this.jobPostRepository = jobPostRepository;
        this.employerRepository = employerRepository;
    }

    public Employer findById(int id){
        return employerRepository.findEmployerById(id).orElseThrow(()-> new UserNotFoundException("Employer by id " + id + " was not found"));
    }

    public Employer addEmployer(Employer employer){
        return employerRepository.save(employer);
    }

    public List<Employer> loginEmployer(String email, String password){
        TypedQuery<Employer> query =  em.createQuery("select e from Employer e where e.email like ?1 and e.password like ?2", Employer.class).setParameter(1, email).setParameter(2, password);
        return query.getResultList();
    }

    @Transactional
    public void addJobPost(int employerId, JobPost jobPost){
        // get the job seeker
        Employer employer = findById(employerId);

        // setting relationship
        jobPost.setEmployer(employer);
        employer.addJobPost(jobPost);

        // save into database
        em.persist(jobPost);
    }
}
