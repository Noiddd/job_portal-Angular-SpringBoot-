package com.dion.jobportal.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "job_post")
public class JobPost implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name = "job_title")
    private String jobTitle;

    @Column(name = "description")
    private String description;

    @Column(name = "salary")
    private String salary;

    @Column(name = "skills")
    private String skills;

    @Column(name = "listing_status")
    private String listingStatus;

    @Column(name = "employer_name")
    private String employerName;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="employer_id")
    private Employer employer;

    @ManyToMany(fetch = FetchType.EAGER, mappedBy = "appliedJobsList")
    private List<JobSeeker> jobSeekerAppliedList = new ArrayList<>();

    @OneToMany(mappedBy = "jobPost")
    List<JobSeekerJobPost> applicationStatus;

    public JobPost(String jobTitle, String description, String salary, String skills, String listingStatus, String employerName) {
        this.jobTitle = jobTitle;
        this.description = description;
        this.salary = salary;
        this.skills = skills;
        this.listingStatus = listingStatus;
        this.employerName = employerName;
    }

    public JobPost(){

    }

    public List<JobSeekerJobPost> getApplicationStatus() {
        return applicationStatus;
    }

    public void setApplicationStatus(List<JobSeekerJobPost> applicationStatus) {
        this.applicationStatus = applicationStatus;
    }

    public void addJobSeekerApplied(JobSeeker jobSeeker){
        if(jobSeekerAppliedList == null){
            jobSeekerAppliedList = new ArrayList<>();
        }
        jobSeekerAppliedList.add(jobSeeker);
    }

    public void removeJobSeekerApplied(JobSeeker jobSeeker){
        jobSeekerAppliedList.remove(jobSeeker);
    }

    public List<JobSeeker> getJobSeekerAppliedList() {
        return jobSeekerAppliedList;
    }

    public void setJobSeekerAppliedList(List<JobSeeker> jobSeekerAppliedList) {
        this.jobSeekerAppliedList = jobSeekerAppliedList;
    }

    public int getId() {
        return id;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getListingStatus() {
        return listingStatus;
    }

    public void setListingStatus(String listingStatus) {
        this.listingStatus = listingStatus;
    }

    public Employer getEmployer() {
        return employer;
    }

    public void setEmployer(Employer employer) {
        this.employer = employer;
    }

    public String getEmployerName() {
        return employerName;
    }

    public void setEmployerName(String employerName) {
        this.employerName = employerName;
    }
}
