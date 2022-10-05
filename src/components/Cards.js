import React from "react";
import Card from "./Card";
import styles from "../components/Card.module.css";
import {  AnimatePresence, motion } from "framer-motion";

const Cards = ({ dataCiudad, handleRemoveCity, showCard }) => {
  return (
    
    <motion.div className={styles.cards}>
        <AnimatePresence>
      {dataCiudad?.map((ciudad) => {
        return (
          <Card
            dataCiudad={ciudad}
            key={ciudad.id}
            handleRemoveCity={handleRemoveCity}
          />
        );
      })}
      </AnimatePresence>
    </motion.div>
   
  );
};

export default Cards;
