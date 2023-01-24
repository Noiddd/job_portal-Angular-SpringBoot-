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
import JobseekerResumeDeleteEmploymentHistory from "./Jobseeker-Resume-EmploymentHistory/DeleteEmploymentHistoryModal/Jobseeker-Resume-DeleteEmploymentHistory";
import JobseekerResumeDeleteEmploymentHistorySuccess from "./Jobseeker-Resume-EmploymentHistory/DeleteEmploymentHistoryModal/Jobseeker-Resume-DeleteEmploymentHistorySuccess";
import JobseekerResumeAddEducation from "./Jobseeker-Resume-Education/AddJobseekerResumeEducation/Jobseeker-Resume-AddEducation";
import JobseekerResumeAddEducationSuccess from "./Jobseeker-Resume-Education/AddJobseekerResumeEducation/Jobseeker-Resume-AddEducationSuccess";
import JobseekerResumeEditEducation from "./Jobseeker-Resume-Education/EditJobseekerResumeEducation/Jobseeker-Resume-EditEducation";
import JobseekerResumeEditEducationSuccess from "./Jobseeker-Resume-Education/EditJobseekerResumeEducation/Jobseeker-Resume-EditEducationSuccess";
import JobseekerResumeDeleteEducation from "./Jobseeker-Resume-Education/DeleteJobseekerResumeEducation/Jobseeker-Resume-DeleteEducation";
import JobseekerResumeDeleteEducationSuccess from "./Jobseeker-Resume-Education/DeleteJobseekerResumeEducation/Jobseeker-Resume-DeleteEducationSuccess";

