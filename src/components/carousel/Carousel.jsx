import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./carousel.css";
import { useProduct } from "../../context/product-context";
const Carousel = () => {
  const [categories, setCategories] = useState([]);
  const { state, dispatch } = useProduct();
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`/api/categories`);
      setCategories(response.data.categories);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const selectedCategories = (categoryName) => {
    const dispatchType = categoryName.split(" ");
    const dispatchTypeName =
      dispatchType[0].toUpperCase() + "_" + dispatchType[1].toUpperCase();
    dispatch({ type: dispatchTypeName });
  };

  return (
    <section className="menu-container">
      {categories.map((item) => (
        <Link to="/shop">
          <div
            onClick={() => selectedCategories(item.categoryName)}
            className="text-overlay-component box-shadow"
            key={item._id}
          >
            <img className="img-responsive menu-image" src={item.image} />
            <div className="textC">{item.categoryName}</div>
          </div>
        </Link>
      ))}
    </section>
  );
};
export { Carousel };
