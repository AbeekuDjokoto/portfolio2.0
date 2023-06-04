import classes from "./NavBar.module.scss";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const handleSkillsClick = (navigation) => {
    const skillsSection = document.getElementById(navigation);
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav>
      <div className={classes.nav}>
        <h3 className={classes.logo}>Abeeku</h3>
        <div className={classes.links}>
          <Link onClick={() => handleSkillsClick("home")}>Home</Link>
          <Link onClick={() => handleSkillsClick("projects")}>Projects</Link>
          <Link onClick={() => handleSkillsClick("skills")}>Skills</Link>
          <Link to="/Recommendations">Recommendations</Link>
          <Link onClick={() => handleSkillsClick("contact")}>Reach Out</Link>
        </div>
        {/* on mobile */}
        <div className={classes.mobile}>
          <Link onClick={() => handleSkillsClick("home")}>Home</Link>
          <Link onClick={() => handleSkillsClick("projects")}>Projects</Link>
          <Link onClick={() => handleSkillsClick("skills")}>Skills</Link>
          <Link onClick={() => handleSkillsClick("contact")}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};
