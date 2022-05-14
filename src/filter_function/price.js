export const getItemByPriceSlider = (productList,priceRange) => {
    return productList.filter(item => item.price <= priceRange)
}