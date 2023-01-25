import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../../../../../styles/JobseekerResumeAddEmploymentHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { deleteSkillAPI } from "../../../../../utils/fetchFromAPI";

const JobseekerResumeDeleteSkill = (props) => {
  const backToResumePage = () => {
    props.hideDeleteSkill();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteSkillAPI(props.deleteSkills);
    props.hideDeleteSkill();
    props.openEditSkillsSuccess();
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={backToResumePage}></div>
      <div className={styles.modalContainer}>
        <h2>Delete Skill</h2>
        <h2>{props.deleteSkills.skillName}</h2>

        <div className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            onClick={backToResumePage}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <button className={styles.submitBtn} type="submit">
            Delete
          </button>
        </form>
      </div>
    </>,
    document.querySelector("#deleteEducationModal")
  );
};

export default JobseekerResumeDeleteSkill;
