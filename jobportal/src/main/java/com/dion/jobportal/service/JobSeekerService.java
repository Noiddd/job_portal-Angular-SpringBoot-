package com.dion.jobportal.service;

import com.dion.jobportal.entity.*;
import com.dion.jobportal.exception.UserNotFoundException;
import com.dion.jobportal.repository.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JobSeekerService  {
    private final JobSeekerRepository jobSeekerRepository;
    private final EducationRepository educationRepository;
    private final JobPostRepository jobPostRepository;

    @Autowired
    public JobSeekerService(JobSeekerRepository jobSeekerRepository,
                            EducationRepository educationRepository,
                            EmploymentHistoryRepository employmentHistoryRepository,
                            SkillsRepository skillsRepository,
                            JobPostRepository jobPostRepository
                            ) {
        this.jobSeekerRepository = jobSeekerRepository;
        this.educationRepository = educationRepository;
        this.employmentHistoryRepository = employmentHistoryRepository;
        this.skillsRepository = skillsRepository;
        this.jobPostRepository = jobPostRepository;
    }

    @Autowired
    EntityManager em;
    private final EmploymentHistoryRepository employmentHistoryRepository;
    private final SkillsRepository skillsRepository;

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
    public void editEducation(Education education, int educationId){
        Education editEducation = educationRepository.findById(educationId).orElseThrow(()-> new UserNotFoundException("Education by id " + educationId + " was not found"));

        editEducation.setInstitute(education.getInstitute());
        editEducation.setQualification(education.getQualification());
        editEducation.setStartDate(education.getStartDate());
        editEducation.setEndDate(education.getEndDate());

        educationRepository.save(editEducation);
    }
    @Transactional
    public void deleteEducation(int educationId) {
        educationRepository.deleteById(educationId);
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


    @Transactional
    public void editEmploymentHistory(EmploymentHistory employmentHistory, int employmentHistoryId) {
        EmploymentHistory editEmploymentHistory = employmentHistoryRepository.findById(employmentHistoryId).orElseThrow(()-> new UserNotFoundException("Employment history by id " + employmentHistoryId + " was not found"));

        editEmploymentHistory.setJobTitle(employmentHistory.getJobTitle());
        editEmploymentHistory.setCompany(employmentHistory.getCompany());
        editEmploymentHistory.setJobDescription(employmentHistory.getJobDescription());
        editEmploymentHistory.setStartDate(employmentHistory.getStartDate());
        editEmploymentHistory.setEndDate(employmentHistory.getEndDate());

        employmentHistoryRepository.save(editEmploymentHistory);
    }

    @Transactional
    public void deleteEmploymentHistory(int employmentHistoryId) {
        employmentHistoryRepository.deleteById(employmentHistoryId);
    }

    @Transactional
    public void addSkills(int jobSeekerId, Skills skill){
        // get the job seeker
        JobSeeker jobSeeker = findById(jobSeekerId);

        // setting relationship
        skill.setJobSeeker(jobSeeker);
        jobSeeker.addSkills(skill);

        // save into database
        em.persist(skill);
    }

    @Transactional
    public void deleteSkills(int skillsId){
        skillsRepository.deleteById(skillsId);
    }

    public List<JobSeeker> loginJobSeeker(String email, String password){
       TypedQuery<JobSeeker> query =  em.createQuery("select js from JobSeeker js where js.email like ?1 and js.password like ?2", JobSeeker.class).setParameter(1, email).setParameter(2, password);
        return query.getResultList();
    }

    public List<JobSeeker> checkUniqueEmail(String email){
        TypedQuery<JobSeeker> query = em.createQuery("select js from JobSeeker js where js.email like ?1", JobSeeker.class).setParameter(1, email);
        return query.getResultList();
    }

    // apply to jobs
    @Transactional
    public void applyJobPost(int jobSeekerId, JobPost jobPost){
        JobSeeker jobSeeker = findById(jobSeekerId);

        jobSeeker.addAppliedJobsList(jobPost);
        jobPost.addJobSeekerApplied(jobSeeker);

        em.persist(jobSeeker);

    }

    // get all applied jobs

    @Transactional
    public List<JobPost> findAllAppliedJobs(int id){
        JobSeeker jobSeeker = em.find(JobSeeker.class, id);
        return jobSeeker.getAppliedJobsList();
    }



}
