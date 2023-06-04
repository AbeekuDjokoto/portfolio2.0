import {
  BioSection,
  NavBar,
  Projects,
  Skills,
  WhatIDo,
} from "../../components";
import classes from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={classes.root}>
      <NavBar />
      <main id="home">
        <h2 className={classes.textContent}>
          I'm Abeeku Djokoto, a frontend developer specializing in captivating
          digital experiences.
        </h2>
        <BioSection />
        <WhatIDo />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};
