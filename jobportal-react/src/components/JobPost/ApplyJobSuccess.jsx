import React from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/ApplyJobSuccess.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ApplyJobSuccess = (props) => {
  let navigate = useNavigate();

  const backToHome = () => {
    props.hideApplyJobSuccess();
  };

  const routeToAppliedJobs = () => {
    props.hideApplyJobSuccess();
    navigate("/jobseeker/appliedjobs");
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={backToHome}></div>
      <div className={styles.modalContainer}>
        <h2>Job Applied Successfully</h2>

        <div className={styles.xIcon}>
          <FontAwesomeIcon icon={faXmark} size="lg" onClick={backToHome} />
        </div>

        <form className={styles.form}>
          <button
            className={styles.submitBtn}
            type="submit"
            onClick={backToHome}
          >
            Return Home
          </button>
          <button
            className={styles.submitBtn}
            type="submit"
            onClick={routeToAppliedJobs}
          >
            View Applied Jobs
          </button>
        </form>
      </div>
    </>,
    document.querySelector("#applyJobSuccess")
  );
};

export default ApplyJobSuccess;
