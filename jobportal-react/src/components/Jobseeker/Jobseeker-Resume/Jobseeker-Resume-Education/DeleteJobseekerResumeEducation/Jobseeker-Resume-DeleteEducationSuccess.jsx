import React from "react";
import ReactDOM from "react-dom";
import styles from "../../../../../styles/JobseekerResumeAddEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const JobseekerResumeDeleteEducationSuccess = (props) => {
  const backToResumePage = () => {
    props.hideDeleteEducationSuccess();
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={backToResumePage}></div>
      <div className={styles.modalContainer}>
        <h2>Delete Education Success</h2>

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
    document.querySelector("#deleteEducationSuccessModal")
  );
};

export default JobseekerResumeDeleteEducationSuccess;
