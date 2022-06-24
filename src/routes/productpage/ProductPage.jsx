import "./product-page.css";
import { Filter } from "../../components/filter/Filter";
import { ProductCard } from "../../components";
import { useProduct } from "../../context/product-context";
import { getSortedProducts } from "../../filter_function/index";
import { getIncludeProducts } from "../../filter_function/includeProduct";
import { getFilterCategoryProducts } from "../../filter_function/filterCategory";
import { getSliderRating } from "../../filter_function/rating";
import { useEffect } from "react";
import { getItemByPriceSlider } from "../../filter_function/price";
import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";
export const ProductPage = () => {
  useEffect(() => {
    document.title = "Smasher | Shop";
  }, []);
  const { productList,state,dispatch } = useProduct();

  const [isPortalOpen, setIsPortalOpen] = useState(false);



  const sortByOptionSelected = (e) => {
    const dispatchType = e.target.value.toUpperCase();
    dispatch({ type: dispatchType });
  };

  const closePortal = () => {
    setIsPortalOpen(false);
  };

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
    <>
      <div className="mobile-filter">
        <div>
          <select className="select-option" onChange={sortByOptionSelected} name="sort-by" id="sort-by">
            <option value="popularity">Popularity</option>
            <option value="high_to_low">Price -- High to Low</option>
            <option value="low_to_high">Price -- Low to High</option>
          </select>
        </div>
        <div onClick={() => setIsPortalOpen(true)}>
          <i class="fad fa-filter"></i> <span>Filter</span>
        </div>
      </div>
      <div className="grid-container">
        <div className="desktop-filter">
          <Filter displayType={"desktop"} dispatch={dispatch} state={state} />
        </div>
        <section className="main">
          <h3>Sports</h3>
          <div className="product-container">
            {getFilteredProducts.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </section>
      </div>
      <Modal open={isPortalOpen} onClose={closePortal}>
        <Filter displayType={"mobile"} dispatch={dispatch} state={state} />
      </Modal>
    </>
  );
};


