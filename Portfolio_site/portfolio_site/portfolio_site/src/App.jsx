import styles from "./App.module.css";
import Info from "./components/Info/Info";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";


import { Navbar } from "./components/Navbar/Navbar";
import Projects from "./components/Project/Projects";
import { Experience } from "./components/Experience/Experience";





function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <Experience/>
    <Projects/>
    <Info/>
    <Contact />
   
  </div>;
   
}

export default App;
