import React, { useEffect, useState } from "react";
import styles from "../../../styles/JobseekerRegister.module.css";

const JobseekerRegister = () => {
  const [firstNameError, setFirstNameError] = useState(false);

  return (
    <div className={styles.modalContainer}>
      <h2>JobSeeker Register</h2>

      <form>
        <div className="inputControl">
          {firstNameError ? (
            <div className="error">
              <div className={styles.error}>
                <p>Please enter a valid first name</p>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <div>
            <input type="text" />
            <label htmlFor=""></label>
          </div>
        </div>

        <button className={styles.submitBtn} role="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default JobseekerRegister;
