package com.dion.jobportal.service;

import com.dion.jobportal.entity.Employer;
import com.dion.jobportal.entity.JobPost;
import com.dion.jobportal.entity.JobSeeker;
import com.dion.jobportal.entity.JobSeekerJobPost;
import com.dion.jobportal.exception.UserNotFoundException;
import com.dion.jobportal.repository.EmployerRepository;
import com.dion.jobportal.repository.JobPostRepository;
import com.dion.jobportal.repository.JobSeekerJobPostRepository;
import com.dion.jobportal.repository.JobSeekerRepository;
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
    private final JobSeekerRepository jobSeekerRepository;

    private final JobSeekerJobPostRepository jobSeekerJobPostRepository;



    @Autowired
    EntityManager em;

    public EmployerService(JobPostRepository jobPostRepository, EmployerRepository employerRepository,JobSeekerRepository jobSeekerRepository, JobSeekerJobPostRepository jobSeekerJobPostRepository) {
        this.jobSeekerRepository = jobSeekerRepository;
        this.jobPostRepository = jobPostRepository;
        this.employerRepository = employerRepository;
        this.jobSeekerJobPostRepository = jobSeekerJobPostRepository;

    }

    public Employer findById(int id){
        return employerRepository.findEmployerById(id).orElseThrow(()-> new UserNotFoundException("Employer by id " + id + " was not found"));
    }

    public JobSeeker findJobSeekerById(int id){
        return jobSeekerRepository.findById(id).orElseThrow(()-> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public Employer addEmployer(Employer employer){
        return employerRepository.save(employer);
    }

    public Employer editEmployer(Employer employer){
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

    public List<Employer> checkEmployerUniqueEmail(String email){
        TypedQuery<Employer> query = em.createQuery("select em from Employer em where em.email like ?1", Employer.class).setParameter(1, email);
        return query.getResultList();
    }

    // get all posted jobs by employer
    @Transactional
    public List<JobPost> findAllJobsPosted(int employerId){
        Employer employer = em.find(Employer.class, employerId);
        return employer.getJobPostList();
    }

    // edit applicantion status
    @Transactional
    public List<JobSeekerJobPost> editApplicationStatus(int jobSeekerId, int jobPostId){
        TypedQuery<JobSeekerJobPost> query =  em.createQuery("select jsjp from JobSeekerJobPost jsjp where jsjp.jobpost_Id like ?1 and jsjp.jobseeker_id like ?2", JobSeekerJobPost.class).setParameter(1, jobPostId).setParameter(2, jobSeekerId);

        return query.getResultList();
    }
}
