package com.dion.jobportal.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class JobSeekerJobPostKey implements Serializable {
    @Column(name="jobpost_id")
    private int jobPostId;

    @Column(name="jobseeker_id")
    private int jobSeekerId;

    public JobSeekerJobPostKey(int jobPostId, int jobSeekerId) {
        this.jobPostId = jobPostId;
        this.jobSeekerId = jobSeekerId;
    }

    public JobSeekerJobPostKey() {

    }


    public int getJobPostId() {
        return jobPostId;
    }

    public void setJobPostId(int jobPostId) {
        this.jobPostId = jobPostId;
    }

    public int getJobSeekerId() {
        return jobSeekerId;
    }

    public void setJobSeekerId(int jobSeekerId) {
        this.jobSeekerId = jobSeekerId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JobSeekerJobPostKey that = (JobSeekerJobPostKey) o;
        return jobPostId == that.jobPostId && jobSeekerId == that.jobSeekerId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(jobPostId, jobSeekerId);
    }
}
