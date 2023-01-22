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
