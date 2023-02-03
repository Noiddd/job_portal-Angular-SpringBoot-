import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { getAllJobPosts } from "../utils/fetchFromAPI";
import JobPost from "./JobPost/JobPost";
import styles from "../styles/Home.module.css";
import ViewJob from "./JobPost/ViewJob";

const Home = () => {
  let [jobsData, setJobsData] = useState([]);
  let [currentDay, setCurrentDay] = useState("");
  let [currentMonth, setCurrentMonth] = useState("");
  let [viewJobData, setViewJobData] = useState({});
  let [openViewJob, setOpenViewJob] = useState(false);

  let [searchInput, setSearchInput] = useState("");
  let [filteredData, setFilteredData] = useState([]);

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
      <Navbar />

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
              placeholder="Search jobs here..."
            />
          </div>
          <div className={styles.filter}>filter buttons</div>
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
          {openViewJob && <ViewJob viewJobData={viewJobData} />}
        </div>
      </div>
    </>
  );
};

export default Home;
