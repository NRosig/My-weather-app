import React from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

const Card = ({ dataCiudad, handleRemoveCity }) => {
  return (
    <motion.div className={styles.card}
    initial={{x: "-100vw"}}
    animate={{
      x: 0
    }}
    transition={{ duration: .8, type: "spring"}}>
      <motion.button
        onClick={() => handleRemoveCity(dataCiudad.id)}
        key={dataCiudad.id}
        className={styles.btn}
        whileHover={{ scale: 1.2}}
       
      >
        X
      </motion.button>
      <div className={styles.city}>
        <h1>{dataCiudad.name}</h1>
      </div>
      <div className={styles.description}>
        <p>{dataCiudad.desc}</p>
      </div>
      <div>
        <motion.img
          alt={dataCiudad.name}
          src={
            dataCiudad.name
              ? "https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-8.png"
              : null
          }
          className={styles.img}
          drag="x"
          dragConstraints={{ left: -1, right: 1 }}
        />
      </div>
      <div className={styles.temp}>
        <h2>{dataCiudad.temp}</h2>
      </div>
    </motion.div>
  );
};

export default Card;
