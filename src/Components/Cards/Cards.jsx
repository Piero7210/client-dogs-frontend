import CardContainer from "../CardContainer/CardContainer";
import styles from "./Cards.module.css";

const Cards = (props) => {
    const dogs = props.dogs;
    return (
      <div className={styles.cards}>
        {dogs.map(
          ({ id, name, image, weight_min, weight_max, temperament}) => {
            return (
              <CardContainer
                key={id}
                id={id}
                name={name}
                image={image}
                weight={weight_min}                    
                weight2={weight_max}                    
                temperament={temperament}
              />
            );
          }
        )}
      </div>
    );
  };
  
  export default Cards;