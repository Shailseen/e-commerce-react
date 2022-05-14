import "./product-page.css";
import { Filter } from "../../components/filter/Filter";
import { ProductCard } from "../../components";
import { useProduct } from "../../context/product-context";
import { useReducer } from "react";
import { getSortedProducts } from "../../filter_function/index";
import { reducer } from "../../reducer/filter-reducer";
import { getIncludeProducts } from "../../filter_function/includeProduct";
import { getFilterCategoryProducts } from "../../filter_function/filterCategory";
import { getSliderRating } from "../../filter_function/rating";
import { useEffect } from "react";
import { getItemByPriceSlider } from "../../filter_function/price";
export const ProductPage = () => {
  useEffect(() => {
    document.title = "Smasher | Shop";
  }, []);
  const { productList } = useProduct();

  const [state, dispatch] = useReducer(reducer, {
    sortBy: "",
    includeOutOfStock: false,
    volleyBall: false,
    basketBall: false,
    tennisBall: false,
    baseBall: false,
    soccerBall: false,
    golfBall: false,
    sliderRating: 3,
    sliderPrice: 3500,
  });

  const includeProducts = getIncludeProducts(
    productList,
    state.includeOutOfStock
  );

  const filterCategoryProducts = getFilterCategoryProducts(
    includeProducts,
    state
  );

  const sliderRating = getSliderRating(
    filterCategoryProducts,
    state.sliderRating
  );

  const sliderPrice = getItemByPriceSlider(sliderRating, state.sliderPrice);

  const sortedProducts = getSortedProducts(sliderPrice, state.sortBy);

  const getFilteredProducts = sortedProducts;

  return (
    <div className="grid-container">
      <Filter dispatch={dispatch} state={state} />
      <section className="main">
        <h3>Sports</h3>
        <div className="product-container">
          {getFilteredProducts.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};
