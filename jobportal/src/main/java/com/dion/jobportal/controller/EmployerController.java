package com.dion.jobportal.controller;

import com.dion.jobportal.entity.Education;
import com.dion.jobportal.entity.Employer;
import com.dion.jobportal.entity.JobPost;
import com.dion.jobportal.entity.JobSeeker;
import com.dion.jobportal.service.EmployerService;
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

}
