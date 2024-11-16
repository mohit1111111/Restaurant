import "./about.css";
function about() {
  const information = document.createElement("p");
  information.textContent = "lorem ipsum";
  information.style.fontSize = "6rem";

  return information;
}
export { about };
