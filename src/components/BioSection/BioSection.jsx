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
              Getting Buff +1 for learning, Buff +2 for documentation and more
              buff on managing team. Excited on{" "}
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
          <Link>
            <img src={twitter} alt="" />
          </Link>
          <Link>
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
