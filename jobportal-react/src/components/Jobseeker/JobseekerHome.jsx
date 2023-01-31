import React, { useState, useEffect } from "react";
import { Navbar } from "../index";
import { getAllJobPosts } from "../../utils/fetchFromAPI";
import styles from "../../styles/Home.module.css";
import JobPost from "../JobPost/JobPost";
import ViewJob from "../JobPost/ViewJob";

const JobseekerHome = () => {
  let [jobsData, setJobsData] = useState([]);
  let [currentDay, setCurrentDay] = useState("");
  let [currentMonth, setCurrentMonth] = useState("");
  let [viewJobData, setViewJobData] = useState({});
  let [openViewJob, setOpenViewJob] = useState(false);

  useEffect(() => {
    const getAllJobs = async () => {
      const allJobsData = await getAllJobPosts();
      setJobsData(allJobsData);
    };

    getAllJobs();

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
      <Navbar></Navbar>
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
          {openViewJob && <ViewJob viewJobData={viewJobData} />}
        </div>
      </div>
    </>
  );
};

export default JobseekerHome;
