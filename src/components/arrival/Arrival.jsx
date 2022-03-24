import { cardData } from "../../routes/homepage/cardData"
import "./arrival.css"

export const Arrival  = () => (
        <section class="arrival-container">
            <>
            {cardData.map((item) =>
        <div class="horizontal-card-output box-shadow">
            <div class="horizontal-card">
              <div class="card-img img-center">
                <img class="img-responsive with-border" src={item.image}/>
              </div>
              <div class="card-description-container">
              <div class="text-container text-grid">
                <h3>{item.productName}</h3>
                <p>{item.productDescription}</p>
                <p class="price-card"><span class="original-price">{item.price}</span> <span class="price-discount">{item.discountedPrice}</span> <span class="price-percantage">{item.percantageDiscount}</span></p>
              </div>
              <div class="card-button-container button-grid">
                <button class="button-style-none solid-button" onclick="location.href='/pages/homepage/product-page.html'">Explore</button>
              </div>
             </div>
            </div>
        </div> 
            )}
            </>
         </section>
)