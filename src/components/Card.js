import React from "react";
import styles from "./Card.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({ dataCiudad, handleRemoveCity, isVisible }) => {

  const variants = {
    hidden: {
      x: "-100vw",
      opacity: 0
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      }
    },
    exit: {
      y: 460,
      opacity: 0,
        transition: {
          duration: .7,
          
        },
      
    }
    
  }

  return (
      <motion.div 
      exit="exit"
      key={dataCiudad.id}
      className={styles.card}
      initial="hidden"
      animate="visible"
      variants={variants}
      
      
    >
      <motion.button
        onClick={() => handleRemoveCity(dataCiudad.id)}
        key={dataCiudad.id}
        className={styles.btn}
        whileHover={{ scale: 1.2 }}
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
        />
      </div>
      <div className={styles.temp}>
        <h2>{dataCiudad.temp}°K</h2>
      </div>
    </motion.div>

  );
};

export default Card;
