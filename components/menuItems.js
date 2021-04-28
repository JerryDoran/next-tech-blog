import Home from "@material-ui/icons/Home";
import Info from "@material-ui/icons/Info";
import Book from "@material-ui/icons/Book";
import Apps from "@material-ui/icons/Apps";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: <Home />
  },
  {
    title: "About",
    url: "/about",
    icon: <Info />
  },
  {
    title: "Blog",
    url: "/blog",
    icon: <Book />
  },
  {
    title: "Apps",
    url: "/apps",
    icon: <Apps />
  }
];

export default menuItems;
