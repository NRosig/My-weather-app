import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import styles from "../src/App.module.css";
import { motion } from "framer-motion";
import Cards from "./components/Cards";
import paisaje from "./imagenes/paisaje.jpg";

function App() {
  const [city, setCity] = useState([]);
  const [backgroundImg, setBackgroundImg] = useState(paisaje);

  const cityArr = [...city];

  useEffect(() => {
    if (city.length === 4) {
      const newArr = [...city];

      setCity(newArr.splice(0, newArr.length - 1));
    }
  }, [city]);

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

  const changeTemp = (k) => {
    let temp = k - 273.15 ;
    let celcius = Math.round(temp);
    return celcius;
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
            min: changeTemp(data.main.temp_min),
            max: changeTemp(data.main.temp_max),
            temp: changeTemp(data.main.temp),
            st: changeTemp(data.main.feels_like),
            desc: data.weather[0].main,
            img: data.weather[0].icon,
            id: data.id,
            name: data.name,
            hum: data.main.humidity,
            wind: data.wind.speed
          };
          handleAddCity(ciudad);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <motion.div
      className={styles.app}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <SearchBar loadInfo={loadInfo} cityArr={cityArr} />

      <Cards dataCiudad={city} handleRemoveCity={handleRemoveCity} />
    </motion.div>
  );
}

export default App;
