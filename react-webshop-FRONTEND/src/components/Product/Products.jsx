import "./products.css";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useContext, useEffect } from "react";
import data from "../Database/data";
import { Rate } from "antd";
import { CartContext } from "../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { Sidebar } from "./Sidebar";
import { Dropdown } from "react-bootstrap";

export function Products() {
  const [sortBy, setSortBy] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log("These are filter products", filteredProducts);

  //-------------------------------------------------------------------------------------------//
  //////----SORTING PRODUCTS LOGIC----///////

  ///////By Alphabet
  if (sortBy === "AtoZ") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "ZtoA") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    //////By Price
  } else if (sortBy === "PriceUp") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "PriceDown") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  function handleSorting(param) {
    setSortBy(param);
  }

  let allProducts = data;
  //////By Brand and by category ===>> Two FUNCTIONS (brand, category)
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!----USEEFFECT calls filterProducts with "All" argument as initial value
  useEffect(() => {
    filterProducts("All");
    filterCategory("All");
  }, [allProducts]);

  function filterProducts(brand) {
    /////First we have logic for all products

    if (brand === "All") {
      setFilteredProducts(allProducts);
    } else {
      const filteredProductsByBrand = allProducts.filter((product) => {
        return product.company === brand;
      });
      setFilteredProducts(filteredProductsByBrand);
    }
  }

  function filterCategory(category) {
    if (category === "All") {
      setFilteredProducts(allProducts);
    } else {
      const filteredProductsByCategory = allProducts.filter((product) => {
        return product.category === category;
      });
      setFilteredProducts(filteredProductsByCategory);
    }
  }

  //-------------------------------------------------------------------------------------------//

  function handleRatingChage(productTitle, value) {
    console.log(`Product ${productTitle} rating changed to ${value}`);
  }
  function notify(itemTitle) {
    toast.success(`${itemTitle} added to cart!`);
  }

  const { cartItems, addToCart } = useContext(CartContext);
  console.log("These are cartItems =>", cartItems);
  console.log(data);
  return (
    <div className="products-container">
      <div className="products-left-container">
        <div className="products-sidebar">
          <Sidebar
            filterProducts={filterProducts}
            filterCategory={filterCategory}
          />
        </div>
      </div>
      <div className="products-right-container">
        <Container fluid>
          <Row className="d-flex justify-content-end">
            <Col className="col-4 d-flex justify-content-end">
              <div className="order-products-filter">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="transparent border-0"
                    id="dropdown-basic"
                  >
                    Arrange products
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => handleSorting("AtoZ")}
                      href="#/action-1"
                    >
                      From A to Z
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleSorting("ZtoA")}
                      href="#/action-2"
                    >
                      From Z to A
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleSorting("PriceUp")}
                      href="#/action-3"
                    >
                      <span>Prices</span>
                      <span>
                        <Icon
                          icon="icon-park:up"
                          width="1.5em"
                          height="1.5em"
                        />
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleSorting("PriceDown")}
                      href="#/action-3"
                    >
                      <span>Prices</span>
                      <span>
                        <Icon
                          icon="icon-park:down"
                          width="1.5em"
                          height="1.5em"
                        />
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              );
            </Col>
          </Row>
        </Container>
        <Container fluid className="p-0">
          <Toaster />
          <Row className="m-3">
            {filteredProducts &&
              filteredProducts.map(function (item, index) {
                return (
                  <Col className="col-lg-6  col-xxl-4 col-md-12 mb-4 col-12 p-2">
                    <Card
                      className="bg-grey text-black flex-fill shadow-lg border-3 border-warning products-card "
                      key={item.id}
                    >
                      <Card.Img
                        className="fluid shadow-sm border-3 border-warning"
                        variant="top"
                        src={item.img}
                        style={{
                          objectFit: "contain",
                          height: "300px",
                          width: "100%",
                          padding: "5px",
                        }}
                      />
                      <Card.Body className="bg-info bg-gradient">
                        <Card.Body>
                          <Card.Title className="fs-5 fw-bold">
                            {item.title}
                          </Card.Title>
                          <Card.Body className="d-flex justify-content-between align-items-center py-0">
                            <Card.Text className="fw-bold ">
                              {item.company.toUpperCase()}
                            </Card.Text>
                            <Card.Text className="">
                              <div></div>
                            </Card.Text>
                          </Card.Body>

                          <Card.Text className="fw-bold fs-5 text-danger py-0">
                            {item.price}€
                          </Card.Text>
                        </Card.Body>
                        <Card.Body className="py-0">
                          <div>
                            <span className="mt-3">
                              <Rate
                                allowHalf={true}
                                defaultValue={item.rating}
                                onChange={(value) =>
                                  handleRatingChage(item.title, value)
                                }
                              />
                            </span>
                          </div>
                          <div className="d-flex flex-sm-row flex-column justify-content-between pb-2 w-100 mt-3">
                            <Link
                              className="opacity-100"
                              to={`/product/${item.id}`}
                            >
                              <Button className="bg-secondary border-0">
                                <span>Read more</span>
                                <span>
                                  <Icon
                                    icon="majesticons:arrow-right-line"
                                    width="1.2em"
                                    height="1.2em"
                                    style={{ color: "white" }}
                                  />
                                </span>
                              </Button>
                            </Link>
                            <Link>
                              <Button
                                className="btn-dark mt-sm-0 mt-2"
                                class
                                onClick={() => {
                                  addToCart(item), notify(item.title);
                                }}
                              >
                                <span>
                                  <Icon
                                    icon="mdi:cart"
                                    width="1.2em"
                                    height="1.2em"
                                    style={{ color: "white" }}
                                  />
                                </span>{" "}
                                <span>Add to cart</span>
                              </Button>
                            </Link>
                          </div>
                        </Card.Body>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
