import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import styles from "../../../styles/EmployerPostJob.module.css";
import { addJobPost, loginEmployerAPI } from "../../../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";

const EmployerPostJob = () => {
  let navigate = useNavigate();

  let [formData, setFormData] = useState({});
  let [employerData, setEmployerData] = useState({});

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("employerData"))[0];
    setEmployerData(data);

    setFormData((prevFormData) => ({
      ...prevFormData,
      employerName: data.name,
      listingStatus: "pending",
    }));
  }, []);

  let [salaryError, setSalaryError] = useState(false);
  let [skillsError, setSkillsError] = useState(false);
  let [jobDescriptionError, setJobDescriptionError] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "salary") {
      validateSalary(e.target.value);
    } else if (e.target.name === "skills") {
      validateSkills(e.target.value);
    } else if (e.target.name === "description") {
      validateJobDescription(e.target.value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const updateEmployer = async () => {
    const data = JSON.parse(window.localStorage.getItem("employerData"))[0];

    const response = await loginEmployerAPI(data.email, data.password);
    window.localStorage.setItem("employerData", JSON.stringify(response));
  };

  const handleSubmit = (e) => {
    if (!salaryError && !skillsError && !jobDescriptionError) {
      e.preventDefault();
      addJobPost(formData, employerData.id);
      updateEmployer();
      navigate("/employer/postjobsuccess");
    } else {
      e.preventDefault();
    }
  };

  const validateSalary = (salary) => {
    if (/^\d+$/.test(salary) || salary === "") {
      setSalaryError(false);
    } else {
      setSalaryError(true);
    }
  };

  const validateSkills = (skills) => {
    const skillsArray = skills.trim().split(",");

    if (skillsArray.length == 1) {
      setSkillsError(false);
    } else if (skillsArray.length !== 3) {
      setSkillsError(true);
    } else {
      setSkillsError(false);
    }
  };

  const validateJobDescription = (jobDescription) => {
    if (jobDescription.length > 254) {
      setJobDescriptionError(true);
    } else {
      setJobDescriptionError(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.modalContainer}>
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputControl">
            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.inputField}
                name="jobTitle"
                required
                onChange={handleChange}
                placeholder="Accountant"
              />
              <label className={styles.label}>Job Title:</label>
            </div>
          </div>

          <div className="inputControl">
            {jobDescriptionError ? (
              <div className="salaryError">
                <div className={styles.jobDescriptionError}>
                  <p>Job description should be lesser than 255 characters</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.inputField}
                name="description"
                required
                onChange={handleChange}
                placeholder="Forecast company balance sheet..."
              />
              <label className={styles.label}>Job Description:</label>
            </div>
          </div>

          <div className="inputControl">
            {salaryError ? (
              <div className="salaryError">
                <div className={styles.salaryError}>
                  <p>Please enter only numbers</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.inputField}
                name="salary"
                required
                onChange={handleChange}
                placeholder="100000"
              />
              <label className={styles.label}>Annual Salary:</label>
            </div>
          </div>

          <div className="inputControl">
            {skillsError ? (
              <div className="salaryError">
                <div className={styles.skillsError}>
                  <p>Please enter skills in valid format</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.inputField}
                name="skills"
                required
                onChange={handleChange}
                placeholder="Accouting, Business, Sales"
              />
              <label className={styles.label}>Top 3 Skills:</label>
            </div>
          </div>

          <button className={styles.submitBtn} type="submit">
            Post Job
          </button>
        </form>
      </div>
    </>
  );
};

export default EmployerPostJob;
