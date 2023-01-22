import axios from "axios";

const baseURL = "http://localhost:8080";

const client = axios.create({
  url: baseURL,
});

export const registerJobSeekerAPI = async (route, jobSeeker) => {
  const { data } = await axios.post(`${baseURL}/jobseeker/${route}`, jobSeeker);

  return data;
};
