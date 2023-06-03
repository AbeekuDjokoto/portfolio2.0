import classes from "./WhatIDo.module.scss";

export const WhatIDo = () => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h4>What I do</h4>
        <p className={classes.para}>
          Build and maintain websites,{" "}
          <span style={{ color: "var(--dark-green)" }}>frontend dev.</span> My
          motto is Beauty and function in equal measure as priority.
        </p>
      </div>
      <div className={classes.boxContainer}>
        <div className={classes.twoBoxes}>
          <div className={classes.box}>
            <p>
              You will receive a customized plan for your fitness journey, and
              lots of support.
            </p>
            <h6>Web Development</h6>
          </div>
          <div className={classes.box}>
            <p>
              You will receive a customized plan for your fitness journey, and
              lots of support.
            </p>
            <h6>UX Research</h6>
          </div>
        </div>
        <div className={classes.oneBox}>
          <div className={classes.box}>
            <p>
              You will receive a customized plan for your fitness journey, and
              lots of support.
            </p>
            <h4 style={{ textAlign: "center" }}>Web Development</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
