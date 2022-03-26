const ProductCard = ({item}) => {
  return (
    <div style={item.includeStock===false ? {opacity:0.3} : {opacity: 1}} className="card-vertical box-shadow" key={item.id}>
      <div className="card-img img-center">
        <img
          className="img-responsive with-border"
          src={item.image}
          alt="product"
        />
        <span className="badge-card">
          <i className="fas fa-heart"></i>
        </span>
      </div>
      <div className="text-container">
        <h4>{item.title}</h4>
        <div className="small-label m-2r">{item.categoryName}</div>
        <div className="inline-display"></div>
        <p class="price-card">
          <span className="original-price">${item.price}</span>{" "}
          <span className="price-discount">$149</span>{" "}
          <span className="price-percantage">33%</span>
        </p>
      </div>
      <div className="card-button-container pd-none mr-05rm">
        <button className="button-style-none solid-button w-100">
          <i className="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
