import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import {motion} from "framer-motion";

const SearchBar = ({ loadInfo }) => {
    const [input, setInput] = useState("")

    const handleInput = (e) => {
      const value = e.target.value;
      setInput(value)
      
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setInput("")
        loadInfo(input);
    }
    
  
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <motion.input 
        type="text" 
        value={input} 
        onChange={handleInput} 
        className={styles.input} 
        placeholder="Search..."
        whileFocus={{scale:1.1 }}
        
        />
    </form>
  );
};

export default SearchBar;
