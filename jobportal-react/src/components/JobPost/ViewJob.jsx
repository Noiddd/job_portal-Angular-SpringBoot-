import React, { useState, useEffect } from "react";
import styles from "../../styles/ViewJob.module.css";
import SkillBubble from "./SkillBubble";
import { applyJobPost } from "../../utils/fetchFromAPI.js";
import { useNavigate } from "react-router-dom";

const ViewJob = (props) => {
  let navigate = useNavigate();

  let [skills, setSkills] = useState([]);
  let [jobSeekerView, setJobSeekerView] = useState(true);
  let [appliedJobView, setAppliedJobView] = useState(false);
  let [viewApplicants, setViewApplicants] = useState(false);

  useEffect(() => {
    let skillsArray = props.viewJobData.skills.split(", ");

    const capitalizeWords = (arr) => {
      return arr.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const rest = word.slice(1).toLowerCase();

        return firstLetter + rest;
      });
    };

    setSkills(capitalizeWords(skillsArray));
  }, [props.viewJobData]);

  useEffect(() => {
    if (props.openApplyJobSuccess == null) {
      setJobSeekerView(false);
    }

    if (props.viewAppliedJob == true) {
      setAppliedJobView(true);
    }

    if (props.viewApplicants == true) {
      setViewApplicants(true);
    }
  }, []);

  const onApply = async () => {
    const jobSeekerId = JSON.parse(
      window.localStorage.getItem("jobSeekerData")
    )[0].id;
    const response = await applyJobPost(jobSeekerId, props.viewJobData);
    console.log(response);
    props.openApplyJobSuccess();
  };

  const routeViewApplicants = () => {
    props.openJobApplicants(props.viewJobData);
  };

  return (
    <div className={styles.viewJobContainer}>
      <div className={styles.employerName}>
        {props.viewJobData.employerName}
      </div>
      <div className={styles.jobTitle}>{props.viewJobData.jobTitle}</div>
      <div className={styles.salary}>${props.viewJobData.salary} per month</div>
      <div className={styles.description}>{props.viewJobData.description}</div>
      <div className={styles.skills}>
        {skills.map((skill, index) => {
          return <SkillBubble key={index} skill={skill} />;
        })}
      </div>

      {jobSeekerView && (
        <div onClick={onApply} className={styles.applyButton}>
          Apply
        </div>
      )}

      {appliedJobView && (
        <div className={styles.applyButton}>
          {props.viewJobData.listingStatus}
        </div>
      )}

      {viewApplicants && (
        <div className={styles.applyButton} onClick={routeViewApplicants}>
          View Applicants
        </div>
      )}
    </div>
  );
};

export default ViewJob;
