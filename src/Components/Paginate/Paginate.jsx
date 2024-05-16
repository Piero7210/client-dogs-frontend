import React from "react";
import styles from "./Paginate.module.css";

const Paginate = ({ dogsPerPage, dogs, paginate, currentPage }) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(dogs / dogsPerPage); i++) {
    //cantidad de elementos totales, dividido limite de elementos por pagina
    pageNum.push(i);
  }

  return (
    <div className={styles.center}>
      <ul className={styles.pagination}>
        <li>
          <button
            className={`${styles.boton} ${styles.flecha}`}
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            {"<"}
          </button>
        </li>
        {pageNum.map((num) => (
          <li key={num}>
            <button
              className={`${styles.boton} ${
                currentPage === num ? styles.seleccionado : ""
              }`}
              onClick={() => paginate(num)}
            >
              {num}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`${styles.boton} ${styles.flecha}`}
            disabled={currentPage === pageNum.length}
            onClick={() => paginate(currentPage + 1)}
          >
            {">"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
