import "./filter.css";
export const Filter = ({ dispatch, state }) => {
  const { includeOutOfStock } = state;
  return (
    <aside className="filter box-shadow">
      <div className="filter-heading-container border-bottom">
        <h4>FILTERS</h4>
        <a href="" className="text-style-none color-red">
          CLEAR
        </a>
      </div>
      <div className="sorting-container border-bottom">
        <h4 className="txt-align-left">Sort Price</h4>
        <input
          className="place-left"
          type="radio"
          name="sortData"
          id="Low to high"
          checked={state.sortBy === "LOW_TO_HIGH"}
          onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
        />
        <label for="Low to high">Low To High</label>
        <br />
        <input
          className="place-left"
          type="radio"
          id="High to low"
          name="sortData"
          checked={state.sortBy === "HIGH_TO_LOW"}
          onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
        />
        <label for="High to low">High To Low</label>
      </div>

      <div className="cateogry-container border-bottom">
        <h4 className="txt-align-left">Categories</h4>
        <li className="cateogry-list-container list-style-none">
          <input
            id="Include out of stock"
            type="checkbox"
            checked={includeOutOfStock}
            onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
          />
          <label for="Include out of stock">Include out of stock</label>
        </li>
      </div>
      <div className="category-container border-bottom">
        <h4 className="txt-align-left">Filter type</h4>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Volley ball"
            type="checkbox"
            checked={state.volleyBall}
            onChange={() => dispatch({ type: "VOLLEY_BALL" })}
          />
          <label for="Volley ball">Volley Ball</label>
        </li>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Basket ball"
            type="checkbox"
            checked={state.basketBall}
            onChange={() => dispatch({ type: "BASKET_BALL" })}
          />
          <label for="Basket ball">Basket Ball</label>
        </li>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Tennis ball"
            type="checkbox"
            checked={state.tennisBall}
            onChange={() => dispatch({ type: "TENNIS_BALL" })}
          />
          <label for="Tennis ball">Tennis Ball</label>
        </li>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Base ball"
            type="checkbox"
            checked={state.baseBall}
            onChange={() => dispatch({ type: "BASE_BALL" })}
          />
          <label for="Base ball">Base Ball</label>
        </li>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Soccer ball"
            type="checkbox"
            checked={state.soccerBall}
            onChange={() => dispatch({ type: "SOCCER_BALL" })}
          />
          <label for="Soccer ball">Soccer Ball</label>
        </li>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Golf ball"
            type="checkbox"
            checked={state.golfBall}
            onChange={() => dispatch({ type: "GOLF_BALL" })}
          />
          <label for="Golf ball">Golf Ball</label>
        </li>
      </div>
    </aside>
  );
};
