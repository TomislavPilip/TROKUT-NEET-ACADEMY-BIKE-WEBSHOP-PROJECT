import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AppWrapperComponent } from "./components/AppWrapperComponent/AppWrapperComponent";
import { ProductWrapper } from "./components/Product/ProductWrapper";
import { AuthentificationWrapper } from "./components/Authentification/AuthentificationWrapper";
import { Login } from "./components/Authentification/Login";
import { Register } from "./components/Authentification/Register";
import { SingleProduct } from "./components/Product/SingleProduct";
import { Home } from "./components/Home/Home";
import { Blog } from "./components/Blog/Blog";
import { Products } from "./components/Product/Products";
import { Contact } from "./components/Contact/Contact";
import { Cart } from "./components/Cart/Cart";
import { BlogArticle } from "./components/Blog/BlogArticle";
import { BlogWrapperComponent } from "./components/AppWrapperComponent/BlogWrapperComponent";
import { Checkout } from "./components/Checkout/Checkout";
import { About } from "./components/About/About";
import { CategoryProductsPage } from "./components/Product/CategoryProductsPage";

function App() {
  ///////Everything is going to be rendered in APPWRAPPERCOMPONENT
  ///////Ovaj Route index element{home} je defaultna stranica

  const [isOverflowActive, setIsOverflowActive] = useState(false);

  // Function to toggle the overlay
  const toggleOverflow = () => {
    setIsOverflowActive(!isOverflowActive);
  };

  //Apply overflow: hidden to body when overlay is active
  useEffect(() => {
    if (isOverflowActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOverflowActive]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<AppWrapperComponent toggleOverflow={toggleOverflow} />}
          >
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<BlogWrapperComponent />}>
              <Route index element={<Blog />} />
              <Route path="/blog/:id" element={<BlogArticle />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductWrapper />}>
              <Route index element={<Products />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Route>
            {/*<Route path="/:category" element={<CategoryProductsPage />} />*/}

            <Route />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/authentification">
            <Route index element={<Login />} />
            <Route path="/authentification/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
