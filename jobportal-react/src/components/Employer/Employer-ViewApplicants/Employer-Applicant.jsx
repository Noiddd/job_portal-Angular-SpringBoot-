import React, { useState, useEffect } from "react";
import styles from "../../../styles/Applicant.module.css";

const EmployerApplicant = (props) => {
  let [applicantData, setApplicantData] = useState({});
  let [applicantEmploymentHistory, setApplicantEmploymentHistory] = useState(
    []
  );
  let [applicantSkills, setApplicantSkills] = useState([]);
  let [applicantEducation, setApplicantEducation] = useState([]);

  useEffect(() => {
    setApplicantData(props.applicant);

    if (props.applicant.employmentHistoryList.length !== 0) {
      setApplicantEmploymentHistory(props.applicant.employmentHistoryList);
    }
    if (props.applicant.educationList.length !== 0) {
      setApplicantEducation(props.applicant.educationList);
    }
    if (props.applicant.skillsList.length !== 0) {
      setApplicantSkills(props.applicant.skillsList);
    }

    console.log(props.applicant);
  }, []);

  const acceptApplicant = () => {};

  const rejectApplicant = () => {};

  return (
    <div className={styles.jobContainer}>
      <div className={styles.name}>
        {applicantData.firstName} {applicantData.lastName}
      </div>
      <div className={styles.email}>{applicantData.email}</div>
      <div className={styles.phone}>{applicantData.phone}</div>

      <div className={styles.skillsContainer}>
        <div className={styles.skillTitle}>Skill Set</div>
        <div className={styles.skillsList}>
          {applicantSkills.map((skill, index) => {
            return (
              <div className={styles.skill} key={index}>
                {skill.skillName}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.employmentContainer}>
        <div className={styles.empploymentHistoryTitle}>Employment History</div>
        <div className={styles.employmentHistoryList}>
          {applicantEmploymentHistory.map((employmentHistory, index) => {
            return (
              <div>
                <div className={styles.jobTitle} key={index}>
                  {employmentHistory.jobTitle}
                </div>
                <div className={styles.company} key={index}>
                  {employmentHistory.company}
                </div>
                <div className={styles.jobTitle} key={index}>
                  {employmentHistory.jobDescription}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.applicantEducationList}>
        <div className={styles.educationTitle}>Education</div>
        <div className={styles.educationList}>
          {applicantEducation.map((education, index) => {
            return (
              <div>
                <div className={styles.institute} key={index}>
                  {education.institute}
                </div>
                <div className={styles.qualification} key={index}>
                  {education.qualification}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.accept} onClick={acceptApplicant}>
          Accpet Applicants
        </div>
        <div className={styles.reject} onClick={rejectApplicant}>
          Reject Applicants
        </div>
      </div>
    </div>
  );
};

export default EmployerApplicant;
