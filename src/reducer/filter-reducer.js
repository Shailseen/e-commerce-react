export const reducer = (state, action) => {
  if(action.type === "SLIDER_PRICE")
  console.log(action.payload)
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };
    case "INCLUDE_OUT_OF_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "VOLLEY_BALL":
      return { ...state, volleyBall: !state.volleyBall };
    case "BASKET_BALL":
      return { ...state, basketBall: !state.basketBall };
    case "TENNIS_BALL":
      return { ...state, tennisBall: !state.tennisBall };
    case "BASE_BALL":
      return { ...state, baseBall: !state.baseBall };
    case "SOCCER_BALL":
      return { ...state, soccerBall: !state.soccerBall };
    case "GOLF_BALL":
      return { ...state, golfBall: !state.golfBall };
    case "SLIDER_RATING":
      return { ...state, sliderRating: action.payload };
    case "SLIDER_PRICE":
      return { ...state, sliderPrice: action.payload };
    default:
      return state;
  }
};
