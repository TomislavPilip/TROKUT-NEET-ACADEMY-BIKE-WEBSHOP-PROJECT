import "./cart.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  console.log("These are cartItems =>", cartItems);
  console.log(cartItems);
  console.log();

  function deleteToast(ItemTitle) {
    toast.success(`${ItemTitle} successfully removed from cart!`);
  }

  return (
    <div className="cart-container">
      <Toaster />
      <div className="kosara">
        <div className="left-column">
          {cartItems.map((item) => (
            <div key={item.id} className="proizvod">
              <div className="proizvod-slika">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="proizvod-info">
                <div className="product-name">
                  <Link to={`/product/${item.id}`}>
                    <h3>{item.title}</h3>
                  </Link>
                </div>

                <div className="cijena">
                  <div>{item.price}€</div>
                </div>
                <div className="delete-quantity-container">
                  <div className="quantity">
                    <span>Quantity:</span> <span>{item.quantity}</span>
                  </div>

                  <div className="delete-button-container">
                    <button
                      className="delete-button"
                      onClick={() => {
                        removeFromCart(item), deleteToast(item.title);
                      }}
                      type="button"
                    >
                      <span>
                        <Icon
                          icon="mdi:trash"
                          width="2.2em"
                          height="2.2em"
                          style={{ color: "black" }}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="delete-button-container"></div>
            </div>
          ))}
        </div>

        {cartItems.length === 0 && <div>Your cart is empty</div>}
        {cartItems.length > 0 && (
          <div className="right-column">
            <div className="checkout">
              <div className="price">
                <span>Delivery:</span>
                <span>Free</span>
              </div>
              <div className="osnovica">
                <span>Without TAX</span>
                <span>7.067,20 €</span>
              </div>
              <div className="porez">
                <span>PDV:</span>
                <span>1.769,80 €</span>
              </div>
              <div className="ukupno">
                <span>Total:</span>
                <span>{getCartTotal()} €</span>
              </div>
              <Link to={"/checkout"}>
                <button type="button">Proceed to checkout</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
