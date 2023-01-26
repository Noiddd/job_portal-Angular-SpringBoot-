package com.dion.jobportal.controller;

import com.dion.jobportal.entity.*;
import com.dion.jobportal.repository.EducationRepository;
import com.dion.jobportal.service.JobSeekerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobseeker")
public class JobSeekerController {
    private final JobSeekerService jobSeekerService;
    private final EducationRepository educationRepository;

    public JobSeekerController(JobSeekerService jobSeekerService,
                               EducationRepository educationRepository) {
        this.jobSeekerService = jobSeekerService;
        this.educationRepository = educationRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public ResponseEntity<List<JobSeeker>> getAllJobSeeker(){
        List<JobSeeker> jobSeekers = jobSeekerService.findAll();
        return new ResponseEntity<>(jobSeekers, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public ResponseEntity<JobSeeker> addJobSeeker(@RequestBody JobSeeker jobSeeker){
        JobSeeker newJobSeeker = jobSeekerService.addJobSeeker(jobSeeker);
        return new ResponseEntity<>(newJobSeeker, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/addeducation/{id}")
    public ResponseEntity<?> addEducationJobSeeker(@RequestBody Education education, @PathVariable("id") int id){
        jobSeekerService.addEducation(id,education);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/addemploymenthistory/{id}")
    public ResponseEntity<?> addEmploymentHistory(@RequestBody EmploymentHistory employmentHistory, @PathVariable("id") int id){
        jobSeekerService.addEmploymentHistory(id,employmentHistory);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<List<JobSeeker>> loginJobSeeker(@PathVariable("email") String email, @PathVariable("password") String password){
        List<JobSeeker> jobSeekers = jobSeekerService.loginJobSeeker(email, password);
        return new ResponseEntity<>(jobSeekers, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/uniqueemail/{email}")
    public ResponseEntity<List<JobSeeker>> checkUniqueEmail(@PathVariable("email") String email){
        List<JobSeeker> jobSeekers = jobSeekerService.checkUniqueEmail(email);
        return new ResponseEntity<>(jobSeekers, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/edit")
    public ResponseEntity<JobSeeker> editJobSeeker(@RequestBody JobSeeker jobSeeker){
        JobSeeker editJobSeeker = jobSeekerService.editJobSeeker(jobSeeker);
        return new ResponseEntity<>(editJobSeeker, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/editeducation/{educationId}")
    public ResponseEntity<JobSeeker> editEducation(@PathVariable("educationId") int educationId, @RequestBody Education education){
        jobSeekerService.editEducation(education, educationId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/editemploymenthistory/{employmentHistoryId}")
    public ResponseEntity<EmploymentHistory> editEmploymentHistory(@PathVariable("employmentHistoryId") int employmentHistoryId, @RequestBody EmploymentHistory employmentHistory){
       jobSeekerService.editEmploymentHistory(employmentHistory, employmentHistoryId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/deleteeducation/{educationId}")
    public ResponseEntity<?> deleteEducation(@PathVariable("educationId") int educationId){
        jobSeekerService.deleteEducation(educationId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/deleteemploymenthistory/{employmentHistoryId}")
    public ResponseEntity<?> deleteEmploymentHistory(@PathVariable("employmentHistoryId") int employmentHistoryId){
        jobSeekerService.deleteEmploymentHistory(employmentHistoryId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/addskill/{id}")
    public ResponseEntity<?> addskillJobSeeker(@RequestBody Skills skill, @PathVariable("id") int id){
        jobSeekerService.addSkills(id,skill);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/deleteskill/{skillId}")
    public ResponseEntity<?> deleteSkill(@PathVariable("skillId") int skillId){
        jobSeekerService.deleteSkills(skillId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/applyjobpost/{id}")
    public ResponseEntity<?> applyJobPost(@RequestBody JobPost jobPost, @PathVariable("id") int id){
        jobSeekerService.applyJobPost(id,jobPost);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/appliedjobs/{id}")
    public ResponseEntity<List<JobPost>> findAppliedJobs(@PathVariable("id") int id){
        List<JobPost> appliedJobPost = jobSeekerService.findAllAppliedJobs(id);
        return new ResponseEntity<>(appliedJobPost, HttpStatus.OK);
    }


}
