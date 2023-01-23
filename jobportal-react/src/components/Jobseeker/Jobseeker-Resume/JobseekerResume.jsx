import React, { useEffect, useState } from "react";
import JobseekerResumeEducation from "./Jobseeker-Resume-Education/JobseekerResumeEducation";
import JobseekerResumeEmploymentHistory from "./Jobseeker-Resume-EmploymentHistory/JobseekerResumeEmploymentHistory";
import JobseekerResumeSkills from "./Jobseeker-Resume-Skills/JobseekerResumeSkills";
import styles from "../../../styles/JobseekerResume.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../../index";
import JobseekerResumeAddEmploymentHistory from "./Jobseeker-Resume-EmploymentHistory/AddEmploymentHistoryModal/Jobseeker-Resume-AddEmploymentHistory";
import JobseekerResumeAddEmploymentHistorySuccess from "./Jobseeker-Resume-EmploymentHistory/AddEmploymentHistoryModal/Jobseeker-Resume-AddEmploymentHistorySuccess";
import { loginJobSeekerAPI } from "../../../utils/fetchFromAPI";
import JobseekerResumeEditEmploymentHistory from "./Jobseeker-Resume-EmploymentHistory/EditEmploymentHistoryModal/Jobseeker-Resume-EditEmploymentHistory";
import JobseekerResumeEditEmploymentHistorySuccess from "./Jobseeker-Resume-EmploymentHistory/EditEmploymentHistoryModal/Jobseeker-Resume-EditEmploymentHistorySuccess";

const JobseekerResume = () => {
  let [jobSeekerData, setJobSeekerData] = useState({});
  let [showAddEmploymentHistory, setShowAddEmploymentHistory] = useState(false);
  let [showAddEmploymentHistorySuccess, setShowAddEmploymentHistorySuccess] =
    useState(false);
  let [showEditEmploymentHistory, setShowEditEmploymentHistory] =
    useState(false);
  let [showEditEmploymentHistorySuccess, setShowEditEmploymentHistorySuccess] =
    useState(false);
  let [editJobSeeker, setEditJobSeeker] = useState({});

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("jobSeekerData"))[0];
    setJobSeekerData(data);
    console.log("normal");
  }, []);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("jobSeekerData"))[0];

    const setLocalStorage = (response) => {
      window.localStorage.setItem("jobSeekerData", JSON.stringify(response));
      const updatedData = JSON.parse(
        window.localStorage.getItem("jobSeekerData")
      )[0];
      setJobSeekerData(updatedData);
    };

    const fetchJobSeekerData = async () => {
      try {
        if (data !== null) {
          const response = await loginJobSeekerAPI(data.email, data.password);
          setTimeout(setLocalStorage(response), 1000);
        }
      } catch (error) {}
    };

    fetchJobSeekerData();

    console.log("success");
  }, [showAddEmploymentHistorySuccess, showEditEmploymentHistorySuccess]);

  const addEmploymentHistory = () => {
    setShowAddEmploymentHistory(true);
  };

  const hideAddEmploymentHistory = () => {
    setShowAddEmploymentHistory(false);
  };

  const openAddEmploymentHistorySuccess = () => {
    setShowAddEmploymentHistorySuccess(true);
  };

  const hideAddEmploymentHistorySuccess = () => {
    setShowAddEmploymentHistorySuccess(false);
  };

  const openEditEmploymentHistory = (editJobSeeker) => {
    setShowEditEmploymentHistory(true);
    setEditJobSeeker(editJobSeeker);
  };

  const hideEditEmploymentHistory = () => {
    setShowEditEmploymentHistory(false);
  };

  const openEditEmploymentHistorySuccess = () => {
    setShowEditEmploymentHistorySuccess(true);
  };

  const hideEditEmploymentHistorySuccess = () => {
    setShowEditEmploymentHistorySuccess(false);
  };

  return (
    <>
      <Navbar></Navbar>
      {showAddEmploymentHistory && (
        <JobseekerResumeAddEmploymentHistory
          hideAddEmploymentHistory={hideAddEmploymentHistory}
          openAddEmploymentHistorySuccess={openAddEmploymentHistorySuccess}
        />
      )}
      {showAddEmploymentHistorySuccess && (
        <JobseekerResumeAddEmploymentHistorySuccess
          hideAddEmploymentHistorySuccess={hideAddEmploymentHistorySuccess}
        />
      )}
      {showEditEmploymentHistory && (
        <JobseekerResumeEditEmploymentHistory
          openEditEmploymentHistorySuccess={openEditEmploymentHistorySuccess}
          hideEditEmploymentHistory={hideEditEmploymentHistory}
          editJobSeeker={editJobSeeker}
        />
      )}
      {showEditEmploymentHistorySuccess && (
        <JobseekerResumeEditEmploymentHistorySuccess
          hideEditEmploymentHistorySuccess={hideEditEmploymentHistorySuccess}
        />
      )}

      <div className={styles.container}>
        <h1 className={styles.title}>JobSeeker Resume</h1>

        <div className={styles.employmentContainer}>
          <div className={styles.employmentSubTitle}>
            <h2>Employment History</h2>
            <FontAwesomeIcon
              icon={faPlus}
              size="lg"
              className={styles.faPlus}
              onClick={addEmploymentHistory}
            />
          </div>
          {jobSeekerData.employmentHistoryList?.map((data, index) => {
            return (
              <div className={styles.employmentHistoryList}>
                <JobseekerResumeEmploymentHistory
                  key={index}
                  jobSeekerData={data}
                  openEditEmploymentHistory={openEditEmploymentHistory}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.educationContainer}>
          <div className={styles.educationSubTitle}>
            <h2>Education</h2>
            <FontAwesomeIcon
              icon={faPlus}
              size="lg"
              className={styles.faPlus}
            />
          </div>
          {jobSeekerData.educationList?.map((data, index) => {
            return (
              <JobseekerResumeEducation key={index} jobSeekerData={data} />
            );
          })}
        </div>

        <div className={styles.skillsContainer}>
          <div className={styles.skillsSubTitle}>
            <h2>Skills</h2>
            <FontAwesomeIcon
              icon={faPlus}
              size="lg"
              className={styles.faPlus}
            />
          </div>
          {jobSeekerData.skillsList?.map((data, index) => {
            return <JobseekerResumeSkills key={index} jobSeekerData={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default JobseekerResume;
