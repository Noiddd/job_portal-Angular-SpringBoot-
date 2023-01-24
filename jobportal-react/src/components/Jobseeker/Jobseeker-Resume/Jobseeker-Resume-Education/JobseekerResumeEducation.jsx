import React from "react";
import styles from "../../../../styles/JobseekerResumeEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";

const JobseekerResumeEducation = (props) => {
  const editEducation = () => {
    props.openEditEducation(props.jobSeekerData);
  };
  const deleteEducation = () => {
    props.openDeleteEducation(props.jobSeekerData);
  };

  return (
    <div className={styles.employmentCard}>
      <div className={styles.employmentCardLeft}>
        <h1> {props.jobSeekerData.institute}</h1>
        <h2> {props.jobSeekerData.qualification}</h2>
      </div>

      <div className={styles.employmentCardRight}>
        <div className={styles.iconPen}>
          <FontAwesomeIcon icon={faPen} size="lg" onClick={editEducation} />
        </div>

        <div className={styles.iconX}>
          <FontAwesomeIcon icon={faXmark} size="2x" onClick={deleteEducation} />
        </div>

        <div className={styles.date}>
          <h3>{props.jobSeekerData.startDate}</h3>
          <h3>-</h3>
          <h3>{props.jobSeekerData.endDate}</h3>
        </div>
      </div>
    </div>
  );
};

export default JobseekerResumeEducation;