const JobseekerResume = () => {
  let [jobSeekerData, setJobSeekerData] = useState({});

  // Employment History states and functions
  let [showAddEmploymentHistory, setShowAddEmploymentHistory] = useState(false);
  let [showAddEmploymentHistorySuccess, setShowAddEmploymentHistorySuccess] =
    useState(false);

  let [showEditEmploymentHistory, setShowEditEmploymentHistory] =
    useState(false);
  let [showEditEmploymentHistorySuccess, setShowEditEmploymentHistorySuccess] =
    useState(false);
  let [editEmploymentHistory, setEditEmploymentHistory] = useState({});

  let [showDeleteEmploymentHistory, setShowDeleteEmploymentHistory] =
    useState(false);
  let [
    showDeleteEmploymentHistorySuccess,
    setShowDeleteEmploymentHistorySuccess,
  ] = useState(false);
  let [deleteEmploymentHistory, setDeleteEmploymentHistory] = useState({});

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

  const openEditEmploymentHistory = (editEmploymentHistory) => {
    setShowEditEmploymentHistory(true);
    setEditEmploymentHistory(editEmploymentHistory);
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

  const openDeleteEmploymentHistory = (deleteEmploymentHistory) => {
    setShowDeleteEmploymentHistory(true);
    setDeleteEmploymentHistory(deleteEmploymentHistory);
  };

  const hideDeleteEmploymentHistory = () => {
    setShowDeleteEmploymentHistory(false);
  };

  const openDeleteEmploymentHistorySuccess = () => {
    setShowDeleteEmploymentHistorySuccess(true);
  };

  const hideDeleteEmploymentHistorySuccess = () => {
    setShowDeleteEmploymentHistorySuccess(false);
  };

  // Education states and functions
  let [showAddEducation, setShowAddEducation] = useState(false);
  let [showAddEducationSuccess, setShowAddEducationSuccess] = useState(false);

  let [showEditEducation, setShowEditEducation] = useState(false);
  let [showEditEducationSuccess, setShowEditEducationSuccess] = useState(false);
  let [editEducation, setEditEducation] = useState({});

  let [showDeleteEducation, setShowDeleteEducation] = useState(false);
  let [showDeleteEducationSuccess, setShowDeleteEducationSuccess] =
    useState(false);
  let [deleteEducation, setDeleteEducation] = useState({});

  const addEducation = () => {
    setShowAddEducation(true);
  };

  const hideAddEducation = () => {
    setShowAddEducation(false);
  };

  const openAddEducationSuccess = () => {
    setShowAddEducationSuccess(true);
  };

  const hideAddEducationSuccess = () => {
    setShowAddEducationSuccess(false);
  };

  const openEditEducation = (editEducation) => {
    setShowEditEducation(true);
    setEditEducation(editEducation);
  };

  const hideEditEducation = () => {
    setShowEditEducation(false);
  };

  const openEditEducationSuccess = () => {
    setShowEditEducationSuccess(true);
  };

  const hideEditEducationSuccess = () => {
    setShowEditEducationSuccess(false);
  };

  const openDeleteEducation = (deleteEducation) => {
    setShowDeleteEducation(true);
    setDeleteEducation(deleteEducation);
  };

  const hideDeleteEducation = () => {
    setShowDeleteEducation(false);
  };

  const openDeleteEducationSuccess = () => {
    setShowDeleteEducationSuccess(true);
  };

  const hideDeleteEducationSuccess = () => {
    setShowDeleteEducationSuccess(false);
  };

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("jobSeekerData"))[0];
    setJobSeekerData(data);
    console.log("Set jobSeekerData on enter of resume");
  }, []);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("jobSeekerData"))[0];

    const fetchJobSeekerData = async () => {
      const response = await loginJobSeekerAPI(data.email, data.password);
      window.localStorage.setItem("jobSeekerData", JSON.stringify(response));
      const updatedData = JSON.parse(
        window.localStorage.getItem("jobSeekerData")
      )[0];
      setJobSeekerData(updatedData);
      console.log("Set new jobSeekerData on state change");
    };

    try {
      if (data !== null) {
        fetchJobSeekerData();
      }
    } catch (error) {}

    console.log("success");
  }, [
    showAddEmploymentHistorySuccess,
    showEditEmploymentHistorySuccess,
    showDeleteEmploymentHistorySuccess,
    showAddEducationSuccess,
    showEditEducationSuccess,
    showDeleteEducationSuccess,
  ]);

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
          editEmploymentHistory={editEmploymentHistory}
        />
      )}
      {showEditEmploymentHistorySuccess && (
        <JobseekerResumeEditEmploymentHistorySuccess
          hideEditEmploymentHistorySuccess={hideEditEmploymentHistorySuccess}
        />
      )}
      {showDeleteEmploymentHistory && (
        <JobseekerResumeDeleteEmploymentHistory
          hideDeleteEmploymentHistory={hideDeleteEmploymentHistory}
          deleteEmploymentHistory={deleteEmploymentHistory}
          openDeleteEmploymentHistorySuccess={
            openDeleteEmploymentHistorySuccess
          }
        />
      )}
      {showDeleteEmploymentHistorySuccess && (
        <JobseekerResumeDeleteEmploymentHistorySuccess
          hideDeleteEmploymentHistorySuccess={
            hideDeleteEmploymentHistorySuccess
          }
        />
      )}
      {showAddEducation && (
        <JobseekerResumeAddEducation
          hideAddEducation={hideAddEducation}
          openAddEducationSuccess={openAddEducationSuccess}
        />
      )}
      {showAddEducationSuccess && (
        <JobseekerResumeAddEducationSuccess
          hideAddEducationSuccess={hideAddEducationSuccess}
        />
      )}

      {showEditEducation && (
        <JobseekerResumeEditEducation
          editEducation={editEducation}
          hideEditEducation={hideEditEducation}
          openEditEducationSuccess={openEditEducationSuccess}
        />
      )}

      {showEditEducationSuccess && (
        <JobseekerResumeEditEducationSuccess
          hideEditEducationSuccess={hideEditEducationSuccess}
        />
      )}

      {showDeleteEducation && (
        <JobseekerResumeDeleteEducation
          hideDeleteEducation={hideDeleteEducation}
          deleteEducation={deleteEducation}
          openDeleteEducationSuccess={openDeleteEducationSuccess}
        />
      )}
      {showDeleteEducationSuccess && (
        <JobseekerResumeDeleteEducationSuccess
          hideDeleteEducationSuccess={hideDeleteEducationSuccess}
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
                  openDeleteEmploymentHistory={openDeleteEmploymentHistory}
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
              onClick={addEducation}
            />
          </div>
          {jobSeekerData.educationList?.map((data, index) => {
            return (
              <div className={styles.employmentHistoryList}>
                <JobseekerResumeEducation
                  key={index}
                  jobSeekerData={data}
                  openEditEducation={openEditEducation}
                  openDeleteEducation={openDeleteEducation}
                />
              </div>
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
