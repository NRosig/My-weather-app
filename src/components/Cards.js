import React from "react";
import Card from "./Card";
import styles from "../components/Card.module.css";

const Cards = ({dataCiudad, handleRemoveCity}) => {
 return (
    <div className={styles.cards}>
        {dataCiudad?.map(ciudad => {
            return <Card dataCiudad={ciudad} key={ciudad.id} handleRemoveCity={handleRemoveCity}
            />
        })}
    </div>
 )
}

export default Cards;
