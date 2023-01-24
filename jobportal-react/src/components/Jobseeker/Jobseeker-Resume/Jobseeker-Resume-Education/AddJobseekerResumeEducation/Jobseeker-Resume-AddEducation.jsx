import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../../../../styles/JobseekerResumeAddEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { addEducationAPI } from "../../../../../utils/fetchFromAPI";

const JobseekerResumeAddEducation = (props) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await addEducationAPI(formData);
      props.hideAddEducation();
      props.openAddEducationSuccess();
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
      <div className={styles.overlay} onClick={props.hideAddEducation}></div>
      <div className={styles.modalContainer}>
        <h2>Add Education</h2>

        <div className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            onClick={props.hideAddEducation}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputControl}>
            <div className={styles.userBox}>
              <input
                type="text"
                name="institute"
                required
                className={styles.inputField}
                id="instituteId"
                onChange={handleChange}
              />
              <label className={styles.label}>Institute</label>
            </div>
          </div>

          <div className={styles.inputControl}>
            <div className={styles.userBox}>
              <input
                type="text"
                name="qualification"
                required
                className={styles.inputField}
                id="qualificationId"
                onChange={handleChange}
              />
              <label className={styles.label}>Qualification</label>
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
    document.querySelector("#addEducationModal")
  );
};

export default JobseekerResumeAddEducation;
