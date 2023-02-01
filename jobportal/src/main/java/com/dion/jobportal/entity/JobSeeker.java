package com.dion.jobportal.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "job_seeker")
public class JobSeeker implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "phone")
    private String phone;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;

    @OneToMany(mappedBy = "jobSeeker")
    private List<EmploymentHistory> employmentHistoryList = new ArrayList<>();

    @OneToMany(mappedBy = "jobSeeker")
    private List<Education> educationList = new ArrayList<>();

    @OneToMany(mappedBy = "jobSeeker")
    private List<Skills> skillsList = new ArrayList<>();


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "jobseeker_jobpost",
            joinColumns = @JoinColumn(name="jobseeker_id"),
            inverseJoinColumns = @JoinColumn(name = "jobpost_id")
    )
    @JsonIgnore
    private List<JobPost> appliedJobsList = new ArrayList<>();

    @OneToMany(mappedBy = "jobSeeker")
    List<JobSeekerJobPost> applicationStatus = new ArrayList<>();

    public JobSeeker(String firstName, String lastName, String phone, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

    public JobSeeker() {

    }

    public List<JobSeekerJobPost> getApplicationStatus() {
        return applicationStatus;
    }

    public void setApplicationStatus(List<JobSeekerJobPost> applicationStatus) {
        this.applicationStatus = applicationStatus;
    }



    public void addEmploymentHistory(EmploymentHistory employmentHistory){
        if(employmentHistoryList == null){
            employmentHistoryList = new ArrayList<>();
        }
        employmentHistoryList.add(employmentHistory);
    }

    public void removeEmploymentHistory(EmploymentHistory employmentHistory){
        employmentHistoryList.remove(employmentHistory);
    }

    public void addEducation(Education education){
        if(educationList == null){
            educationList = new ArrayList<>();
        }
        educationList.add(education);
    }

    public void removeEducation(Education education){
        educationList.remove(education);
    }

    public void addSkills(Skills skill){
        if(skillsList == null){
            skillsList = new ArrayList<>();
        }
        skillsList.add(skill);
    }

    public void removeSkill(Skills skill){
        skillsList.remove(skill);
    }

    public void addAppliedJobsList(JobPost jobPost){
        if(appliedJobsList == null){
            appliedJobsList = new ArrayList<>();
        }
        appliedJobsList.add(jobPost);
    }

    public void removeAppliedJobsList(JobPost jobPost){
        appliedJobsList.remove(jobPost);
    }


    public List<JobPost> getAppliedJobsList() {
        return appliedJobsList;
    }

    public void setAppliedJobsList(List<JobPost> appliedJobsList) {
        this.appliedJobsList = appliedJobsList;
    }

    public List<Education> getEducationList() {
        return educationList;
    }

    public void setEducationList(List<Education> educationList) {
        this.educationList = educationList;
    }

    public List<EmploymentHistory> getEmploymentHistoryList() {
        return employmentHistoryList;
    }

    public void setEmploymentHistoryList(List<EmploymentHistory> employmentHistoryList) {
        this.employmentHistoryList = employmentHistoryList;
    }

    public List<Skills> getSkillsList() {
        return skillsList;
    }

    public void setSkillsList(List<Skills> skillsList) {
        this.skillsList = skillsList;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
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
}
