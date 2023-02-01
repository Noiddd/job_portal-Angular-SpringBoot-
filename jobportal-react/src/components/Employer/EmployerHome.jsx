import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { getAllJobsPostedByEmployer } from "../../utils/fetchFromAPI";
import styles from "../../styles/Home.module.css";
import JobPost from "../JobPost/JobPost";
import ViewJob from "../JobPost/ViewJob";
import EmployerApplicant from "./Employer-ViewApplicants/Employer-Applicant";

const EmployerHome = () => {
  let [jobsData, setJobsData] = useState([]);
  let [currentDay, setCurrentDay] = useState("");
  let [currentMonth, setCurrentMonth] = useState("");
  let [viewJobData, setViewJobData] = useState({});
  let [openViewJob, setOpenViewJob] = useState(false);

  let [showJobApplicants, setShowJobApplicants] = useState(false);
  let [jobApplicantData, setJobApplicantData] = useState();

  useEffect(() => {
    const employerId = JSON.parse(
      window.localStorage.getItem("employerData")
    )[0].id;

    const getJobsPostedByEmployer = async (employerId) => {
      const allAppliedJobsData = await getAllJobsPostedByEmployer(employerId);
      setJobsData(allAppliedJobsData);
    };

    getJobsPostedByEmployer(employerId);

    setCurrentMonth(new Date().toLocaleString("en-US", { month: "long" }));
    setCurrentDay(new Date().toLocaleString("en-US", { day: "2-digit" }));
  }, []);

  const viewJob = (viewJobData) => {
    setOpenViewJob(true);
    setViewJobData(viewJobData);
    console.log(viewJobData);
  };

  const openJobApplicants = (viewJobData) => {
    setShowJobApplicants(true);
    console.log(viewJobData);
    setJobApplicantData(viewJobData);
  };

  return (
    <>
      <Navbar />
      <div className={styles.homeContainer}>
        <div className={styles.homeLeftContainer}>
          <div className={styles.date}>
            Today, {currentDay} {currentMonth}
          </div>
          <div className={styles.search}>Search Bar</div>
          <div className={styles.filter}>filter buttons</div>

          {showJobApplicants ? (
            <div className={styles.applicantList}>
              {jobApplicantData.jobSeekerAppliedList.map((applicant, index) => {
                return <EmployerApplicant key={index} applicant={applicant} />;
              })}
            </div>
          ) : (
            <div className={styles.jobList}>
              {jobsData.map((job, index) => {
                return <JobPost key={index} jobData={job} viewJob={viewJob} />;
              })}
            </div>
          )}
        </div>

        <div className={styles.homeRightContainer}>
          {openViewJob && (
            <ViewJob
              viewJobData={viewJobData}
              viewApplicants={true}
              openJobApplicants={openJobApplicants}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EmployerHome;
