import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../../../../styles/JobseekerResumeAddEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { editEducationAPI } from "../../../../../utils/fetchFromAPI";
import { useEffect } from "react";

const JobseekerResumeEditEducation = (props) => {
  useEffect(() => {
    setInstitute(props.editEducation.institute);
    setQualification(props.editEducation.qualification);
    setStartDate(props.editEducation.startDate);
    setEndDate(props.editEducation.endDate);
    console.log(props.editEducation);
  }, [props.editEducation]);

  let [institute, setInstitute] = useState("");
  let [qualification, setQualification] = useState("");
  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");

  const [formData, setFormData] = useState(props.editEducation);

  const handleSubmit = (e) => {
    e.preventDefault();
    editEducationAPI(formData);
    props.hideEditEducation();
    props.openEditEducationSuccess();
  };

  const handleChange = (e) => {
    if (e.target.name === "institute") {
      setInstitute(e.target.value);
    } else if (e.target.name === "qualification") {
      setQualification(e.target.value);
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
      <div className={styles.overlay} onClick={props.hideEditEducation}></div>
      <div className={styles.modalContainer}>
        <h2>Update Education</h2>

        <div className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            onClick={props.hideEditEducation}
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
                value={institute}
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
                value={qualification}
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
    document.querySelector("#editEducationModal")
  );
};

export default JobseekerResumeEditEducation;
