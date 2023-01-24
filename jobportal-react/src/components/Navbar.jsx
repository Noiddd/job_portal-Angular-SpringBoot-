import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(window.localStorage.getItem("isLoggedIn")));
  }, []);

  let navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  if (isLoggedIn) {
    return (
      <header>
        <nav>
          <div>
            <h2 className={styles.logo}>Job Portal</h2>
          </div>
          <ul>
            <li>
              <Link className={styles.Link} to="/jobseeker/resume">
                Resume
              </Link>
            </li>
            <li>
              <Link className={styles.Link} to="/jobseeker/profile">
                Profile
              </Link>
            </li>
            <li>
              <div className={styles.Link} onClick={logOut}>
                Log Out
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav>
          <div>
            <h2 className={styles.logo}>Job Portal</h2>
          </div>
          <ul>
            <li>
              <Link className={styles.Link} to="/jobseeker/register">
                Register
              </Link>
            </li>
            <li>
              <Link className={styles.Link} to="/jobseeker/login">
                Log In
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Navbar;
