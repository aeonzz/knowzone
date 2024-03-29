import kenneth from "../../public/Ellipse 9.png";
import christian from "../../public/Ellipse 6.png";
import jude from "../../public/Ellipse 8.png";
import cresmar from "../../public/Ellipse 7.png";
import rj from "../../public/Ellipse 10.png";
import search from "../../public/icons/search.svg";
import save from "../../public/icons/save.svg";
import user from "../../public/icons/user.svg";

export const profiles = [
  {
    name: "Christian Caneos",
    image: christian,
  },
  {
    name: "Kenneth Munion",
    image: kenneth,
  },
  {
    name: "Jude Delos Santos",
    image: jude,
  },
  {
    name: "Cresmar Mercedes",
    image: cresmar,
  },
  {
    name: "RJ Arididon",
    image: rj,
  },
];

export const navMenu = [
  {
    title: "Search",
    alt: "search",
    href: "/home",
    icon: search,
  },
  {
    title: "Saved",
    alt: "saved",
    href: "/saved",
    icon: save,
  },
  {
    title: "Admin",
    alt: "admin",
    href: "/admin",
    icon: user,
  },
];
