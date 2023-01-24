import React from "react";
import ReactDOM from "react-dom";
import styles from "../../../../../styles/JobseekerResumeAddEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { deleteEmploymentHistoryAPI } from "../../../../../utils/fetchFromAPI";

const JobseekerResumeDeleteEmploymentHistory = (props) => {
  const backToResumePage = () => {
    props.hideDeleteEmploymentHistory();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteEmploymentHistoryAPI(props.deleteEmploymentHistory);
    props.hideDeleteEmploymentHistory();
    props.openDeleteEmploymentHistorySuccess();
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={backToResumePage}></div>
      <div className={styles.modalContainer}>
        <h2>Delete Employment History</h2>

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
    document.querySelector("#deleteEmploymentHistoryModal")
  );
};

export default JobseekerResumeDeleteEmploymentHistory;
