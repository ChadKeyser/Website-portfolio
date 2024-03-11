import React from "react";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects"className={styles.container}>
      <body className ={styles.title}>Projects</body>
      <div className={styles.projects}>
        
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />
          
        })}
       
      </div>
      
    </section>
  );
};

export default Projects;
