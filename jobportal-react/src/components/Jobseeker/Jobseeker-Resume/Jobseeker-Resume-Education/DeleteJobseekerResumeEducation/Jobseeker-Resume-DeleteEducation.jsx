import React from "react";
import ReactDOM from "react-dom";
import styles from "../../../../../styles/JobseekerResumeAddEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { deleteEducationAPI } from "../../../../../utils/fetchFromAPI";

const JobseekerResumeDeleteEducation = (props) => {
  const backToResumePage = () => {
    props.hideDeleteEducation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteEducationAPI(props.deleteEducation);
    props.hideDeleteEducation();
    props.openDeleteEducationSuccess();
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={backToResumePage}></div>
      <div className={styles.modalContainer}>
        <h2>Delete Education</h2>

        <div className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            onClick={backToResumePage}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <button className={styles.submitBtn} type="submit">
            Delete
          </button>
        </form>
      </div>
    </>,
    document.querySelector("#deleteEducationModal")
  );
};

export default JobseekerResumeDeleteEducation;
