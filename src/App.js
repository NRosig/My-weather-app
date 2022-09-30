import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import styles from "../src/App.module.css";
import img from "../src/imagenes/weather.jpg";
import { motion } from "framer-motion";
import Cards from "./components/Cards";

function App() {
  const [city, setCity] = useState([]);

  const imagen = img;

  const handleAddCity = (ciudad) => {
    setCity((prevCity) => {
      return [ciudad, ...prevCity];
    });
  };

  const handleRemoveCity = (cityId) => {
    setCity((prevCity) => {
      return prevCity.filter((city) => {
        return cityId !== city.id;
      });
    });
  };

  async function loadInfo(city) {
    fetch(
      `${process.env.REACT_APP_URL}${city}&appid=${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.main !== undefined) {
          console.log(data);
          const ciudad = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            temp: data.main.temp,
            desc: data.weather[0].main,
            img: data.weather[0].icon,
            id: data.id,
            name: data.name,
          };
          handleAddCity(ciudad);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <motion.div className={styles.app} background={imagen}>
      <SearchBar loadInfo={loadInfo} />
      <Cards dataCiudad={city} handleRemoveCity={handleRemoveCity} />
    </motion.div>
  );
}

export default App;
