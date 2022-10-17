import React, { useState } from "react";
import styles from "./Card.module.css";
import {  motion } from "framer-motion";

const Card = ({ dataCiudad, handleRemoveCity, selectedId }) => {


  const switchImg = () => {
    switch (dataCiudad.desc) {
      case "Clouds":
        return "https://www.freeiconspng.com/uploads/cloud-icon-22.png";
      case "Rain":
        return "https://www.freeiconspng.com/uploads/cloud-rain-icon-2.png";
      case "Clear":
        return "https://www.freeiconspng.com/uploads/sun-icon-22.png";
      default:
        console.log("nada");
    }
  };

 

  const showData = (dataCiudad) => {
    console.log(dataCiudad.min)
    return(
    <div>
      <h1>{dataCiudad.min}</h1>
      <p>{dataCiudad.max}</p>
    </div>
    )
  }

  const variants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
    exit: {
      y: 460,
      opacity: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  //
  return (
    <motion.div
      exit="exit"
      key={dataCiudad.id}
      className={styles.card}
      initial="hidden"
      animate="visible"
      variants={variants}
      whileTap={showData(dataCiudad)}
      
      
    >
      <motion.button
        onClick={() => handleRemoveCity(dataCiudad.id)}
        key={dataCiudad.id}
        className={styles.btn}
        whileHover={{ scale: 1.2 }}
      >
        X
      </motion.button>
      <motion.div className={styles.city}>
        <motion.h1>{dataCiudad.name}</motion.h1>
      </motion.div>
      <motion.div className={styles.description}>
        <motion.p>{dataCiudad.desc}</motion.p>
      </motion.div>
      <motion.div>
        <motion.img
          alt={dataCiudad.name}
          className={styles.img}
          src={switchImg(dataCiudad)}
        />
      </motion.div>
      <motion.div className={styles.temp}>
        <motion.h2>{dataCiudad.temp}°c</motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default Card;
