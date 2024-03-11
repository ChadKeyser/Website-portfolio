import React from "react";
import styles from "./Info.module.css";
const Info = () => {
  return (
    <div id="about" className={styles.starting}>
      About
      <section className={styles.container}>
        <div className={styles.text}>
          <p>
            I am a recent graduate student from Eduvos. Here’s a little bit more
            about me. I’m someone who seemed to adapt quite fast to technology.
            There’s always been a massive enjoyment playing with technology and
            understanding how things communicate with each other. I was the kid
            who would scrap things open not really knowing how it works, but
            continued to play around and eventually made something of it. The
            movement and implementation of new technology has always been a
            massive motivation to keep playing around and figuring out new of
            technology.<br></br>
            <br></br>Taking a leap in education and specializing in software was
            a massive eye opener to me. It broadened my understanding of
            technology and really put all the pieces together. Over the years I
            would wonder how software was constructed and now after 3 years of
            practice in building these software’s I’ve gained a confidence to
            figure out, recreate and/or even improve software.<br></br>
            <br></br> I am currently on the hunt to further my technological
            skills at a company who will benefit from my growth in technology
            and my curiosity in software and other technologies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Info;
