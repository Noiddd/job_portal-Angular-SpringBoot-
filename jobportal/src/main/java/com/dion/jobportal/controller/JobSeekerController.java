package com.dion.jobportal.controller;

import com.dion.jobportal.entity.Education;
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

    @GetMapping("/all")
    public ResponseEntity<List<JobSeeker>> getAllJobSeeker(){
        List<JobSeeker> jobSeekers = jobSeekerService.findAll();
        return new ResponseEntity<>(jobSeekers, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<JobSeeker> addJobSeeker(@RequestBody JobSeeker jobSeeker){
        JobSeeker newJobSeeker = jobSeekerService.addJobSeeker(jobSeeker);
        return new ResponseEntity<>(newJobSeeker, HttpStatus.CREATED);
    }

    @PutMapping("/addeducation/{id}")
    public ResponseEntity<?> addEducationJobSeeker(@RequestBody List<Education> educationList, @PathVariable("id") int id){
        jobSeekerService.addEducation(id,educationList);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
