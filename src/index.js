import "./style.css";
import { homepage } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
const content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

const reset = () => {
  content.innerHTML = "";
  homeBtn.className = "";
  menuBtn.className = "";
  aboutBtn.className = "";
};
homeBtn.addEventListener("click", () => {
  reset();
  content.appendChild(homepage());
  homeBtn.className = "active";
});
menuBtn.addEventListener("click", () => {
  reset();
  content.appendChild(menu());
  menuBtn.className = "active";
});
aboutBtn.addEventListener("click", () => {
  reset();
  content.appendChild(about());
  menuBtn.className = "active";
});
homeBtn.className = "active";
content.appendChild(homepage());
