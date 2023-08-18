import figma from "../assets/icons/figma.svg";
import css from "../assets/icons/css.svg";
import html from "../assets/icons/html.svg";

import react from "../assets/icons/react.svg";
import vue from "../assets/icons/vue.svg";
import javascript from "../assets/icons/javaScript.svg";
import Seedfi from "../assets/images/Seedfi.svg";
import HRMs from "../assets/images/HRMs.svg";
import Covenda from "../assets/images/Covenda.svg";
import { v4 as uuidv4 } from "uuid";

export const skills = [
  { id: uuidv4(), title: "React", img: react },
  { id: uuidv4(), title: "Vue", img: vue },
  { id: uuidv4(), title: "Figma", img: figma },
  { id: uuidv4(), title: "HTML 5", img: html },
  { id: uuidv4(), title: "CSS 3", img: css },
  { id: uuidv4(), title: "JavaScript", img: javascript },
];

export const projects = [
  {
    id: uuidv4(),
    type: "Web Development",
    img: Seedfi,
    title: "Seedfi",
    info: `Seedfi is an innovative financial application designed to provide
    seamless access to smart lending opportunities. It serves as a
    powerful platform that connects borrowers and lenders in a
    convenient and efficient manner. With Seedfi, you can unlock a
    world of lending possibilities and take advantage of tailored
    financial solutions tailored to your needs.`,
    link: "https://app.theseedfi.com/",
  },
  {
    id: uuidv4(),
    type: "Web Development",
    img: HRMs,
    title: "HRMs",
    info: `HRMs is a comprehensive HR management platform that brings all
    your HR processes onto one centralized platform. It serves as a
    powerful solution to streamline and automate various HR tasks,
    making your HR operations more efficient and effective. With HRMs,
    you can simplify your HR management processes and ensure that your
    workforce is effectively managed, from employee onboarding to
    performance management and everything in between`,
    link: "https://ghana-hrms.enyata.com/",
  },
  {
    id: uuidv4(),
    type: "Web Development",
    img: Covenda,
    title: "Covenda",
    info: `Covenda, A comprehensive risk assessment application tailored specifically for companies like yours. Covenda is designed to empower organizations with proactive risk management capabilities, helping you safeguard your operations and make informed decisions.`,
    link: "http://covenda.enyata.com/",
  },
];
