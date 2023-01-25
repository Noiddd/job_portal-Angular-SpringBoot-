import React from "react";
import ReactDOM from "react-dom";
import styles from "../../../../../styles/JobseekerResumeAddEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const JobseekerResumeEditSkillsSuccess = (props) => {
  const backToResumePage = () => {
    props.hideEditSkillsSuccess();
  };

  const backToUpdatePage = () => {
    props.hideEditSkillsSuccess();
    props.openEditSkills();
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={backToResumePage}></div>
      <div className={styles.modalContainer}>
        <h2>Skills Updated Successfully</h2>

        <div className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            onClick={backToResumePage}
          />
        </div>

        <form>
          <button className={styles.submitBtn} onClick={backToUpdatePage}>
            More Updates
          </button>
          <button className={styles.submitBtn} onClick={backToResumePage}>
            Return Home
          </button>
        </form>
      </div>
    </>,
    document.querySelector("#editSkillsSuccessModal")
  );
};

export default JobseekerResumeEditSkillsSuccess;
