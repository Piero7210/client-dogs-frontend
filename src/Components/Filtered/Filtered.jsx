import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderByName,
  FilterByTemperament,
  filterCreatedDog,
  orderByWeight,
  getTemperaments,
} from "../../Redux/Actions";
import styles from "./Filtered.module.css";

const Filtered = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(FilterByTemperament());
    dispatch(orderByName());
    dispatch(orderByWeight());
    dispatch(getTemperaments());
  }, [dispatch]);

  const handlerFilterCreated = (e) => {
    dispatch(filterCreatedDog(e.target.value));
  };

  const handleFilterByTemp = (e) => {
    e.preventDefault();
    dispatch(FilterByTemperament(e.target.value));

  };

  const handleOrderByName = (e) => {
    dispatch(orderByName(e.target.value));
 
  };

  const handleOrderByWeight = (e) => {
    dispatch(orderByWeight(e.target.value));
  };

  return (
    <div>
      <div className={styles.selectContainer}>
        <select
          onChange={(e) => handleOrderByName(e)}
          defaultValue="default"
          className={styles.filters}
        >
          <option value="default" disabled>
            Alphabetical order
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>

        <select
          onChange={(e) => handleOrderByWeight(e)}
          defaultValue="default"
          className={styles.filters}
        >
          <option value="default" disabled>
            Order by weight
          </option>
          <option value="desc">min_weight</option>
          <option value="asc">max_weight</option>
        </select>

        <select
          onChange={(e) => handleFilterByTemp(e)}
          defaultValue="default"
          className={styles.filters}
        >
          <option hidden>Select by temperament</option>
          <option value="default" disabled>
            Select by temperament
          </option>
          {temperaments.map((temp) => (
            <option key={temp.id} value={temp.name}>
              {" "}
              {temp.name}{" "}
            </option>
          ))}
        </select>

        <select
          className={styles.filters}
          onChange={(e) => handlerFilterCreated(e)}
        >
          <option value="default" disabled>
            Order by created
          </option>
          <option value="all">All</option>
          <option value="created">Created</option>
          <option value="api">Api</option>
        </select>
      </div>
    </div>
  );
};

export default Filtered;
