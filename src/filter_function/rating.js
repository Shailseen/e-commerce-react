export const getSliderRating = (productList,rating) => {
    return productList.filter((item) => item.rating <= rating);
}