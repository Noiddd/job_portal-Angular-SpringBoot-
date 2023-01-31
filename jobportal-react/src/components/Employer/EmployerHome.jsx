import React from "react";
import { useEffect } from "react";
import { Navbar } from "../index";

const EmployerHome = () => {
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("employerData"))[0];
    console.log(data);
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <h1>employer home</h1>;
    </>
  );
};

export default EmployerHome;
