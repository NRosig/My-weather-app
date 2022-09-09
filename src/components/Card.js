import React from "react";
import styles from "./Card.module.css";


const Card = ({ dataCiudad, handleRemoveCity }) => {
  
  return (
    
    <div className={styles.card} >
      <button onClick={() => handleRemoveCity(dataCiudad.id)} key={dataCiudad.id} className={styles.btn}>X</button>
      <div className={styles.city}>
        <h1>{dataCiudad.name}</h1>
      </div>
      <div className={styles.description}>
        <p>{dataCiudad.desc}</p>
      </div>
      <div >
        <img alt={dataCiudad.name} src={dataCiudad.name ? "https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-8.png" : null} className={styles.img}/>
      </div>
      <div className={styles.temp}>
        <h2>{dataCiudad.temp}</h2>
      </div>
    </div>
  );
  
};

export default Card;
