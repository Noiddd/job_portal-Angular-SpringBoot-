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
import EmployerLogin from "./components/Employer/EmployerLogin";
import EmployerRegister from "./components/Employer/Employer-Register/EmployerRegister";
import EmployerRegisterSuccess from "./components/Employer/Employer-Register/EmployerRegisterSuccess";
import EmployerHome from "./components/Employer/EmployerHome";
import EmployerProfile from "./components/Employer/Employer-Profile/EmployerProfile";
import EmployerProfileSuccess from "./components/Employer/Employer-Profile/EmployerProfileSuccess";

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
        <Route path="/employer/login" element={<EmployerLogin />}></Route>
        <Route path="/employer/register" element={<EmployerRegister />}></Route>
        <Route
          path="/employer/registersuccess"
          element={<EmployerRegisterSuccess />}
        ></Route>
        <Route path="/employer/home" element={<EmployerHome />}></Route>
        <Route path="/employer/profile" element={<EmployerProfile />}></Route>
        <Route
          path="/employer/profilesuccess"
          element={<EmployerProfileSuccess />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
