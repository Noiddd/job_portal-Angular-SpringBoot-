import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, JobseekerHome, Navbar } from "./components";
import { JobseekerRegister } from "./components";
import { JobseekerLogin } from "./components";

const App = () => {
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
        <Route path="/jobseeker/login" element={<JobseekerLogin />}></Route>
      </Routes>
    </>
  );
};

export default App;
