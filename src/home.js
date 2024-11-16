import "./homeStyle.css";

function homepage() {
  const home = document.createElement("div");
  const name = document.createElement("h1");
  const tagline = document.createElement("p");
  const container = document.createElement("div");
  name.textContent = "AROMA AVENUE";
  name.id = "name";

  tagline.textContent = "A place you can have a healthy relationship with Food";
  tagline.id = "tagline";

  container.appendChild(name);
  container.appendChild(tagline);
  container.id = "container";

  home.appendChild(container);
  home.id = "home";
  return home;
}
export { homepage };
