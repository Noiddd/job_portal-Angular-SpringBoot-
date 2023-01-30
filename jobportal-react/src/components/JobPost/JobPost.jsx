import React, { useState, useEffect } from "react";
import styles from "../../styles/JobPost.module.css";

const JobPost = (props) => {
  let [skills, setSkills] = useState([]);

  useEffect(() => {
    let skillsArray = props.jobData.skills.split(", ");

    const capitalizeWords = (arr) => {
      return arr.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        const rest = word.slice(1).toLowerCase();

        return firstLetter + rest;
      });
    };

    setSkills(capitalizeWords(skillsArray));
  }, []);

  const openViewJob = () => {
    props.viewJob(props.jobData);
  };

  return (
    <div className={styles.jobContainer} onClick={openViewJob}>
      <div className={styles.employerName}>{props.jobData.employerName}</div>
      <div className={styles.jobTitle}>{props.jobData.jobTitle}</div>
      <div className={styles.salary}>${props.jobData.salary} per month</div>
      <div className={styles.skills}>
        {skills.map((skill, index) => {
          return <div key={index}>{skill}</div>;
        })}
      </div>
    </div>
  );
};

export default JobPost;
