import PaneerTikkaImage from "./images/food_images/Paneer Tikka.png";
import AlooChaatImage from "./images/food_images/Aloo Chaat.png";
import HaraBharaKababImage from "./images/food_images/Hara Bhara Kabab.png";
import ButterChickenImage from "./images/food_images/Butter Chicken.png";
import LambRoganJoshImage from "./images/food_images/Lamb Rogan Josh.png";
import FishCurryWithCoconutMilkImage from "./images/food_images/Fish Curry with Coconut Milk.png";
import PalakPaneerImage from "./images/food_images/Palak Paneer.png";
import HyderabadiChickenBiryaniImage from "./images/food_images/Hyderabadi Chicken Biryani.png";
import VegetableDumBiryaniImage from "./images/food_images/Vegetable Dum Biryani.png";
import JeeraRiceImage from "./images/food_images/Jeera Rice.png";
import KashmiriPulaoImage from "./images/food_images/Kashmiri Pulao.png";
import GarlicNaanImage from "./images/food_images/Garlic Naan.png";
import ButterRotiImage from "./images/food_images/Butter Roti.png";
import LachhaParathaImage from "./images/food_images/Lachha Paratha.png";
import RaitaImage from "./images/food_images/Raita (Cucumber or Boondi).png";
import MangoChutneyImage from "./images/food_images/Mango Chutney.png";
import GulabJamunImage from "./images/food_images/Gulab Jamun.png";
import RasMalaiImage from "./images/food_images/Ras Malai.png";
import KulfiImage from "./images/food_images/Kulfi (Pistachio or Mango).png";
import MasalaChaiImage from "./images/food_images/Masala Chai.png";
import RoseSharbatImage from "./images/food_images/Rose Sharbat.png";
import FreshLimeSodaImage from "./images/food_images/Fresh Lime Soda.png";

