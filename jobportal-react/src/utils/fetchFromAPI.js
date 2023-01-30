import axios from "axios";

const baseURL = "http://localhost:8080";

// Job Seeker

export const registerJobSeekerAPI = async (jobSeeker) => {
  const { data } = await axios.post(`${baseURL}/jobseeker/add`, jobSeeker);
  return data;
};

export const checkUniqueEmailAPI = async (email) => {
  const { data } = await axios.get(`${baseURL}/jobseeker/uniqueemail/${email}`);
  return data;
};

export const loginJobSeekerAPI = async (email, password) => {
  const { data } = await axios.get(
    `${baseURL}/jobseeker/login/${email}/${password}`
  );
  return data;
};

// Edit Profile

export const editProfileAPI = async (jobSeeker) => {
  const { data } = await axios.put(`${baseURL}/jobseeker/edit`, jobSeeker);
  return data;
};

// Employment History

export const addEmploymentHistoryAPI = async (employmentHistory) => {
  const jobSeekerData = JSON.parse(
    window.localStorage.getItem("jobSeekerData")
  )[0];

  const { data } = await axios.put(
    `${baseURL}/jobseeker/addemploymenthistory/${jobSeekerData.id}`,
    employmentHistory
  );

  return data;
};

export const editEmploymentHistoryAPI = async (employmentHistory) => {
  const { data } = await axios.put(
    `${baseURL}/jobseeker/editemploymenthistory/${employmentHistory.id}`,
    employmentHistory
  );
  return data;
};

export const deleteEmploymentHistoryAPI = async (employmentHistory) => {
  const { data } = await axios.delete(
    `${baseURL}/jobseeker/deleteemploymenthistory/${employmentHistory.id}`
  );
  return data;
};

// Education

export const addEducationAPI = async (education) => {
  const jobSeekerData = JSON.parse(
    window.localStorage.getItem("jobSeekerData")
  )[0];

  const { data } = await axios.put(
    `${baseURL}/jobseeker/addeducation/${jobSeekerData.id}`,
    education
  );

  return data;
};

export const editEducationAPI = async (education) => {
  const { data } = await axios.put(
    `${baseURL}/jobseeker/editeducation/${education.id}`,
    education
  );
  return data;
};

export const deleteEducationAPI = async (education) => {
  const { data } = await axios.delete(
    `${baseURL}/jobseeker/deleteeducation/${education.id}`
  );
  return data;
};

// Skills

export const addSkillAPI = async (skill) => {
  const jobSeekerData = JSON.parse(
    window.localStorage.getItem("jobSeekerData")
  )[0];

  const { data } = await axios.put(
    `${baseURL}/jobseeker/addskill/${jobSeekerData.id}`,
    skill
  );

  return data;
};

export const deleteSkillAPI = async (skill) => {
  const { data } = await axios.delete(
    `${baseURL}/jobseeker/deleteskill/${skill.id}`
  );
  return data;
};

// Job Posts

export const getAllJobPosts = async () => {
  const { data } = await axios.get(`${baseURL}/jobpost/jobs`);
  return data;
};

// Employer

export const registerEmployerAPI = async (employer) => {
  const { data } = await axios.post(`${baseURL}/employer/add`, employer);
  return data;
};

export const checkEmployerUniqueEmailAPI = async (email) => {
  const { data } = await axios.get(`${baseURL}/employer/uniqueemail/${email}`);
  return data;
};

export const loginEmployerAPI = async (email, password) => {
  const { data } = await axios.get(
    `${baseURL}/employer/login/${email}/${password}`
  );
  return data;
};

export const editEmployerProfileAPI = async (employer) => {
  const { data } = await axios.put(`${baseURL}/employer/edit`, employer);
  return data;
};
