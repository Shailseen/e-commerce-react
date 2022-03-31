import "./cart-price-card.css"
export const CartPriceCard = () => {
    return (
        <div className="price-detail-container box-shadow justify-center">
                <label className="t-bold border-bottom p-b-1rm">Price details</label>
                <div className="space-btw p-b-1rm">
                    <label>Price (2 items)</label>
                    <label>₹4999</label>
                </div>
                <div className="space-btw p-b-1rm">
                    <label>Discount</label>
                    <label className="green-color">-₹999</label>
                </div>
                <div className="space-btw border-bottom p-b-1rm">
                    <label>Delivery Charges</label>
                    <label className="green-color">FREE</label>
                </div>
                <div className="space-btw border-bottom p-b-1rm">
                    <label className="t-bold">TOTAL AMOUNT</label>
                    <label className="t-bold">₹4000</label>
                </div>
                <p className="green-color">You will save ₹999 on this order</p>
                <button className="button-style-none solid-button w-100">PLACE ORDER</button>
              </div>
    )
}