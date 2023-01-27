import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  JobseekerHome,
  Navbar,
  JobseekerRegister,
  JobseekerRegisterSuccess,
  JobseekerLogin,
  JobseekerResume,
} from "./components";
import JobseekerProfile from "./components/Jobseeker/Jobseeker-Profile/JobseekerProfile";
import JobseekerProfileSuccess from "./components/Jobseeker/Jobseeker-Profile/JobseekerProfileSuccess";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jobseeker/home" element={<JobseekerHome />}></Route>
        <Route
          path="/jobseeker/register"
          element={<JobseekerRegister />}
        ></Route>
        <Route
          path="/jobseeker/registersuccess"
          element={<JobseekerRegisterSuccess />}
        ></Route>
        <Route path="/jobseeker/login" element={<JobseekerLogin />}></Route>
        <Route path="/jobseeker/resume" element={<JobseekerResume />}></Route>
        <Route path="/jobseeker/profile" element={<JobseekerProfile />}></Route>
        <Route
          path="/jobseeker/profilesuccess"
          element={<JobseekerProfileSuccess />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
