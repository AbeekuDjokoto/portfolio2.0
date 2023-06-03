import classes from "./Skills.module.scss";
import { skills as data } from "../../mocks/data";

export const Skills = () => {
  return (
    <div id="skills" className={classes.root}>
      <div>
        <h4 className={classes.title}>Skills</h4>
        <p className={classes.para}>
          My technical{" "}
          <span style={{ color: "var(--dark-green)" }}>Skills</span>{" "}
        </p>
      </div>

      <div className={classes.cardContainer}>
        <Cards />
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <>
      {data.map(({ title, img, id }) => {
        return (
          <div key={id} className={classes.cards}>
            <img src={img} alt="" />
            <figcaption>{title}</figcaption>
          </div>
        );
      })}
    </>
  );
};
