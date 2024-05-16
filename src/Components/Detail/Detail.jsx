import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { clearDetail, dogsId } from "../../Redux/Actions";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(dogsId(id));
    return () => dispatch(clearDetail());
  }, [id, dispatch]);

  return (
    <div className={styles.topContainer}>
      <Link to="/home">
        <button className={styles.button}>Home</button>
      </Link>
      {Object.keys(dog).length ? (
        <div className={styles.container}>
          <img
            className={styles.image}
            src={
              dog[0].image
                ? dog[0].image
                : (dog[0].image =
                    "https://www.nextdayflyers.com/blog/wp-content/uploads/2014/10/Pet-Flyer-1-768x1024.jpg")
            }
            alt="woof"
          />
          <div>
            <h1 className={styles.titulo}> Name: {dog[0].name}</h1>
            <h3 className={styles.name}> Years: {dog[0].life_span}</h3>
            <h3 className={styles.name}>
              {" "}
              Weight: {dog[0].weight_min} - {dog[0].weight_max} kg
            </h3>
            <h3 className={styles.name}>
              {" "}
              Height: {dog[0].height_min} - {dog[0].weight_max} cm
            </h3>
            <div>
              <h3 className={styles.name}>
                Temperaments: {dog[0].temperament}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <h1>LOADING...</h1>{" "}
        </div>
      )}
    </div>
  );
};

export default Detail;
