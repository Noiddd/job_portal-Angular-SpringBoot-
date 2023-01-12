package com.dion.jobportal.service;

import com.dion.jobportal.entity.Education;
import com.dion.jobportal.entity.EmploymentHistory;
import com.dion.jobportal.entity.JobSeeker;
import com.dion.jobportal.exception.UserNotFoundException;
import com.dion.jobportal.repository.JobSeekerRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JobSeekerService  {
    private final JobSeekerRepository jobSeekerRepository;

    @Autowired
    public JobSeekerService(JobSeekerRepository jobSeekerRepository) {
        this.jobSeekerRepository = jobSeekerRepository;
    }

    @Autowired
    EntityManager em;

    public JobSeeker addJobSeeker(JobSeeker jobSeeker){
        return jobSeekerRepository.save(jobSeeker);
    }

    @Transactional
    public JobSeeker editJobSeeker(JobSeeker jobSeeker){
        return jobSeekerRepository.save(jobSeeker);
    }

    public List<JobSeeker> findAll(){
        return jobSeekerRepository.findAll();
    }
    public JobSeeker findById(int id){
        return jobSeekerRepository.findById(id).orElseThrow(()-> new UserNotFoundException("User by id " + id + " was not found"));
    }

    @Transactional
    public void addEducation(int jobSeekerId, Education education){
        // get the job seeker
        JobSeeker jobSeeker = findById(jobSeekerId);

        education.setJobSeeker(jobSeeker);
        jobSeeker.addEducation(education);

        // save into database
        em.persist(education);

    }

    @Transactional
    public void addEmploymentHistory(int jobSeekerId, EmploymentHistory employmentHistory){
        // get the job seeker
        JobSeeker jobSeeker = findById(jobSeekerId);

        // setting relationship
        employmentHistory.setJobSeeker(jobSeeker);
        jobSeeker.addEmploymentHistory(employmentHistory);

        // save into database
        em.persist(employmentHistory);

    }

    public List<JobSeeker> loginJobSeeker(String email, String password){
       TypedQuery<JobSeeker> query =  em.createQuery("select js from JobSeeker js where js.email like ?1 and js.password like ?2", JobSeeker.class).setParameter(1, email).setParameter(2, password);
        return query.getResultList();
    }

    public List<JobSeeker> checkUniqueEmail(String email){
        TypedQuery<JobSeeker> query = em.createQuery("select js from JobSeeker js where js.email like ?1", JobSeeker.class).setParameter(1, email);
        return query.getResultList();
    }

}
