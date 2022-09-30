import React from "react";
import Card from "./Card";
import styles from "../components/Card.module.css";
import { motion } from "framer-motion";

const Cards = ({ dataCiudad, handleRemoveCity, showCard }) => {
  return (
    <motion.div className={styles.cards}>
      {dataCiudad?.map((ciudad) => {
        return (
          <Card
            dataCiudad={ciudad}
            key={ciudad.id}
            handleRemoveCity={handleRemoveCity}
          />
        );
      })}
    </motion.div>
  );
};

export default Cards;
