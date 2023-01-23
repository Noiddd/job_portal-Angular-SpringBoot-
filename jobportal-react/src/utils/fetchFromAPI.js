import axios from "axios";

const baseURL = "http://localhost:8080";

const client = axios.create({
  url: baseURL,
});

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
