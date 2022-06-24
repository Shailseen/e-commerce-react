import "./filter.css";
export const Filter = ({displayType, dispatch, state }) => {
  const { includeOutOfStock } = state;
  return (
    <aside className="filter box-shadow">
      <div className="filter-heading-container border-bottom">
        <h4>FILTERS</h4>
        <a href="" className="text-style-none color-red">
          CLEAR
        </a>
      </div>
      { displayType==="desktop" &&
      <div className="sorting-container border-bottom">
        <h4 className="txt-align-left">Sort Price</h4>
        <div className="sortby-flex-container">
          <div className="sorting-list-wrapper">
            <input
              className="place-left"
              type="radio"
              name="sortData"
              id="popularity"
              checked={state.sortBy === "POPULARITY"}
              onChange={() => dispatch({ type: "POPULARITY" })}
            />
            <label htmlFor="popularity">Popularity</label>
          </div>

          <div className="sorting-list-wrapper">
            <input
              className="place-left"
              type="radio"
              name="sortData"
              id="Low to high"
              checked={state.sortBy === "LOW_TO_HIGH"}
              onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
            />
            <label htmlFor="Low to high">Low To High</label>
          </div>

          <div className="sorting-list-wrapper">
            <input
              className="place-left"
              type="radio"
              id="High to low"
              name="sortData"
              checked={state.sortBy === "HIGH_TO_LOW"}
              onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
            />
            <label htmlFor="High to low">High To Low</label>
          </div>
        </div>
      </div>
}

      <div className="cateogry-container border-bottom">
        <h4 className="txt-align-left">Categories</h4>
        <li className="cateogry-list-container list-style-none">
          <input
            id="Include out of stock"
            type="checkbox"
            checked={includeOutOfStock}
            onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
          />
          <label htmlFor="Include out of stock">Include out of stock</label>
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
          <label htmlFor="Volley ball">Volley Ball</label>
        </li>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Basket ball"
            type="checkbox"
            checked={state.basketBall}
            onChange={() => dispatch({ type: "BASKET_BALL" })}
          />
          <label htmlFor="Basket ball">Basket Ball</label>
        </li>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Tennis ball"
            type="checkbox"
            checked={state.tennisBall}
            onChange={() => dispatch({ type: "TENNIS_BALL" })}
          />
          <label htmlFor="Tennis ball">Tennis Ball</label>
        </li>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Base ball"
            type="checkbox"
            checked={state.baseBall}
            onChange={() => dispatch({ type: "BASE_BALL" })}
          />
          <label htmlFor="Base ball">Base Ball</label>
        </li>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Soccer ball"
            type="checkbox"
            checked={state.soccerBall}
            onChange={() => dispatch({ type: "SOCCER_BALL" })}
          />
          <label htmlFor="Soccer ball">Soccer Ball</label>
        </li>

        <li className="cateogry-list-container list-style-none">
          <input
            id="Golf ball"
            type="checkbox"
            checked={state.golfBall}
            onChange={() => dispatch({ type: "GOLF_BALL" })}
          />
          <label htmlFor="Golf ball">Golf Ball</label>
        </li>
      </div>

      <div className="category-container border-bottom">
        <h4 className="txt-align-left">Rating</h4>

        <div className="slider-container">
          <div className="slider-tag">
            <span className="slider-tag-value">1</span>
            <span className="slider-tag-value">2</span>
            <span className="slider-tag-value">3</span>
            <span className="slider-tag-value">4</span>
            <span className="slider-tag-value">5</span>
          </div>
          <div>
            <input
              type="range"
              onChange={(e) =>
                dispatch({ type: "SLIDER_RATING", payload: e.target.value })
              }
              min="1"
              max="5"
              value={state.sliderRating}
              className="slider-style"
            />
          </div>
        </div>
      </div>

      <div className="category-container border-bottom">
        <h4 className="txt-align-left">Price</h4>

        <div className="slider-container">
          <div className="slider-tag">
            <span className="slider-tag-value">100</span>
            <span className="slider-tag-value">2000</span>
            <span className="slider-tag-value">3500</span>
            <span className="slider-tag-value">5000</span>
            <span className="slider-tag-value">7000</span>
          </div>
          <div>
            <input
              type="range"
              onChange={(e) =>
                dispatch({ type: "SLIDER_PRICE", payload: e.target.value })
              }
              min="100"
              max="7000"
              value={state.sliderPrice}
              className="slider-style"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
