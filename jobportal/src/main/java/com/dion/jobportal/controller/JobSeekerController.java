package com.dion.jobportal.controller;

import com.dion.jobportal.entity.Education;
import com.dion.jobportal.entity.EmploymentHistory;
import com.dion.jobportal.entity.JobSeeker;
import com.dion.jobportal.service.JobSeekerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobseeker")
public class JobSeekerController {
    private final JobSeekerService jobSeekerService;

    public JobSeekerController(JobSeekerService jobSeekerService) {
        this.jobSeekerService = jobSeekerService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/all")
    public ResponseEntity<List<JobSeeker>> getAllJobSeeker(){
        List<JobSeeker> jobSeekers = jobSeekerService.findAll();
        return new ResponseEntity<>(jobSeekers, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/add")
    public ResponseEntity<JobSeeker> addJobSeeker(@RequestBody JobSeeker jobSeeker){
        JobSeeker newJobSeeker = jobSeekerService.addJobSeeker(jobSeeker);
        return new ResponseEntity<>(newJobSeeker, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/addeducation/{id}")
    public ResponseEntity<?> addEducationJobSeeker(@RequestBody Education education, @PathVariable("id") int id){
        jobSeekerService.addEducation(id,education);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/addemploymenthistory/{id}")
    public ResponseEntity<?> addEmploymentHistory(@RequestBody EmploymentHistory employmentHistory, @PathVariable("id") int id){
        jobSeekerService.addEmploymentHistory(id,employmentHistory);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<List<JobSeeker>> loginJobSeeker(@PathVariable("email") String email, @PathVariable("password") String password){
        List<JobSeeker> jobSeekers = jobSeekerService.loginJobSeeker(email, password);
        return new ResponseEntity<>(jobSeekers, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/uniqueemail/{email}")
    public ResponseEntity<List<JobSeeker>> checkUniqueEmail(@PathVariable("email") String email){
        List<JobSeeker> jobSeekers = jobSeekerService.checkUniqueEmail(email);
        return new ResponseEntity<>(jobSeekers, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/edit")
    public ResponseEntity<JobSeeker> editJobSeeker(@RequestBody JobSeeker jobSeeker){
        JobSeeker editJobSeeker = jobSeekerService.editJobSeeker(jobSeeker);
        return new ResponseEntity<>(editJobSeeker, HttpStatus.OK);
    }


}
