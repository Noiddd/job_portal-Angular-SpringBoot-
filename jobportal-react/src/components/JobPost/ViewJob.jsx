import React, { useState, useEffect } from "react";
import styles from "../../styles/ViewJob.module.css";
import SkillBubble from "./SkillBubble";

const ViewJob = (props) => {
  let [skills, setSkills] = useState([]);
  let [jobSeekerView, setJobSeekerView] = useState(true);

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

  const onApply = () => {};

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
    </div>
  );
};

export default ViewJob;
