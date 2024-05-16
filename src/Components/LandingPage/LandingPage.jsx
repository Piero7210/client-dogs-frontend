import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.background}>
      <div>
        <h1 className={styles.title}>The REAL Dog App</h1>
        <h2> Here you can read about differents kinds of dogs </h2>
        <h2> Filter them by weight, name and even create a new one </h2>
        <Link to="/home">
          <button className={styles.button}>Try me right now!</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
