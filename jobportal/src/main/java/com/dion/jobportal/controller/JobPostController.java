package com.dion.jobportal.controller;

import com.dion.jobportal.entity.JobPost;
import com.dion.jobportal.entity.JobSeeker;
import com.dion.jobportal.service.JobPostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/jobpost")
public class JobPostController {

    private final JobPostService jobPostService;

    public JobPostController(JobPostService jobPostService) {
        this.jobPostService = jobPostService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/jobs")
    public ResponseEntity<List<JobPost>> getAllJobPost(){
        List<JobPost> jobPosts = jobPostService.getAllJobPost();
        return new ResponseEntity<>(jobPosts, HttpStatus.OK);
    }
}
