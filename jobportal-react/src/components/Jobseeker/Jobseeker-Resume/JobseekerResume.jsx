import React, { useEffect } from "react";
import JobseekerResumeEducation from "./JobseekerResumeEducation";
import JobseekerResumeEmploymentHistory from "./JobseekerResumeEmploymentHistory";
import JobseekerResumeSkills from "./JobseekerResumeSkills";
import styles from "../../../styles/JobseekerResume.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../contexts/AuthContext";
import { useState } from "react";

const JobseekerResume = () => {
  let [jobSeekerData, setJobSeekerData] = useState({});

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("jobSeekerData"))[0];

    if (data !== null) {
      setJobSeekerData(data);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>JobSeeker Resume</h1>

      <div className={styles.employmentContainer}>
        <div className={styles.employmentSubTitle}>
          <h2>Employment History</h2>
          <FontAwesomeIcon icon={faPlus} size="lg" className={styles.faPlus} />
        </div>
        {jobSeekerData.employmentHistoryList.map((data, index) => {
          return (
            <JobseekerResumeEmploymentHistory
              key={index}
              jobSeekerData={data}
            />
          );
        })}
      </div>

      <div className={styles.educationContainer}>
        <div className={styles.educationSubTitle}>
          <h2>Education</h2>
          <FontAwesomeIcon icon={faPlus} size="lg" className={styles.faPlus} />
        </div>
        {jobSeekerData.educationList.map((data, index) => {
          return <JobseekerResumeEducation key={index} jobSeekerData={data} />;
        })}
      </div>

      <div className={styles.skillsContainer}>
        <div className={styles.skillsSubTitle}>
          <h2>Skills</h2>
          <FontAwesomeIcon icon={faPlus} size="lg" className={styles.faPlus} />
        </div>
        {jobSeekerData.skillsList.map((data, index) => {
          return <JobseekerResumeSkills key={index} jobSeekerData={data} />;
        })}
      </div>
    </div>
  );
};

export default JobseekerResume;
