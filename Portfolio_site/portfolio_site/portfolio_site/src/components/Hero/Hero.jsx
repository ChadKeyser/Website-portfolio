import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
    
  return (
    
    <section className={styles.container} onClick={() => setMenuOpen(!menuOpen)}>
      <div className={styles.content} >
        <h3 className={styles.title}>Hi, Im Chad</h3>
        <p className={styles.descriptionText}>A graduate student growing skills in software development</p>
        
       
       
        
        <a href="mailto:chadkeyser354@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("PERSON/PERSON.png")}
        alt="hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