import "./menu.css";
const menuArray = [
  {
    name: "Paneer Tikka",
    description:
      "Marinated cottage cheese cubes grilled to perfection with spices and herbs, delivering a smoky and flavorful bite in every piece.",
    category: "Starters",
    image: PaneerTikkaImage,
  },
  {
    name: "Aloo Chaat",
    description:
      "A tangy, spicy street-style potato snack topped with yogurt, chutneys, and fresh herbs, offering a burst of flavors.",
    category: "Starters",
    image: AlooChaatImage,
  },
  {
    name: "Hara Bhara Kabab",
    description:
      "A healthy green vegetarian patty made from spinach, peas, and spices, with a crispy exterior and soft, flavorful interior.",
    category: "Starters",
    image: HaraBharaKababImage,
  },
  {
    name: "Butter Chicken",
    description:
      "Tender chicken pieces cooked in a creamy tomato-based gravy, enriched with butter and aromatic spices for a rich, comforting flavor.",
    category: "Main Courses",
    image: ButterChickenImage,
  },
  {
    name: "Lamb Rogan Josh",
    description:
      "A classic lamb curry from Kashmir, featuring tender pieces of lamb in a robust, aromatic sauce with spices like cardamom and cinnamon.",
    category: "Main Courses",
    image: LambRoganJoshImage,
  },
  {
    name: "Fish Curry with Coconut Milk",
    description:
      "Succulent fish fillets cooked in a creamy coconut-based curry with hints of mustard seeds and curry leaves for a tropical twist.",
    category: "Main Courses",
    image: FishCurryWithCoconutMilkImage,
  },
  {
    name: "Palak Paneer",
    description:
      "Cottage cheese cubes simmered in a smooth, flavorful spinach gravy, spiced with garlic, ginger, and mild Indian spices.",
    category: "Main Courses",
    image: PalakPaneerImage,
  },
  {
    name: "Hyderabadi Chicken Biryani",
    description:
      "Fragrant basmati rice layered with marinated chicken, cooked with saffron and spices for an aromatic, deeply flavored dish.",
    category: "Biryani & Rice",
    image: HyderabadiChickenBiryaniImage,
  },
  {
    name: "Vegetable Dum Biryani",
    description:
      "A slow-cooked, flavorful rice dish with a medley of vegetables, layered with spices and garnished with fried onions and mint.",
    category: "Biryani & Rice",
    image: VegetableDumBiryaniImage,
  },
  {
    name: "Jeera Rice",
    description:
      "Simple yet aromatic basmati rice cooked with cumin seeds, adding a light, earthy flavor to complement any curry.",
    category: "Biryani & Rice",
    image: JeeraRiceImage,
  },
  {
    name: "Kashmiri Pulao",
    description:
      "Fragrant rice infused with saffron and garnished with nuts and dried fruits for a mildly sweet and luxurious touch.",
    category: "Biryani & Rice",
    image: KashmiriPulaoImage,
  },
  {
    name: "Garlic Naan",
    description:
      "Soft, leavened bread brushed with garlic and butter, perfect for scooping up curries and gravies.",
    category: "Breads",
    image: GarlicNaanImage,
  },
  {
    name: "Butter Roti",
    description:
      "A whole-wheat flatbread brushed with butter, offering a warm, wholesome pairing for any dish.",
    category: "Breads",
    image: ButterRotiImage,
  },
  {
    name: "Lachha Paratha",
    description:
      "Flaky, layered flatbread with a crispy exterior and soft inside, made from whole wheat and perfect for hearty dishes.",
    category: "Breads",
    image: LachhaParathaImage,
  },
  {
    name: "Raita (Cucumber or Boondi)",
    description:
      "Cool yogurt-based side dish with cucumber or crunchy chickpea pearls, balancing the spices with a refreshing touch.",
    category: "Side Dishes",
    image: RaitaImage,
  },
  {
    name: "Mango Chutney",
    description:
      "A sweet and tangy mango-based chutney, perfect for adding a touch of zest to any meal.",
    category: "Side Dishes",
    image: MangoChutneyImage,
  },
  {
    name: "Gulab Jamun",
    description:
      "Soft, milk-based dumplings soaked in a fragrant rose-flavored sugar syrup, served warm and irresistible.",
    category: "Desserts",
    image: GulabJamunImage,
  },
  {
    name: "Ras Malai",
    description:
      "Delicate cheese patties in sweetened, cardamom-infused milk, garnished with pistachios for a creamy, dreamy dessert.",
    category: "Desserts",
    image: RasMalaiImage,
  },
  {
    name: "Kulfi (Pistachio or Mango)",
    description:
      "Traditional Indian ice cream, dense and creamy with flavors of pistachio or mango, perfect for a cool, refreshing end.",
    category: "Desserts",
    image: KulfiImage,
  },
  {
    name: "Masala Chai",
    description:
      "A spiced tea brewed with aromatic spices like cardamom, ginger, and cloves, offering warmth and comfort in every sip.",
    category: "Beverages",
    image: MasalaChaiImage,
  },
  {
    name: "Rose Sharbat",
    description:
      "A refreshing rose-flavored drink, lightly sweetened and perfect for cooling down on a warm day.",
    category: "Beverages",
    image: RoseSharbatImage,
  },
  {
    name: "Fresh Lime Soda",
    description:
      "A zesty blend of fresh lime juice, soda, and a touch of salt or sugar, for a tangy, thirst-quenching treat.",
    category: "Beverages",
    image: FreshLimeSodaImage,
  },
];
const builder = (category) => {
  const items = menuArray.filter((item) => item.category == category);
  const result = document.createElement("div");
  items.forEach((item) => {
    const dish = document.createElement("div");
    const sideDiv = document.createElement("div");
    const photo = document.createElement("img");
    const name = document.createElement("h1");
    const discription = document.createElement("p");

    photo.src = item.image;
    name.textContent = item.name;
    discription.textContent = item.description;

    dish.className = "dish";
    dish.style.backgroundImage = `${item.image}`;
    sideDiv.id = "sidediv";

    dish.appendChild(photo);
    sideDiv.appendChild(name);
    sideDiv.appendChild(discription);
    dish.appendChild(sideDiv);
    result.appendChild(dish);
  });
  return result;
};
const menu = () => {
  const menuContent = document.createElement("div");
  const menuNavigation = document.createElement("nav");
  const detail = document.createElement("div");
  const category = [
    "Starters",
    "Main Courses",
    "Biryani & Rice",
    "Breads",
    "Side Dishes",
    "Desserts",
    "Beverages",
  ];

  const changeActive = (id) => {
    let activeButtons = document.getElementsByClassName("menuButton active");
    activeButtons[0].className = "menuButton";

    document.getElementById(id).className = "menuButton active";
  };

  category.forEach((element) => {
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
      detail.innerHTML = builder(element).innerHTML;
      changeActive(element);
    });
    btn.id = element;
    btn.textContent = element;
    btn.className = "menuButton";
    if (element == "Starters") {
      btn.className = "menuButton active";
    }
    menuNavigation.appendChild(btn);
  });

  detail.innerHTML = builder("Starters").innerHTML;
  detail.id = "detail";
  menuContent.appendChild(menuNavigation);
  menuContent.appendChild(detail);
  return menuContent;
};
export { menu };
