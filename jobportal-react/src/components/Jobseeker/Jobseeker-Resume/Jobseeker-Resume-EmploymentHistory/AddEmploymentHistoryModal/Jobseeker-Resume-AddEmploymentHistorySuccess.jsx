import React from "react";
import ReactDOM from "react-dom";
import styles from "../../../../../styles/JobseekerResumeAddEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const JobseekerResumeAddEmploymentHistorySuccess = (props) => {
  const backToResumePage = () => {
    props.hideAddEmploymentHistorySuccess();
  };
  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={backToResumePage}></div>
      <div className={styles.modalContainer}>
        <h2>Employment History Added Successfully</h2>

        <div className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            onClick={backToResumePage}
          />
        </div>

        <form onSubmit={backToResumePage}>
          <button className={styles.submitBtn} type="submit">
            Return Home
          </button>
        </form>
      </div>
    </>,
    document.querySelector("#addEmploymentHistorySuccessModal")
  );
};

export default JobseekerResumeAddEmploymentHistorySuccess;
