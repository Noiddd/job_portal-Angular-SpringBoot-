import React, { useState, useEffect } from "react";
import styles from "../../../../../styles/JobseekerResumeSkill.module.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import JobseekerResumeSkills from "../JobseekerResumeSkills";
import { addSkillAPI } from "../../../../../utils/fetchFromAPI";

const JobseekerResumeEditSkill = (props) => {
  let [skillsList, setSkillsList] = useState([]);
  let [skillInput, setSkillInput] = useState({});

  useEffect(() => {
    setSkillsList(props.skillsList);
  }, [props.skillsList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.hideEditSkills();
    props.openEditSkillsSuccess();
    console.log(skillInput);
    addSkillAPI(skillInput);
  };

  const handleChange = (e) => {
    setSkillInput({ [e.target.name]: e.target.value });
  };

  const handleDelete = (data) => {
    props.openDeleteSkill(data);
    props.hideEditSkills();
    console.log(data);
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={props.hideEditSkills}></div>
      <div className={styles.modalContainer}>
        <h2>Update Skills</h2>
        <div className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            onClick={props.hideEditSkills}
          />
        </div>

        <div className={styles.skillsContainer}>
          <h4>Skills you have added (Click on skills to delete):</h4>
          <div className={styles.skillsList}>
            {skillsList?.map((data, index) => {
              return (
                <JobseekerResumeSkills
                  className={styles.skillBubble}
                  key={index}
                  jobSeekerData={data}
                  handleDelete={handleDelete}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.addSkillsContainer}>
          <h4>Add skills:</h4>

          <form onSubmit={handleSubmit}>
            <input
              className={styles.addSkillsInput}
              placeholder="e.g. 'Accounting' or 'Marketing'"
              onChange={handleChange}
              name="skillName"
            />
            <button className={styles.submitBtn} type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </>,
    document.querySelector("#editSkillsModal")
  );
};

export default JobseekerResumeEditSkill;
