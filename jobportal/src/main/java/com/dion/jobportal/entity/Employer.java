package com.dion.jobportal.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "employer")
public class Employer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;

    @OneToMany(mappedBy = "employer")
    private List<JobPost> jobPostList = new ArrayList<>();


    public Employer(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public Employer(){

    }

    public void addJobPost(JobPost jobPost){
        if(jobPostList == null){
            jobPostList = new ArrayList<>();
        }
        jobPostList.add(jobPost);
    }

    public void removeJobPost(JobPost jobPost){
        jobPostList.remove(jobPost);
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<JobPost> getJobPostList() {
        return jobPostList;
    }

    public void setJobPostList(List<JobPost> jobPostList) {
        this.jobPostList = jobPostList;
    }
    
}
