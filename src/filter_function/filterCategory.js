export const getFilterCategoryProducts = (
  productList,
  { volleyBall, basketBall, tennisBall, baseBall, soccerBall, golfBall }
) => {
  let finalFilteredProduct = [];
  if (volleyBall === true)
    finalFilteredProduct = [
      ...finalFilteredProduct,
      ...productList.filter((item) => item.categoryName === "volleyBall"),
    ];
  if (basketBall === true)
    finalFilteredProduct = [
      ...finalFilteredProduct,
      ...productList.filter((item) => item.categoryName === "basketBall"),
    ];
  if (tennisBall === true)
    finalFilteredProduct = [
      ...finalFilteredProduct,
      ...productList.filter((item) => item.categoryName === "tennisBall"),
    ];
  if (baseBall === true)
    finalFilteredProduct = [
      ...finalFilteredProduct,
      ...productList.filter((item) => item.categoryName === "baseBall"),
    ];
  if (soccerBall === true)
    finalFilteredProduct = [
      ...finalFilteredProduct,
      ...productList.filter((item) => item.categoryName === "soccerBall"),
    ];
  if (golfBall === true)
    finalFilteredProduct = [
      ...finalFilteredProduct,
      ...productList.filter((item) => item.categoryName === "golfBall"),
    ];
  if (finalFilteredProduct.length === 0) return productList;
  return finalFilteredProduct;
};
