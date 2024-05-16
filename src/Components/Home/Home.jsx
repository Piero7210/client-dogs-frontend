import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import Paginate from "../Paginate/Paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../Redux/Actions";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css"

const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getAllDogs()); //toda la data de dogs
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1); // pagina que ira cambiando
  const [dogsPerPage, setDogsPerPage] = useState(8); // max cards por pag
  const lastDog = dogsPerPage * currentPage; //9     // indice ultima receta card renderizada
  const firstDog = lastDog - dogsPerPage; //0         // indice primera receta card renderizada
  const currentDogs = dogs.slice(firstDog, lastDog); // las 9 recetas card que se iran mostrando en cada pág

  const paginate = (number) => {
    // dispatch(cleanDetail())
    setCurrentPage(number);
  };

  return (
    <div>
      <NavBar dogs={dogs} />
      <Paginate
        dogsPerPage={dogsPerPage}
        dogs={dogs?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Cards className={styles.container} dogs={currentDogs} />
    </div>
  );
};

export default Home;
