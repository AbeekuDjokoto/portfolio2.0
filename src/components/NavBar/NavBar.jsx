import classes from "./NavBar.module.scss";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div className={classes.nav}>
        <h3 className={classes.logo}>Abeeku</h3>
        <div className={classes.links}>
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/Recommendations">Recommendations</Link>
          <Link to="/">Contact Us</Link>
        </div>
        {/* on mobile */}
        <div className={classes.mobile}>
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
