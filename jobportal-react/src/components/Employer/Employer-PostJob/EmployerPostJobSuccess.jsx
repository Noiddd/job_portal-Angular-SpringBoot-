import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/JobseekerRegister.module.css";

const EmployerPostJobSuccess = () => {
  let navigate = useNavigate();

  const routeMoreJobPost = () => {
    navigate("/employer/postjob");
  };

  const routeEmployerHome = () => {
    navigate("/employer/home");
  };

  return (
    <div className={styles.modalContainerSuccess}>
      <h2>Job Post Success</h2>

      <form name="registrationFormSuccess" id="form" className={styles.form}>
        <button
          className={styles.submitBtn}
          role="button"
          onClick={routeMoreJobPost}
        >
          Post More Jobs
        </button>
        <button
          className={styles.submitBtn}
          role="button"
          onClick={routeEmployerHome}
        >
          Home
        </button>
      </form>
    </div>
  );
};

export default EmployerPostJobSuccess;
