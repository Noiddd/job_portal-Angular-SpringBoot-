import React, { useState, useEffect } from "react";
import { Navbar } from "../index";
import { getAllJobPosts } from "../../utils/fetchFromAPI";
import styles from "../../styles/Home.module.css";
import JobPost from "../JobPost/JobPost";
import ViewJob from "../JobPost/ViewJob";
import ApplyJobSuccess from "../JobPost/ApplyJobSuccess";

const JobseekerHome = () => {
  let [jobsData, setJobsData] = useState([]);
  let [currentDay, setCurrentDay] = useState("");
  let [currentMonth, setCurrentMonth] = useState("");
  let [viewJobData, setViewJobData] = useState({});
  let [openViewJob, setOpenViewJob] = useState(false);

  let [showApplyJobSuccess, setShowApplyJobSuccess] = useState(false);

  let [searchInput, setSearchInput] = useState("");
  let [filteredData, setFilteredData] = useState([]);

  const openApplyJobSuccess = () => {
    setShowApplyJobSuccess(true);
  };

  const hideApplyJobSuccess = () => {
    setShowApplyJobSuccess(false);
  };

  useEffect(() => {
    const getAllJobs = async () => {
      const allJobsData = await getAllJobPosts();
      setJobsData(allJobsData);
    };

    getAllJobs();

    setCurrentMonth(new Date().toLocaleString("en-US", { month: "long" }));
    setCurrentDay(new Date().toLocaleString("en-US", { day: "2-digit" }));
  }, [showApplyJobSuccess]);

  useEffect(() => {
    const getAllJobs = async () => {
      const allJobsData = await getAllJobPosts();
      setJobsData(allJobsData);
    };

    getAllJobs();

    setCurrentMonth(new Date().toLocaleString("en-US", { month: "long" }));
    setCurrentDay(new Date().toLocaleString("en-US", { day: "2-digit" }));
  }, []);

  useEffect(() => {
    if (searchInput.length === 0) {
      setFilteredData([]);
    } else {
      const filterArray = jobsData.filter((job) => {
        return job.jobTitle.toLowerCase().includes(searchInput);
      });
      setFilteredData(filterArray);
    }
  }, [searchInput, jobsData]);

  const changeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const viewJob = (viewJobData) => {
    setOpenViewJob(true);
    setViewJobData(viewJobData);
    console.log(viewJobData);
  };

  return (
    <>
      <Navbar></Navbar>

      {showApplyJobSuccess && (
        <ApplyJobSuccess hideApplyJobSuccess={hideApplyJobSuccess} />
      )}

      <div className={styles.homeContainer}>
        <div className={styles.homeLeftContainer}>
          <div className={styles.date}>
            Today, {currentDay} {currentMonth}
          </div>
          <div className={styles.search}>
            <input
              className={styles.searchBar}
              type="text"
              value={searchInput}
              onChange={changeSearch}
            />
          </div>
          {/* <div className={styles.filter}>filter buttons</div> */}
          {searchInput.length === 0 ? (
            <div className={styles.jobList}>
              {jobsData.map((job, index) => {
                return <JobPost key={index} jobData={job} viewJob={viewJob} />;
              })}
            </div>
          ) : (
            <div className={styles.jobList}>
              {filteredData.map((job, index) => {
                return <JobPost key={index} jobData={job} viewJob={viewJob} />;
              })}
            </div>
          )}
        </div>

        <div className={styles.homeRightContainer}>
          {openViewJob && (
            <ViewJob
              viewJobData={viewJobData}
              openApplyJobSuccess={openApplyJobSuccess}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default JobseekerHome;
