import "./product-cart-card.css"

export const ProductCartCard = () =>{
    return (
        <div className="card-items-container justify-center">
                <div className="horizontal-card-output box-shadow">
                    <div className="horizontal-card">
                      <div className="card-img img-center">
                        <img className="img-responsive with-border" src="/assets/81eRVhCsATL._SX425_.jpg" alt="volleyball"/>
                      </div>
                      <div className="card-description-container">
                      <div className="text-container text-grid">
                        <h4>Nivia Kross World Volleyball</h4>
                        <p className="price-card"><span className="original-price">$100</span> <span className="price-discount">$149</span> <span className="price-percantage">33%</span></p>
                        <div className="quantity-container">
                            <label>Quantity:</label>
                            <button className="outline-round-button">-</button>
                            <input type="text" className="quantity-input-box" value="1"/>
                            <button className="outline-round-button">+</button>
                        </div>
                      </div>
                      <div className="card-button-container">
                        <button className="button-style-none secondary-button w-100 white-color">Remove From Cart</button>
                        <button className="button-style-none outline-secondary-button w-100">Move to Wishlist</button>
                      </div>
                     </div>
                    </div>
              </div>
            </div>
    )
}