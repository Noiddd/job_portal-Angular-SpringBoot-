import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/JobseekerRegister.module.css";

const EmployerRegisterSuccess = () => {
  let navigate = useNavigate();

  const routeLogin = () => {
    navigate("/employer/login");
  };

  return (
    <div className={styles.modalContainer}>
      <h2>Registeration Success</h2>

      <form name="registrationFormSuccess" id="form">
        <button className={styles.submitBtn} role="button" onClick={routeLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default EmployerRegisterSuccess;
