import "./styles.css";
import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", () => home());
menuButton.addEventListener("click", () => menu());
aboutButton.addEventListener("click", () => about());

home();
