import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { getAppliedJobs } from "../../utils/fetchFromAPI";
import styles from "../../styles/Home.module.css";
import JobPost from "../JobPost/JobPost";
import ViewJob from "../JobPost/ViewJob";

const JobseekerJobsApplied = () => {
  let [jobsData, setJobsData] = useState([]);
  let [currentDay, setCurrentDay] = useState("");
  let [currentMonth, setCurrentMonth] = useState("");
  let [viewJobData, setViewJobData] = useState({});
  let [openViewJob, setOpenViewJob] = useState(false);

  useEffect(() => {
    const jobSeekerId = JSON.parse(
      window.localStorage.getItem("jobSeekerData")
    )[0].id;

    const getAllAppliedJobs = async (jobSeekerId) => {
      const allAppliedJobsData = await getAppliedJobs(jobSeekerId);
      setJobsData(allAppliedJobsData);
    };

    getAllAppliedJobs(jobSeekerId);

    setCurrentMonth(new Date().toLocaleString("en-US", { month: "long" }));
    setCurrentDay(new Date().toLocaleString("en-US", { day: "2-digit" }));
  }, []);

  const viewJob = (viewJobData) => {
    setOpenViewJob(true);
    setViewJobData(viewJobData);
    console.log(viewJobData);
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
          <div className={styles.jobList}>
            {jobsData.map((job, index) => {
              return <JobPost key={index} jobData={job} viewJob={viewJob} />;
            })}
          </div>
        </div>

        <div className={styles.homeRightContainer}>
          {openViewJob && (
            <ViewJob viewJobData={viewJobData} viewAppliedJob={true} />
          )}
        </div>
      </div>
    </>
  );
};

export default JobseekerJobsApplied;
