import { Link } from "react-router-dom";
import twitter from "../../assets/icons/twitter.svg";
import linkedIn from "../../assets/icons/linkedIn.svg";
import mail from "../../assets/icons/mail.svg";
import classes from "./BioSection.module.scss";

export const BioSection = () => {
  return (
    <div className={classes.bioSection}>
      <div className={classes.bioInfo}>
        <div className={classes.headshot}></div>
        <div className={classes.biography}>
          <div>
            <h3 className={classes.title}>Biography</h3>
            <p>
              I'm an enthusiastic and detail-oriented Frontend Software Engineer
              seeking an entry-level position and assisting in the timely
              completion of projects. Excited on{" "}
              <span style={{ color: "var(--primary-blue)" }}>React</span>,{" "}
              <span style={{ color: "var(--light-blue)" }}>UX Research</span>{" "}
              and <span style={{ color: "var(--primary-green)" }}>Agile.</span>
            </p>
          </div>
        </div>
      </div>

      <div id="contact">
        <h3 className={classes.title}>Lets connect</h3>
        <div className={classes.linksContacts}>
          <Link to="https://twitter.com/AbeekuDjokoto">
            <img src={twitter} alt="Twitter Icon" />
          </Link>
          <Link to="https://linkedin.com/in/abeeku-djokoto">
            <img src={linkedIn} alt="" />
          </Link>
          <Link to="mailto:djokotoabeeku619@gmail.com">
            <img src={mail} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};
