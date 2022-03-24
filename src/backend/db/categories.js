import { v4 as uuid } from "uuid";
// import {image18} from "../../assets/index";
import volleyball from "../../assets/images/volleyball.jpg";
import Basketball from "../../assets/images/Basketball.png";
import tennis from "../../assets/images/tennis.jpg";
import baseball from "../../assets/images/baseball.jpg";
import soccerball from "../../assets/images/soccerball.jpg";
import golfball from "../../assets/images/golfball.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Volley Ball",
    image: volleyball
  },
  {
    _id: uuid(),
    categoryName: "Basket Ball",
    image: Basketball
  },
  {
    _id: uuid(),
    categoryName: "Tennis Ball",
    image: tennis
  },
  {
    _id: uuid(),
    categoryName: "Base Ball",
    image: baseball
  },
  {
    _id: uuid(),
    categoryName: "Soccer Ball",
    image: soccerball
  },
  {
    _id: uuid(),
    categoryName: "Golf Ball",
    image: golfball
  },
];
