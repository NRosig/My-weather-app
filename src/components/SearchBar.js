import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { motion } from "framer-motion";

const SearchBar = ({ loadInfo, cityArr }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let checkCity = cityArr.some((ciudad) => ciudad.name === input);
    if (checkCity) {
      setInput("")
      return alert("Esta ciudad ya fue agregada");
    }
    setInput("");
    loadInfo(input);
  };

  const variants = {
    hidden: {
      opacity: 1,
      y: -100,
    },
    visible: {
      opacity: 3,
      y: 0,
      transition: {
        duration: 1.5,
        type: "spring",
      },
    },
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <motion.input
        initial="hidden"
        animate="visible"
        variants={variants}
        type="text"
        value={input}
        onChange={handleInput}
        className={styles.input}
        placeholder="Search..."
        whileFocus={{ scale: 1.1 }}
      />
    </form>
  );
};

export default SearchBar;
