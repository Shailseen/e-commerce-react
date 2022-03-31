import "./product-cart-card.css"

export const ProductCartCard = () =>{
    return (
        <div class="card-items-container justify-center">
                <div class="horizontal-card-output box-shadow">
                    <div class="horizontal-card">
                      <div class="card-img img-center">
                        <img class="img-responsive with-border" src="/assets/81eRVhCsATL._SX425_.jpg" alt="volleyball"/>
                      </div>
                      <div class="card-description-container">
                      <div class="text-container text-grid">
                        <h4>Nivia Kross World Volleyball</h4>
                        <p class="price-card"><span class="original-price">$100</span> <span class="price-discount">$149</span> <span class="price-percantage">33%</span></p>
                        <div class="quantity-container">
                            <label>Quantity:</label>
                            <button class="outline-round-button">-</button>
                            <input type="text" class="quantity-input-box" value="1"/>
                            <button class="outline-round-button">+</button>
                        </div>
                      </div>
                      <div class="card-button-container">
                        <button class="button-style-none secondary-button w-100 white-color">Remove From Cart</button>
                        <button class="button-style-none outline-secondary-button w-100">Move to Wishlist</button>
                      </div>
                     </div>
                    </div>
              </div>
            </div>
    )
}