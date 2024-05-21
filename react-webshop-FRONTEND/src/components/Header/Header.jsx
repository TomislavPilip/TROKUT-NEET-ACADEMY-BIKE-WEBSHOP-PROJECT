import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

import logo from "../../assets/Logo/Tomelogo.webp";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export function Header({ toggleOverflow }) {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    totalQuantity,
  } = useContext(CartContext);

  console.log("Total quantity:", totalQuantity);

  const [isActive, setIsActive] = useState("menu");
  const [overlay, setOverlay] = useState("overlay-invisible");

  function handleHamburgerButton() {
    setIsActive("menu active");
    setOverlay("overlay");
    toggleOverflow();
  }

  function closeHamburger() {
    setIsActive("menu");
    setOverlay("overlay-invisible");
    toggleOverflow();
  }

  return (
    <header className="header-container">
      {/*HEADER - FIRST LINE: location and contacts*/}

      {/*MAKING OVERLAYS FOR LOGIN FORM*/}
      <div className={overlay}></div>
      <div className="first-nav-container">
        <nav className="first-nav">
          <div className="location">
            <Link>
              <span>
                <Icon
                  icon="carbon:location-filled"
                  width="1.5em"
                  height="1.5em"
                  style={{ color: "white" }}
                />
              </span>
              <span>Šibenik</span>
            </Link>
          </div>
          <div className="contacts">
            <div>
              <Link>
                <span>
                  <Icon
                    icon="fluent-mdl2:service-off"
                    width="1.5em"
                    height="1.5em"
                    style={{ color: "white" }}
                  />
                </span>
                <span>Service</span>
              </Link>
            </div>
            <div>
              <Link>
                <span>
                  <Icon
                    icon="fluent:book-contacts-32-filled"
                    width="1.5em"
                    height="1.5em"
                    style={{ color: "white" }}
                  />
                </span>
                <span>Contact</span>
              </Link>
            </div>
            <div>
              <Link>
                <span>
                  <Icon icon="devicon:facebook" width="1.5em" height="1.5em" />
                </span>
              </Link>
            </div>
            <div>
              <Link>
                {" "}
                <span>
                  <Icon
                    icon="skill-icons:instagram"
                    width="1.5em"
                    height="1.5em"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="authorization">
            <div className="login">
              <Link to={"/authentification"}>
                <Icon
                  icon="iconamoon:profile"
                  width="2em"
                  height="2em"
                  style={{ color: "white" }}
                />
              </Link>
            </div>
            <div className="basket">
              <Link to={"/cart"}>
                <span>
                  <Icon
                    icon="majesticons:basket-2"
                    width="2em"
                    height="2em"
                    style={{ color: "white" }}
                  />
                </span>

                <span>{totalQuantity && totalQuantity} </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/*HEADER - SECOND LINE: logo, menu and search bar*/}
      <div className="second-nav-container">
        <nav className="second-nav">
          <div className="logo">
            <div>
              <Link>
                <img src={logo} alt="Bike shop logo" />
              </Link>
            </div>
          </div>
          <div className="search-bar">
            <div>
              <span>
                <input type="text" placeholder="Search" />
              </span>
              <Link>
                <span>
                  <Icon
                    icon="ion:search"
                    width="1.5em"
                    height="1.5em"
                    style={{ color: "black" }}
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className={isActive}>
            <ul>
              <li className="menu-header">
                <span>Menu</span>{" "}
                <Link>
                  <span
                    onClick={() => {
                      closeHamburger();
                    }}
                  >
                    <Icon
                      icon="ic:outline-close"
                      width="1.5em"
                      height="1.5em"
                      style={{ color: "black" }}
                    />
                  </span>
                </Link>
              </li>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/product"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="authorization">
            <div className="login">
              <Link to={"/authentification"}>
                <Icon
                  icon="iconamoon:profile"
                  width="2em"
                  height="2em"
                  style={{ color: "black" }}
                />
              </Link>
            </div>
            <div className="basket">
              <Link to={"/cart"}>
                <span>
                  <Icon
                    icon="majesticons:basket-2"
                    width="2em"
                    height="2em"
                    style={{ color: "black" }}
                  />
                </span>
                <span>{totalQuantity && totalQuantity}</span>
              </Link>
            </div>
            <div className="hamburger-button" onClick={handleHamburgerButton}>
              <Link>
                <Icon
                  icon="ci:hamburger-lg"
                  width="2em"
                  height="2em"
                  style={{ color: "black" }}
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/*HEADER - THIRD LINE: search bar*/}
      <div className="third-nav-container">
        <nav className="third-nav">
          <div className="search-bar">
            <div>
              <span>
                <input type="text" placeholder="Search" />
              </span>
              <span>
                <Icon
                  icon="ion:search"
                  width="1.5em"
                  height="1.5em"
                  style={{ color: "black" }}
                />
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
