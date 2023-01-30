import React, { useState } from "react";
import styles from "../../../styles/JobseekerRegister.module.css";
import {
  registerEmployerAPI,
  checkEmployerUniqueEmailAPI,
} from "../../../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Navbar";

const EmployerRegister = () => {
  const [formData, setFormData] = useState({});

  let [emailError, setEmailError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [uniqueEmailReturn, setUniqueEmailReturn] = useState(false);
  let [uniqueEmailError, setUniqueEmailError] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      validateEmail(e.target.value);
    } else if (e.target.name === "password") {
      validatePassword(e.target.value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (!emailError && !passwordError && uniqueEmailTest()) {
      e.preventDefault();
      console.log(formData);
      registerEmployerAPI(formData);
      navigate("/employer/registersuccess");
    } else {
      e.preventDefault();
    }
  };

  const uniqueEmail = async (email) => {
    try {
      const response = await checkEmployerUniqueEmailAPI(email);

      if (response.length == 0) {
        setUniqueEmailReturn(true);
        console.log("pass");
      } else {
        setUniqueEmailReturn(false);
        console.log("fail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uniqueEmailTest = () => {
    if (uniqueEmailReturn) {
      setUniqueEmailError(false);
      return true;
    } else {
      setUniqueEmailError(true);
      return false;
    }
  };

  const validateEmail = (email) => {
    if (email === "") {
      setEmailError(false);
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email.toLowerCase()
      )
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
      uniqueEmail(email);
    }
  };

  const validatePassword = (password) => {
    if (password.length < 7 && password !== "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.modalContainer}>
        <h2>Employer Register</h2>
        {uniqueEmailError ? <h2>Email taken... Please try again</h2> : <div />}

        <form onSubmit={handleSubmit}>
          <div className="inputControl">
            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.inputField}
                name="name"
                required
                onChange={handleChange}
              />
              <label className={styles.label}>Company Name:</label>
            </div>
          </div>

          <div className="inputControl">
            {emailError ? (
              <div className="error">
                <div className={styles.error}>
                  <p>Please enter a valid email</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.inputField}
                name="email"
                required
                onChange={handleChange}
              />
              <label className={styles.label}>Email:</label>
            </div>
          </div>

          <div className="inputControl">
            {passwordError ? (
              <div className="error">
                <div className={styles.error}>
                  <p>Please enter a valid password</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.inputField}
                name="password"
                required
                onChange={handleChange}
              />
              <label className={styles.label}>Password:</label>
            </div>
          </div>

          <button className={styles.submitBtn} type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default EmployerRegister;
