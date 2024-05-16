import { Link } from "react-router-dom";
import React from "react";
import styles from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { dogsName, clearDetail } from "../../Redux/Actions";
import { useParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Filtered from "../Filtered/Filtered";

const NavBar = () => {
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      dispatch(dogsName(name));
    }
    return () => dispatch(clearDetail());
  }, [dispatch, name]);
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.links}>
        <Link to="/landing">
          <span>Doggy App</span>
        </Link>

        <Link to="/landing">
          <button className={styles.link}>Landing</button>
        </Link>

        <Link to="/create">
          <button className={styles.link}>Create your dog</button>
        </Link>
        <SearchBar/>
      </div>
      <div>
        <Filtered />
      </div>
    </div>
  );
};

export default NavBar;
