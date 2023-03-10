import React, { useState } from "react";
import styles from "../../../styles/JobseekerRegister.module.css";
import {
  registerJobSeekerAPI,
  checkUniqueEmailAPI,
} from "../../../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Navbar";

const JobseekerRegister = () => {
  const [formData, setFormData] = useState({});

  let [firstNameError, setFirstNameError] = useState(false);
  let [lastNameError, setLastNameError] = useState(false);
  let [emailError, setEmailError] = useState(false);
  let [phoneError, setPhoneError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [uniqueEmailReturn, setUniqueEmailReturn] = useState(false);
  let [uniqueEmailError, setUniqueEmailError] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      validateFirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      validateLastName(e.target.value);
    } else if (e.target.name === "email") {
      validateEmail(e.target.value);
    } else if (e.target.name === "phone") {
      validatePhone(e.target.value);
    } else if (e.target.name === "password") {
      validatePassword(e.target.value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !phoneError &&
      !passwordError &&
      uniqueEmailTest()
    ) {
      e.preventDefault();
      registerJobSeekerAPI(formData);
      navigate("/jobseeker/registersuccess");
    } else {
      e.preventDefault();
    }
  };

  const uniqueEmail = async (email) => {
    try {
      const response = await checkUniqueEmailAPI(email);

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

  const validateFirstName = (firstName) => {
    if (/\d/.test(firstName)) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const validateLastName = (lastName) => {
    if (/\d/.test(lastName)) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
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

  const validatePhone = (phone) => {
    if (/^\d+$/.test(phone) || phone === "") {
      setPhoneError(false);
    } else {
      setPhoneError(true);
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
        <h2>JobSeeker Register</h2>
        {uniqueEmailError ? <h2>Email taken... Please try again</h2> : <div />}

        <form onSubmit={handleSubmit}>
          <div className="inputControl">
            {firstNameError ? (
              <div className="error">
                <div className={styles.error}>
                  <p>Please enter a valid first name</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.inputField}
                name="firstName"
                required
                onChange={handleChange}
              />
              <label className={styles.label}>First Name:</label>
            </div>
          </div>

          <div className="inputControl">
            {lastNameError ? (
              <div className="error">
                <div className={styles.error}>
                  <p>Please enter a valid last name</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.inputField}
                name="lastName"
                required
                onChange={handleChange}
              />
              <label className={styles.label}>Last Name:</label>
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
            {phoneError ? (
              <div className="error">
                <div className={styles.error}>
                  <p>Please enter a valid phone number</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.inputField}
                name="phone"
                required
                onChange={handleChange}
              />
              <label className={styles.label}>Phone Number:</label>
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

export default JobseekerRegister;
