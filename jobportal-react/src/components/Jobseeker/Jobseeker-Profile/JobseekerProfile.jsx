import React, { useState, useEffect } from "react";
import styles from "../../../styles/JobseekerRegister.module.css";
import {
  editProfileAPI,
  checkUniqueEmailAPI,
} from "../../../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";

const JobseekerProfile = (props) => {
  const [formData, setFormData] = useState({});

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");

  let [firstNameError, setFirstNameError] = useState(false);
  let [lastNameError, setLastNameError] = useState(false);
  let [emailError, setEmailError] = useState(false);
  let [phoneError, setPhoneError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [uniqueEmailReturn, setUniqueEmailReturn] = useState([]);
  let [uniqueEmailError, setUniqueEmailError] = useState(false);

  useEffect(() => {
    const jobSeekerData = JSON.parse(
      window.localStorage.getItem("jobSeekerData")
    )[0];
    console.log(jobSeekerData);

    setFormData(jobSeekerData);
    setFirstName(jobSeekerData.firstName);
    setLastName(jobSeekerData.lastName);
    setEmail(jobSeekerData.email);
    setPhone(jobSeekerData.phone);
    setPassword(jobSeekerData.password);
  }, []);

  let navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      setFirstName(e.target.value);
      validateFirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value);
      validateLastName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
      validateEmail(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
      validatePhone(e.target.value);
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
      const response = await editProfileAPI(formData);
      console.log(response);
      window.localStorage.setItem("jobSeekerData", JSON.stringify([response]));
    };

    try {
      if (
        !firstNameError &&
        !lastNameError &&
        !emailError &&
        !phoneError &&
        !passwordError &&
        uniqueEmailTest()
      ) {
        e.preventDefault();
        getUpdatedProfile();
        navigate("/jobseeker/profilesuccess");
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
      const response = await checkUniqueEmailAPI(email);
      setUniqueEmailReturn(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const uniqueEmailTest = () => {
    if (uniqueEmailReturn.length == 0) {
      setUniqueEmailError(false);
      console.log("pass1");
      return true;
    } else if (uniqueEmailReturn[0].id == formData.id) {
      setUniqueEmailError(false);
      console.log("pass2");
      return true;
    } else {
      setUniqueEmailError(true);
      console.log("fail");
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
      <Navbar />
      <div className={styles.modalContainer}>
        <h2>Update Profile</h2>
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
                value={firstName}
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
                value={lastName}
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
                value={email}
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
                value={phone}
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

export default JobseekerProfile;
