import { Link } from "react-router-dom";
import styles from "./CardContainer.module.css";

const CardContainer = ({ id, name, image, weight, weight2, temperament }) => {
  return (
    <div className={styles.contenedor}>
      <Link to={`/detail/${id}`} className={styles.link}>
        <h2>{name}</h2>
      </Link>
      <Link to={`/detail/${id}`}>
        <img src={image} alt="" className={styles.image}/>
      </Link>
      <Link to={`/detail/${id}`} className={styles.link}>
        <h2>Weight: {weight}</h2>
        <h2> -{weight2}</h2>
      </Link>
      <h3 className={styles.temperament}>Temperaments: {temperament}</h3>
    </div>
  );
};

export default CardContainer;