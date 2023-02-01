package com.dion.jobportal.entity;

import jakarta.persistence.*;


@Entity
public class JobSeekerJobPost  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @ManyToOne
    @JoinColumn(name="jobpost_id")
    JobPost jobPost;

    @ManyToOne
    @JoinColumn(name="jobseeker_id")
    JobSeeker jobSeeker;

    private String applicationStatus;

    public JobSeekerJobPost(JobPost jobPost, JobSeeker jobSeeker, String applicationStatus) {
        this.jobPost = jobPost;
        this.jobSeeker = jobSeeker;
        this.applicationStatus = applicationStatus;
    }

    public JobSeekerJobPost() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public JobPost getJobPost() {
        return jobPost;
    }

    public void setJobPost(JobPost jobPost) {
        this.jobPost = jobPost;
    }

    public JobSeeker getJobSeeker() {
        return jobSeeker;
    }

    public void setJobSeeker(JobSeeker jobSeeker) {
        this.jobSeeker = jobSeeker;
    }

    public String getApplicationStatus() {
        return applicationStatus;
    }

    public void setApplicationStatus(String applicationStatus) {
        this.applicationStatus = applicationStatus;
    }
}
