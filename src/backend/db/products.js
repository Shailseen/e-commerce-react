import { v4 as uuid } from "uuid";
import volleyImg1 from "../../assets/images/volleyball.jpg"
import volleyImg2 from "../../assets/images/volley ball2.jpg"
import basketImg1 from "../../assets/images/Basketball.png"
import basketImg2 from "../../assets/images/basketball2.jpg"
import tennisImg1 from "../../assets/images/tennis.jpg"
import tennisImg2 from "../../assets/images/tennisball2.jpg"
import baseImg1 from "../../assets/images/baseball.jpg"
import baseImg2 from "../../assets/images/baseball2.jpg"
import soccerImg1 from "../../assets/images/soccerball.jpg"
import soccerImg2 from "../../assets/images/soccerball2.jpg"
import golfImg1 from "../../assets/images/golfball.jpg"
import golfImg2 from "../../assets/images/golfball2.jpg"

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "volley Ball1",
    price: "5000",
    categoryName: "volleyBall",
    includeStock: true,
    image: volleyImg1
  },
  {
    _id: uuid(),
    title: "volley Ball2",
    price: "5400",
    categoryName: "volleyBall",
    includeStock: false,
    image: volleyImg2
  },
  {
    _id: uuid(),
    title: "basket Ball1",
    price: "3000",
    categoryName: "basketBall",
    includeStock: false,
    image: basketImg1
  },
  {
    _id: uuid(),
    title: "basket Ball2",
    price: "3300",
    categoryName: "basketBall",
    includeStock: true,
    image: basketImg2
  },
  {
    _id: uuid(),
    title: "tennis Ball1",
    price: "300",
    categoryName: "tennisBall",
    includeStock: false,
    image: tennisImg1
  },
  {
    _id: uuid(),
    title: "tennis Ball2",
    price: "400",
    categoryName: "tennisBall",
    includeStock: true,
    image: tennisImg2
  },
  {
    _id: uuid(),
    title: "base Ball1",
    price: "800",
    categoryName: "baseBall",
    includeStock: false,
    image: baseImg1
  },
  {
    _id: uuid(),
    title: "base Ball2",
    price: "750",
    categoryName: "baseBall",
    includeStock: true,
    image: baseImg2
  },
  {
    _id: uuid(),
    title: "soccer Ball1",
    price: "6500",
    categoryName: "soccerBall",
    includeStock: true,
    image: soccerImg1
  },
  {
    _id: uuid(),
    title: "soccer Ball2",
    price: "6900",
    categoryName: "soccerBall",
    includeStock: false,
    image: soccerImg2
  },
  {
    _id: uuid(),
    title: "golf Ball1",
    price: "5050",
    categoryName: "golfBall",
    includeStock: true,
    image: golfImg1
  },
  {
    _id: uuid(),
    title: "golf Ball2",
    price: "5550",
    categoryName: "golfBall",
    includeStock: false,
    image: golfImg2
  },
];
