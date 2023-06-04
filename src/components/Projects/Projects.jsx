import { useState } from "react";
import { projects } from "../../mocks/data";
import classes from "./Projects.module.scss";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div id="projects" className={classes.root}>
      <h3 className={classes.title}>Featured Projects</h3>
      {ProjectsInfo()}
    </div>
  );
};

function ProjectsInfo() {
  const [showAll, setShowAll] = useState(false);

  function handleNavigate(link) {
    window.open(link, "_blank");
  }

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <>
      {visibleProjects.map(({ id, type, img, title, info, link }) => (
        <div className={classes.main} key={id}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={classes.img}
            onClick={() => handleNavigate(link)}
          >
            <img src={img} alt={title} />
          </motion.div>
          <div className={classes.projectMain}>
            <h6 className={classes.project}>{type}</h6>
            <div className={classes.textContent}>
              <h3
                className={classes.projectTitle}
                onClick={() => handleNavigate(link)}
              >
                {title}
              </h3>
              <p className={classes.projectPara}>{info}</p>
            </div>
          </div>
        </div>
      ))}

      {!showAll && (
        <button
          className={classes.showAllButton}
          onClick={() => setShowAll(true)}
        >
          Show More
        </button>
      )}
    </>
  );
}
