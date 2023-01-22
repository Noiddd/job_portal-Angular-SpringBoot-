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
import AuthContext from "./components/contexts/AuthContext";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jobSeekerData, setJobSeekerData] = useState();

  return (
    <>
      <Navbar></Navbar>
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
        <Route
          path="/jobseeker/login"
          element={<JobseekerLogin setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="/jobseeker/resume" element={<JobseekerResume />}></Route>
      </Routes>
    </>
  );
};

export default App;
