package com.dion.jobportal.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "employment_history")
public class EmploymentHistory implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name = "job_title")
    private String jobTitle;
    @Column(name = "company")
    private String company;
    @Column(name = "start_date")
    private String startDate;
    @Column(name = "end_date")
    private String endDate;
    @Column(name = "job_description")
    private String jobDescription;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="job_seeker_id")
    private JobSeeker jobSeeker;

    public EmploymentHistory() {

    }

    public EmploymentHistory(String jobTitle, String company, String startDate, String endDate, String jobDescription) {
        this.jobTitle = jobTitle;
        this.company = company;
        this.startDate = startDate;
        this.endDate = endDate;
        this.jobDescription = jobDescription;
    }

    @Override
    public String toString() {
        return "EmploymentHistory{" +
                "id=" + id +
                ", jobTitle='" + jobTitle + '\'' +
                ", company='" + company + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", jobDescription='" + jobDescription + '\'' +
                '}';
    }

    public JobSeeker getJobSeeker() {
        return jobSeeker;
    }

    public void setJobSeeker(JobSeeker jobSeeker) {
        this.jobSeeker = jobSeeker;
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

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }
}
