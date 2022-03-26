import "./product-page.css";
import { Filter } from "../../components/filter/Filter";
import { ProductCard } from "../../components";
import { useProduct } from "../../context/product-context";
import { useReducer } from "react";
import { getSortedProducts } from "../../filter_function/index";
import { reducer } from "../../reducer/filter-reducer";
import { getIncludeProducts } from "../../filter_function/includeProduct";
import { getFilterCategoryProducts } from "../../filter_function/filterCategory";
import { useEffect } from "react";
export const ProductPage = () => {
    useEffect(()=>{
        document.title = "Smasher | Shop"
      },[])
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
  });

  const includeProducts = getIncludeProducts(
    productList,
    state.includeOutOfStock
  );
  console.log("hi",includeProducts)

  const filterCategoryProducts = getFilterCategoryProducts(
    includeProducts,
    state
  );

  const sortedProducts = getSortedProducts(
    filterCategoryProducts,
    state.sortBy
  );

  let getFilteredProducts = sortedProducts;

  return (
    <div className="grid-container">
      <Filter dispatch={dispatch} state={state} />
      <section className="main">
        <h3>Sports</h3>
        <div className="product-container">
          {getFilteredProducts.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

