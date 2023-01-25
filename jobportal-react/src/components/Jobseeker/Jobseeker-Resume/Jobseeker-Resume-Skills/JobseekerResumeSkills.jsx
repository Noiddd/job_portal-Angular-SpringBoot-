import React, { useState, useEffect } from "react";
import styles from "../../../../styles/JobseekerResumeSkill.module.css";

const JobseekerResumeSkills = (props) => {
  let [updatePageOpen, setUpdatePageOpen] = useState(false);

  const onClick = () => {
    props.handleDelete(props.jobSeekerData);
  };

  useEffect(() => {
    if (props.handleDelete) {
      setUpdatePageOpen(true);
    }
  }, []);

  return (
    <>
      {updatePageOpen ? (
        <div className={styles.skill} onClick={onClick}>
          <h4>{props.jobSeekerData.skillName}</h4>
        </div>
      ) : (
        <div className={styles.skill}>
          <h4>{props.jobSeekerData.skillName}</h4>
        </div>
      )}
    </>
  );
};

export default JobseekerResumeSkills;
