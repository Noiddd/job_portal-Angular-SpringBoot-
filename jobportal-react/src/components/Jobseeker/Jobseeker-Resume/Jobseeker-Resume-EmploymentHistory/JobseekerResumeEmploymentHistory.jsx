import React from "react";
import styles from "../../../../styles/JobseekerResumeEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";

const JobseekerResumeEmploymentHistory = (props) => {
  const editEmploymentHistory = () => {
    props.openEditEmploymentHistory(props.jobSeekerData);
  };

  const deleteEmploymentHistory = () => {
    props.openDeleteEmploymentHistory(props.jobSeekerData);
  };
  return (
    <div className={styles.employmentCard}>
      <div className={styles.employmentCardLeft}>
        <h1> {props.jobSeekerData.company}</h1>
        <h2> {props.jobSeekerData.jobTitle}</h2>
        <h3> {props.jobSeekerData.jobDescription}</h3>
      </div>

      <div className={styles.employmentCardRight}>
        <div className={styles.iconPen}>
          <FontAwesomeIcon
            icon={faPen}
            size="lg"
            onClick={editEmploymentHistory}
          />
        </div>

        <div className={styles.iconX}>
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            onClick={deleteEmploymentHistory}
          />
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

export default JobseekerResumeEmploymentHistory;
