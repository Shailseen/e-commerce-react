import "./cart-price-card.css"
export const CartPriceCard = () => {
    return (
        <div class="price-detail-container box-shadow justify-center">
                <label class="t-bold border-bottom p-b-1rm">Price details</label>
                <div class="space-btw p-b-1rm">
                    <label>Price (2 items)</label>
                    <label>₹4999</label>
                </div>
                <div class="space-btw p-b-1rm">
                    <label>Discount</label>
                    <label class="green-color">-₹999</label>
                </div>
                <div class="space-btw border-bottom p-b-1rm">
                    <label>Delivery Charges</label>
                    <label class="green-color">FREE</label>
                </div>
                <div class="space-btw border-bottom p-b-1rm">
                    <label class="t-bold">TOTAL AMOUNT</label>
                    <label class="t-bold">₹4000</label>
                </div>
                <p class="green-color">You will save ₹999 on this order</p>
                <button class="button-style-none solid-button w-100">PLACE ORDER</button>
              </div>
    )
}