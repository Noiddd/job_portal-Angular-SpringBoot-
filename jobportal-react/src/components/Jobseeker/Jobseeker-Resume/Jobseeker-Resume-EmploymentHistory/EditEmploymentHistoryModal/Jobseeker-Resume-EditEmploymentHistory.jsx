import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../../../../styles/JobseekerResumeAddEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { editEmploymentHistoryAPI } from "../../../../../utils/fetchFromAPI";
import { useEffect } from "react";

const JobseekerResumeEditEmploymentHistory = (props) => {
  useEffect(() => {
    setJobTitle(props.editEmploymentHistory.jobTitle);
    setCompany(props.editEmploymentHistory.company);
    setJobDescription(props.editEmploymentHistory.jobDescription);
    setStartDate(props.editEmploymentHistory.startDate);
    setEndDate(props.editEmploymentHistory.endDate);
    console.log(props.editEmploymentHistory);
  }, [props.editEmploymentHistory]);

  let [jobTitle, setJobTitle] = useState("");
  let [company, setCompany] = useState("");
  let [jobDescription, setJobDescription] = useState("");
  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");

  const [formData, setFormData] = useState(props.editEmploymentHistory);

  const handleSubmit = (e) => {
    e.preventDefault();
    editEmploymentHistoryAPI(formData);
    props.hideEditEmploymentHistory();
    props.openEditEmploymentHistorySuccess();
  };

  const handleChange = (e) => {
    if (e.target.name === "jobTitle") {
      setJobTitle(e.target.value);
    } else if (e.target.name === "company") {
      setCompany(e.target.value);
    } else if (e.target.name === "jobDescription") {
      setJobDescription(e.target.value);
    } else if (e.target.name === "startDate") {
      setStartDate(e.target.value);
    } else if (e.target.name === "endDate") {
      setEndDate(e.target.value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return ReactDOM.createPortal(
    <>
      <div
        className={styles.overlay}
        onClick={props.hideEditEmploymentHistory}
      ></div>
      <div className={styles.modalContainer}>
        <h2>Update Employment History</h2>

        <div className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            onClick={props.hideEditEmploymentHistory}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputControl}>
            <div className={styles.userBox}>
              <input
                type="text"
                name="jobTitle"
                required
                className={styles.inputField}
                id="jobTitleId"
                onChange={handleChange}
                value={jobTitle}
              />
              <label className={styles.label}>Job Title</label>
            </div>
          </div>

          <div className={styles.inputControl}>
            <div className={styles.userBox}>
              <input
                type="text"
                name="company"
                required
                className={styles.inputField}
                id="companyId"
                onChange={handleChange}
                value={company}
              />
              <label className={styles.label}>Company</label>
            </div>
          </div>

          <div className={styles.inputControl}>
            <div className={styles.userBox}>
              <input
                type="text"
                name="jobDescription"
                required
                className={styles.inputField}
                id="jobDescriptionId"
                onChange={handleChange}
                value={jobDescription}
              />
              <label className={styles.label}>Job Description</label>
            </div>
          </div>

          <div className={styles.inputControl}>
            <div className={styles.userBox}>
              <input
                type="text"
                name="startDate"
                required
                className={styles.inputField}
                id="startDateId"
                onChange={handleChange}
                value={startDate}
              />
              <label className={styles.label}>Start Date</label>
            </div>
          </div>

          <div className={styles.inputControl}>
            <div className={styles.userBox}>
              <input
                type="text"
                name="endDate"
                required
                className={styles.inputField}
                id="endDateId"
                onChange={handleChange}
                value={endDate}
              />
              <label className={styles.label}>End Date</label>
            </div>
          </div>

          <button className={styles.submitBtn} type="submit">
            Update
          </button>
        </form>
      </div>
    </>,
    document.querySelector("#editEmploymentHistoryModal")
  );
};

export default JobseekerResumeEditEmploymentHistory;
