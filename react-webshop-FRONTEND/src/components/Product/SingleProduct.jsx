import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import data from "../Database/data";
import "./SingleProduct.css";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";

export function SingleProduct() {
  //-----------------------------------------------------------------------------//
  ///////////////////-----PARAMS LOGIC------////////////////
  const { id } = useParams();
  console.log(id);
  const singleProduct = data.find(function (product) {
    return product.id === Number(id);
  });
  //-----------------------------------------------------------------------------//

  //-----------------------------------------------------------------------------//
  ////----BASKET QUANTITY STATE----//////
  const [quantity, setQuantity] = useState(1);
  //-----------------------------------------------------------------------------//

  //-----------------------------------------------------------------------------//
  /////----CAROUSEL LOGIC----///////
  const [sliderIndex, setSliderIndex] = useState(0);

  //When the {id} changes sliderIndex is set to 0; For every new product sliderIndex is set to 0//
  useEffect(() => {
    setSliderIndex(0);
  }, [id]);

  function handlePrevSlide() {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1);
    }
  }

  function handleNextSlide() {
    if (sliderIndex < singleProduct.images.length - 1) {
      setSliderIndex(sliderIndex + 1);
    }
  }

  //When click we change the index from the array of images///
  function handleImageClick(index) {
    setSliderIndex(index);
  }

  console.log("This is slider index", sliderIndex);
  //-----------------------------------------------------------------------------//

  //-----------------------------------------------------------------------------//
  /////----BASKET QUANTITY LOGIC----/////
  function handlePlusQuantity() {
    setQuantity(quantity + 1);
  }
  function handleMinusQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  //-----------------------------------------------------------------------------//

  //-----------------------------------------------------------------------------//
  ////----ADDING TO CART----/////
  const { cartItems, addToCart } = useContext(CartContext);
  //------------------------------------------------------------------------------//

  function notify(itemTitle) {
    toast.success(`${itemTitle} added to cart!`);
  }
  return (
    <>
      <div class="product_container">
        <Toaster />
        <div class="gallery">
          <div class="product_image">
            <img src={singleProduct.images[sliderIndex]} alt="" />
          </div>
          <div className="product-gallery-container">
            <div class="product_gallery">
              {singleProduct.images.map(function (image, index) {
                return (
                  <div key={index}>
                    <img
                      src={image}
                      width={"100%"}
                      height={"100%"}
                      alt=""
                      onClick={() => handleImageClick(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div class="info">
          <div class="product_info">
            <img src="Images/canyon_logo.webp" alt="" />
            <h2>{singleProduct.title}</h2>

            <div class="product_price">
              <span>{singleProduct.price}€</span>
            </div>
            <h4>Choose color:</h4>
            <div class="product_color">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h4>Size:</h4>
            <div class="product_size">
              <div>54</div>
              <div>56</div>
              <div>58</div>
            </div>
            <div class="product_availability">
              <h4>
                <span>
                  <i class="fa-solid fa-store"></i>
                </span>
                <span> Available in:</span>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="yellowgreen"
                class="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
              <label for="">Webshop</label>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                class="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
              <label for="">Zagreb, Vitezićeva 1a</label>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="yellowgreen"
                class="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
              <label for="">Šibenik, Šibenska ulica 22</label>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="yellowgreen"
                class="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
              <label for="">Zadar, Ulica 4. gardijske brigade 1</label>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                class="bi bi-circle-fill"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
              <label for="">Osijek, Andrije Hebranga 10</label>
            </div>
            <div class="product_basket">
              <div class="quantity">
                <Link>
                  <Icon
                    onClick={handleMinusQuantity}
                    icon="ic:baseline-minus"
                    width="2em"
                    height="2em"
                    style={{ color: "black" }}
                  />
                </Link>
                <input
                  name="kol"
                  type="number"
                  min="1"
                  max="9"
                  class="quantity1"
                  id="kol"
                  value={quantity}
                  maxlength="3"
                  readOnly
                />
                <Link>
                  <Icon
                    onClick={handlePlusQuantity}
                    icon="ic:baseline-plus"
                    width="2em"
                    height="2em"
                    style={{ color: "black" }}
                  />
                </Link>
              </div>
              <div class="basket">
                <Link
                  onClick={() => {
                    addToCart(singleProduct), notify(singleProduct.title);
                  }}
                >
                  <span>
                    <Icon
                      icon="mdi:cart"
                      width="1.5em"
                      height="1.5em"
                      style={{ color: "white" }}
                    />
                  </span>
                  <span>Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="specification">
        <div class="specification_title">
          <i class="fa-solid fa-list"></i> <span>SPECIFIKACIJA/OPIS</span>
        </div>
        <div class="specification_list">
          <div>
            <p>
              <span class="bike_parts">FRAME: </span>Canyon Ultimate CF SLX Disc
            </p>
          </div>
          <div>
            <p>
              <span class="bike_parts">FORK: </span>Canyon FK0104 CF Disc
            </p>
          </div>
          <div>
            <p>
              <span>HEADSET: </span>Can GP7172-01
            </p>
          </div>
          <div>
            <p>
              <span>CRANKSET: </span>Shimano Ultegra R8100 52/36 4iiii Precision
              power meter
            </p>
          </div>

          <div>
            <p>
              <span>CASSETTE: </span>Shimano Ultegra R8100 11-30 12-speed
            </p>
          </div>
          <div>
            <p>
              <span>REAR DERAILLEUR: </span>Shimano Ultegra Di2 R8150
            </p>
          </div>
          <div>
            <p>
              <span>FRONT DERAILLEUR: </span>Shimano Ultegra Di2 R8150
            </p>
          </div>
          <div>
            <p>
              <span>BOTTOM BRACKET: </span>Shimano Pressfit BB72
            </p>
          </div>
          <div>
            <p>
              <span>CHAIN: </span>Shimano CN-M8100 12-speed
            </p>
          </div>
          <div>
            <p>
              <span>WHEELS: </span> DT Swiss ARC 1400 50/50
            </p>
          </div>
          <div>
            <p>
              <span>TYRES: </span>Schwalbe Pro One Skin 28mm
            </p>
          </div>
          <div>
            <p>
              <span>SEATPOST: </span>Canyon SP0055
            </p>
          </div>
          <div>
            <p>
              <span>SADDLE: </span>Selle Italia SLR Boost Superflow Ti316
            </p>
          </div>
          <div>
            <p>
              <span>WEIGHT: </span>7.3kg
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
