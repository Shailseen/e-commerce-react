import { cardData } from "../../routes/homepage/cardData"
import "./arrival.css"

export const Arrival  = () => (
        <section className="arrival-container">
            <>
            {cardData.map((item) =>
        <div key={item.id} className="horizontal-card-output box-shadow">
            <div className="horizontal-card">
              <div className="card-img img-center">
                <img className="img-responsive with-border" src={item.image}/>
              </div>
              <div className="card-description-container">
              <div className="text-container text-grid">
                <h3>{item.productName}</h3>
                <p>{item.productDescription}</p>
                <p className="price-card"><span className="original-price">{item.price}</span> <span className="price-discount">{item.discountedPrice}</span> <span className="price-percantage">{item.percantageDiscount}</span></p>
              </div>
              <div className="card-button-container button-grid">
                <button className="button-style-none solid-button">Explore</button>
              </div>
             </div>
            </div>
        </div> 
            )}
            </>
         </section>
)