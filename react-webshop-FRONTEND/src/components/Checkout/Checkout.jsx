import "./Checkout.css";
import Visa from "../../assets/Checkout-images/Visa.svg.png";
import Amex from "../../assets/Checkout-images/amex.jpg";
import Paypal from "../../assets/Checkout-images/paypal.png";
import Mastercard from "../../assets/Checkout-images/mastercard.jpeg";

export function Checkout() {
  return (
    <main>
      <section>
        <form className="checkout-form" action="">
          <div className="checkout-container">
            <div className="billing-adress">
              <h2>BILLING ADRESS</h2>
              <div className="column1">
                <div className="col1 name">
                  <span>Full name:</span>
                  <input type="text" placeholder="Ime i prezime" />
                </div>
                <div className="col1 email">
                  <span>E-mail:</span>
                  <input type="email" placeholder="example@example.com" />
                </div>
                <div className="col1 adress">
                  <span>Adress:</span>
                  <input type="text" placeholder="Ulica kralja Tomislava 5" />
                </div>
                <div className="col1 city">
                  <span>City:</span>
                  <input type="text" placeholder="Šibenik" />
                </div>
                <div className="col1 state-zip">
                  <div className="state">
                    <span>State:</span>
                    <input type="text" placeholder="Croatia" />
                  </div>
                  <div className="zip-code">
                    <span>Zip Code:</span>
                    <input type="number" placeholder="123 456" />
                  </div>
                </div>
              </div>
            </div>

            <div class="payment">
              <h2>PAYMENT</h2>
              <div class="cards">
                <span>Accepted cards:</span>
                <div class="col1 card-images">
                  <div class="card">
                    <img src={Visa} alt="" />
                  </div>
                  <div class="card">
                    <img src={Paypal} alt="" />
                  </div>
                  <div class="card">
                    <img src={Amex} alt="" />
                  </div>
                  <div class="card">
                    <img src={Mastercard} alt="" />
                  </div>
                </div>
              </div>
              <div class="col1 card-name">
                <span>Name On Card</span>
                <input type="text" placeholder="Mr. Unknown Unknown" />
              </div>
              <div class="col1 card-number">
                <span>Credit Card Number:</span>
                <input type="text" placeholder="1111-2222-3333-4444" />
              </div>
              <div class="col1 card-month">
                <span>Exp Month:</span>
                <input type="text" placeholder="June" />
              </div>
              <div class="col1 card-info">
                <div class="col1 card-year">
                  <span>Exp Year:</span>
                  <input type="text" placeholder="2024" />
                </div>
                <div class="col1 card-cvv">
                  <span>CVV:</span>
                  <input type="text" placeholder="123" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit">Proceed to checkout</button>
        </form>
      </section>
    </main>
  );
}
