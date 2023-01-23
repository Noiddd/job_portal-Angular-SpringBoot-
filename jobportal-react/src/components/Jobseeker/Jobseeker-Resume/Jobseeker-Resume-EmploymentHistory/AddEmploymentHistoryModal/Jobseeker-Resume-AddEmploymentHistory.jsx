import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../../../../styles/JobseekerResumeAddEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { addEmploymentHistoryAPI } from "../../../../../utils/fetchFromAPI";

const JobseekerResumeAddEmploymentHistory = (props) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    try {
      console.log(formData);
      e.preventDefault();
      const response = await addEmploymentHistoryAPI(formData);
      console.log(response);
      props.hideAddEmploymentHistory();
      props.openAddEmploymentHistorySuccess();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return ReactDOM.createPortal(
    <>
      <div
        className={styles.overlay}
        onClick={props.hideAddEmploymentHistory}
      ></div>
      <div className={styles.modalContainer}>
        <h2>Add Employment History</h2>

        <div className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            onClick={props.hideAddEmploymentHistory}
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
              />
              <label className={styles.label}>End Date</label>
            </div>
          </div>

          <button className={styles.submitBtn} type="submit">
            Add
          </button>
        </form>
      </div>
    </>,
    document.querySelector("#addEmploymentHistoryModal")
  );
};

export default JobseekerResumeAddEmploymentHistory;
