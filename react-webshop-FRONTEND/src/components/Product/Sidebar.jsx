import { Radio } from "antd";
import "./sidebar.css";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Sidebar({ filterProducts, filterCategory }) {
  const [brandsActive, setBrandsActive] = useState("sidebar-categories-radio");
  const [pricesActive, setPricesActive] = useState("sidebar-prices-radio");

  function handleCategories() {
    if (brandsActive === "sidebar-categories-radio") {
      setBrandsActive("sidebar-categories-radio brands-active");
    } else {
      setBrandsActive("sidebar-categories-radio");
    }
  }

  function handlePrices() {
    if (pricesActive === "sidebar-prices-radio") {
      setPricesActive("sidebar-prices-radio prices-active");
    } else {
      setPricesActive("sidebar-prices-radio");
    }
  }

  ////////----Function for changing Brand Category-----/////////
  function handleBrandChange(brand) {
    filterProducts(brand);
    console.log("This is brand", brand);
  }

  ////////----Function for changing  Category-----/////////
  function handleCategoryChange(category) {
    filterCategory(category);
    console.log("This is category", category);
  }

  return (
    <>
      <div className={"sidebar-products-categories"}>
        <div className="brands">
          <div className="categories-heading">
            <h5>Brands</h5>
            <div>
              <Icon
                onClick={() => handleCategories()}
                icon="game-icons:hamburger-menu"
                width="1.5em"
                height="1.5em"
                style={{ color: "black" }}
              />
            </div>
          </div>
          <div className={brandsActive}>
            <Radio.Group
              onChange={(e) => handleBrandChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value={"All"}>All</Radio>
              <Radio value={"Scott"}>Scott</Radio>
              <Radio value={"Giant"}>Giant</Radio>
              <Radio value={"Marin"}>Marin</Radio>
              <Radio value={"Colnago"}>Colnago</Radio>
              <Radio value={"Specialized"}>Specialized</Radio>
              <Radio value={"Fuji"}>Fuji</Radio>
              <Radio value={"Kona"}>Kona</Radio>
              <Radio value={"Bianchi"}>Bianchi</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="prices">
          <div className="categories-heading">
            <h5>Category</h5>
            <div>
              <Icon
                onClick={() => handlePrices()}
                icon="game-icons:hamburger-menu"
                width="1.5em"
                height="1.5em"
                style={{ color: "black" }}
              />
            </div>
          </div>
          <div className={pricesActive}>
            <Radio.Group
              onChange={(e) => handleCategoryChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value={"All"}>All</Radio>
              <Radio value={"mtb"}>MTB</Radio>

              <Radio value={"road"}>Road</Radio>
              <Radio value={"gravel"}>Gravel</Radio>
              <Radio value={"electric"}>Electric</Radio>
              <Radio value={"kids"}>Kids</Radio>
            </Radio.Group>
          </div>
        </div>
      </div>
    </>
  );
}
