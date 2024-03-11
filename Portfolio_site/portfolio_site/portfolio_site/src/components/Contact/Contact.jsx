import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Contact for more information</p>
      </div>
      <ul className ={styles.links}>
        <li className={styles.link}>
          <img 
            src={getImageUrl("CONTACT_ICONS/email.png")} 
            alt="Email Icon" />
          <a 
            href="mailto:chadkeysre354@gmail.com">
                chadkeyser354@gmail.com
            </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("CONTACT_ICONS/linkedin-logo.png")}
            alt="Linkedin Icon"
            
          />
          <a
            href="https://www.linkedin.com/in/chad-keyser-2a9398264"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/chad-keyser
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("CONTACT_ICONS/github.png")}
            alt="Github Icon"
          />
          <a
            href="https://www.github.com/ChadKeyser"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ChadKeyser
          </a>
        </li>
      </ul>
    </footer>
  );
};
