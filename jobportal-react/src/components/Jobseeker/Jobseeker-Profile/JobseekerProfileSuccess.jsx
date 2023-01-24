import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/JobseekerRegister.module.css";
import Navbar from "../../Navbar";

const JobseekerProfileSuccess = () => {
  let navigate = useNavigate();

  const routeJobSeekerHome = () => {
    navigate("/jobseeker/home");
  };

  return (
    <>
      <Navbar />
      <div className={styles.modalContainer}>
        <h2>Profile Update Success</h2>

        <form name="registrationFormSuccess" id="form">
          <button
            className={styles.submitBtn}
            role="button"
            onClick={routeJobSeekerHome}
          >
            Return Home
          </button>
        </form>
      </div>
    </>
  );
};

export default JobseekerProfileSuccess;
