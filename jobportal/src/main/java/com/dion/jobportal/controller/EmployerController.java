package com.dion.jobportal.controller;

import com.dion.jobportal.entity.*;
import com.dion.jobportal.service.EmployerService;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employer")
public class EmployerController {
    private final EmployerService employerService;

    public EmployerController(EmployerService employerService) {
        this.employerService = employerService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<List<Employer>> loginEmployer(@PathVariable("email") String email, @PathVariable("password") String password){
        List<Employer> employer = employerService.loginEmployer(email, password);
        return new ResponseEntity<>(employer, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public ResponseEntity<Employer> addEmployer(@RequestBody Employer employer){
        Employer newEmployer = employerService.addEmployer(employer);
        return new ResponseEntity<>(newEmployer, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/addjobpost/{id}")
    public ResponseEntity<?> addJobPostEmployer(@RequestBody JobPost jobPost, @PathVariable("id") int id){
        employerService.addJobPost(id,jobPost);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/uniqueemail/{email}")
    public ResponseEntity<List<Employer>> checkEmployerUniqueEmail(@PathVariable("email") String email){
        List<Employer> employer = employerService.checkEmployerUniqueEmail(email);
        return new ResponseEntity<>(employer, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/edit")
    public ResponseEntity<Employer> editEmployer(@RequestBody Employer employer){
        Employer editEmployer = employerService.editEmployer(employer);
        return new ResponseEntity<>(editEmployer, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/jobsposted/{id}")
    public ResponseEntity<List<JobPost>> findAllJobsPosted(@PathVariable("id") int employerId){
        List<JobPost> jobPosts = employerService.findAllJobsPosted(employerId);
        return new ResponseEntity<>(jobPosts, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/changeapplicantstatus/{jobSeekerId}/{jobPostId}")
    public ResponseEntity<List<JobSeekerJobPost>> changeApplicationStatus(@PathVariable("jobSeekerId") int jobSeekerId, @PathVariable("jobPostId") int jobPostId){
        List<JobSeekerJobPost> JobSeekerJobPost = employerService.editApplicationStatus(jobSeekerId, jobPostId);
        return new ResponseEntity<>(JobSeekerJobPost, HttpStatus.OK);
    }




}
