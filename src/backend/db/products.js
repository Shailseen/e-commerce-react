import { v4 as uuid } from "uuid";
import volleyImg1 from "../../assets/images/volleyball.jpg"
import volleyImg2 from "../../assets/images/volley ball2.jpg"
import volleyImg3 from "../../assets/images/volleyball3.jpg"
import volleyImg4 from "../../assets/images/volleyball4.jpg"
import basketImg1 from "../../assets/images/Basketball.png"
import basketImg2 from "../../assets/images/basketball2.jpg"
import basketImg3 from "../../assets/images/basketball3.jpg"
import basketImg4 from "../../assets/images/basketball4.jpg"
import tennisImg1 from "../../assets/images/tennis.jpg"
import tennisImg2 from "../../assets/images/tennisball2.jpg"
import tennisImg3 from "../../assets/images/tennisball3.jpg"
import tennisImg4 from "../../assets/images/tennisball4.jpg"
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
    title: "Volley Ball1",
    price: "5000",
    categoryName: "volleyBall",
    includeStock: true,
    image: volleyImg1,
    rating: 3
  },
  {
    _id: uuid(),
    title: "Volley Ball2",
    price: "5400",
    categoryName: "volleyBall",
    includeStock: false,
    image: volleyImg2,
    rating: 4
  },
  {
    _id: uuid(),
    title: "Basket Ball1",
    price: "3000",
    categoryName: "basketBall",
    includeStock: false,
    image: basketImg1,
    rating: 2
  },
  {
    _id: uuid(),
    title: "Basket Ball2",
    price: "3300",
    categoryName: "basketBall",
    includeStock: true,
    image: basketImg2,
    rating: 3
  },
  {
    _id: uuid(),
    title: "Tennis Ball1",
    price: "300",
    categoryName: "tennisBall",
    includeStock: false,
    image: tennisImg1,
    rating: 4
  },
  {
    _id: uuid(),
    title: "Tennis Ball2",
    price: "400",
    categoryName: "tennisBall",
    includeStock: true,
    image: tennisImg2,
    rating: 3
  },
  {
    _id: uuid(),
    title: "Base Ball1",
    price: "800",
    categoryName: "baseBall",
    includeStock: false,
    image: baseImg1,
    rating: 5
  },
  {
    _id: uuid(),
    title: "Base Ball2",
    price: "750",
    categoryName: "baseBall",
    includeStock: true,
    image: baseImg2,
    rating: 3
  },
  {
    _id: uuid(),
    title: "Soccer Ball1",
    price: "6500",
    categoryName: "soccerBall",
    includeStock: true,
    image: soccerImg1,
    rating: 2
  },
  {
    _id: uuid(),
    title: "Soccer Ball2",
    price: "6900",
    categoryName: "soccerBall",
    includeStock: false,
    image: soccerImg2,
    rating: 5
  },
  {
    _id: uuid(),
    title: "Golf Ball1",
    price: "5050",
    categoryName: "golfBall",
    includeStock: true,
    image: golfImg1,
    rating: 3
  },
  {
    _id: uuid(),
    title: "Golf Ball2",
    price: "5550",
    categoryName: "golfBall",
    includeStock: false,
    image: golfImg2,
    rating: 4
  },
  {
    _id: uuid(),
    title: "Volley Ball3",
    price: "3654",
    categoryName: "volleyBall",
    includeStock: true,
    image: volleyImg3,
    rating: 2
  },
  {
    _id: uuid(),
    title: "Volley Ball4",
    price: "2812",
    categoryName: "volleyBall",
    includeStock: false,
    image: volleyImg4,
    rating: 1
  },
  {
    _id: uuid(),
    title: "Basket Ball3",
    price: "2903",
    categoryName: "basketBall",
    includeStock: false,
    image: basketImg3,
    rating: 3
  },
  {
    _id: uuid(),
    title: "Basket Ball4",
    price: "3493",
    categoryName: "basketBall",
    includeStock: true,
    image: basketImg4,
    rating: 1
  },
  {
    _id: uuid(),
    title: "Tennis Ball3",
    price: "699",
    categoryName: "tennisBall",
    includeStock: false,
    image: tennisImg3,
    rating: 1
  },
  {
    _id: uuid(),
    title: "Tennis Ball4",
    price: "150",
    categoryName: "tennisBall",
    includeStock: true,
    image: tennisImg4,
    rating: 4
  },
];
