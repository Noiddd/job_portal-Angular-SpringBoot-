import React, { useState, useEffect } from "react";
import styles from "../../../styles/JobseekerRegister.module.css";
import {
  editEmployerProfileAPI,
  checkEmployerUniqueEmailAPI,
} from "../../../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";

const EmployerProfile = (props) => {
  const [formData, setFormData] = useState({});

  let [companyName, setCompanyName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailError, setEmailError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [uniqueEmailReturn, setUniqueEmailReturn] = useState([]);
  let [uniqueEmailError, setUniqueEmailError] = useState(false);

  useEffect(() => {
    const employerData = JSON.parse(
      window.localStorage.getItem("employerData")
    )[0];
    console.log(employerData);

    setFormData(employerData);
    setCompanyName(employerData.name);
    setEmail(employerData.email);
    setPassword(employerData.password);
  }, []);

  let navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setCompanyName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
      validateEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      validatePassword(e.target.value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    const getUpdatedProfile = async () => {
      const response = await editEmployerProfileAPI(formData);
      console.log(response);
      window.localStorage.setItem("employerData", JSON.stringify([response]));
    };

    try {
      if (!emailError && !passwordError && uniqueEmailTest()) {
        e.preventDefault();
        getUpdatedProfile();
        navigate("/employer/profilesuccess");
      } else {
        e.preventDefault();
        console.log("submit fail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uniqueEmail = async (email) => {
    try {
      const response = await checkEmployerUniqueEmailAPI(email);
      setUniqueEmailReturn(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const uniqueEmailTest = () => {
    if (uniqueEmailReturn.length === 0) {
      setUniqueEmailError(false);
      console.log("pass1");
      return true;
    } else if (uniqueEmailReturn[0].id === formData.id) {
      setUniqueEmailError(false);
      console.log("pass2");
      return true;
    } else {
      setUniqueEmailError(true);
      console.log("fail");
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
      <Navbar />
      <div className={styles.modalContainer}>
        <h2>Update Employer Profile</h2>
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
                value={companyName}
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
                value={email}
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
                value={password}
              />
              <label className={styles.label}>Password:</label>
            </div>
          </div>

          <button className={styles.submitBtn} type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
};

export default EmployerProfile;
