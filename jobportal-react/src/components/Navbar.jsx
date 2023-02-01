import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [isEmployer, setIsEmployer] = useState(false);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(window.localStorage.getItem("isLoggedIn")));
    setIsEmployer(JSON.parse(window.localStorage.getItem("isEmployer")));
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
          {isEmployer ? (
            <div>
              <Link to="/employer/home" className={styles.logo}>
                <h2>Job Portal</h2>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/jobseeker/home" className={styles.logo}>
                <h2>Job Portal</h2>
              </Link>
            </div>
          )}

          <ul>
            {isEmployer ? (
              <>
                <li>
                  <Link className={styles.Link} to="/employer/postjob">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link className={styles.Link} to="/employer/profile">
                    Employer Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className={styles.Link} to="/jobseeker/appliedjobs">
                    Applied Jobs
                  </Link>
                </li>
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
              </>
            )}

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
            <Link to="/" className={styles.logo}>
              <h2>Job Portal</h2>
            </Link>
          </div>
          <ul>
            <li>
              <Link className={styles.Link} to="/employer/login">
                Post a Job
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
