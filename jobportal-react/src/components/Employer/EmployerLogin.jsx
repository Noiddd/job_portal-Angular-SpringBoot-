import React, { useState } from "react";
import styles from "../../styles/JobseekerRegister.module.css";
import { useNavigate } from "react-router-dom";
import { loginEmployerAPI } from "../../utils/fetchFromAPI";
import { Link } from "react-router-dom";
import NavBar from "../Navbar";

const EmployerLogin = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({});
  let [emailError, setEmailError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [inputError, setInputError] = useState(false);

  const handleSubmit = async (e) => {
    if (!emailError && !passwordError) {
      try {
        e.preventDefault();
        const response = await loginEmployerAPI(
          formData.email,
          formData.password
        );

        console.log(response);

        if (response.length == 0) {
          setInputError(true);
        } else {
          window.localStorage.setItem("employerData", JSON.stringify(response));
          window.localStorage.setItem("isLoggedIn", JSON.stringify(true));
          window.localStorage.setItem("isEmployer", JSON.stringify(true));
          console.log(response);
          setInputError(false);
          navigate("/employer/home");
        }
      } catch (error) {}
    } else {
      e.preventDefault();
    }
  };

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
        <h2>Employer Login</h2>
        {inputError ? (
          <h2>Email/password is incorrect... Please try again</h2>
        ) : (
          <div />
        )}
        <form onSubmit={handleSubmit}>
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
          <div className={styles.newUser}>
            <div>
              New employer? <Link to="/employer/register">Register here</Link>
            </div>
          </div>

          <button className={styles.submitBtn} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default EmployerLogin;
