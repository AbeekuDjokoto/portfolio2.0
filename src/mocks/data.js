import figma from "../assets/icons/figma.svg";
import css from "../assets/icons/css.svg";
import html from "../assets/icons/html.svg";

import react from "../assets/icons/react.svg";
import vue from "../assets/icons/vue.svg";
import javascript from "../assets/icons/javaScript.svg";
import { v4 as uuidv4 } from "uuid";

export const skills = [
  { id: uuidv4(), title: "React", img: react },
  { id: uuidv4(), title: "Vue", img: vue },
  { id: uuidv4(), title: "Figma", img: figma },
  { id: uuidv4(), title: "HTML 5", img: html },
  { id: uuidv4(), title: "CSS 3", img: css },
  { id: uuidv4(), title: "JavaScript", img: javascript },
];
