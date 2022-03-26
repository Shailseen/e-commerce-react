import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./carousel.css";
const Carousel = () => {
  const [categories, setCategories] = useState([]);
  console.log("hsjbs");
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`/api/categories`);
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="menu-container">
      {categories.map((item) => (
        <div className="text-overlay-component box-shadow" key={item._id}>
          <Link to="/shop">
            <img className="img-responsive menu-image" src={item.image} />
          </Link>
        </div>
      ))}
    </section>
  );
};
export { Carousel };
