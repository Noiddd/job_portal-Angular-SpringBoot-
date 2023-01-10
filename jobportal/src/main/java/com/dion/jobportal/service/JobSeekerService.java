package com.dion.jobportal.service;

import com.dion.jobportal.entity.Education;
import com.dion.jobportal.entity.EmploymentHistory;
import com.dion.jobportal.entity.JobSeeker;
import com.dion.jobportal.exception.UserNotFoundException;
import com.dion.jobportal.repository.JobSeekerRepository;
import jakarta.persistence.EntityManager;
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


    public JobSeeker editJobSeeker(JobSeeker jobSeeker){
        em.merge(jobSeeker);
        return jobSeeker;
    }

    public List<JobSeeker> findAll(){
        return jobSeekerRepository.findAll();
    }
    public JobSeeker findById(int id){
        return jobSeekerRepository.findById(id).orElseThrow(()-> new UserNotFoundException("User by id " + id + " was not found"));
    }

    @Transactional
    public void addEducation(int jobSeekerId, List<Education> educations){
        // get the job seeker
        JobSeeker jobSeeker = findById(jobSeekerId);

        for(Education education: educations){
            // setting relationship
            education.setJobSeeker(jobSeeker);
            jobSeeker.addEducation(education);

            // save into database
            em.persist(education);
        }
    }

    public void addEmploymentHistory(int jobSeekerId, List<EmploymentHistory> employmentHistories){
        // get the job seeker
        JobSeeker jobSeeker = findById(jobSeekerId);

        for(EmploymentHistory employmentHistory: employmentHistories){
            // setting relationship
            employmentHistory.setJobSeeker(jobSeeker);
            jobSeeker.addEmploymentHistory(employmentHistory);

            // save into database
            em.persist(employmentHistory);
        }
    }

}
