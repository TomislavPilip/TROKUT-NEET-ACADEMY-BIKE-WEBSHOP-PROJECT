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

export function CategoryProductsPage() {
  const { category } = useParams();

  const filteredProducts = category
    ? data.filter((item) => item.category === category)
    : data;

  console.log(filteredProducts);
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
          <Sidebar />
        </div>
      </div>
      <div className="products-right-container">
        <Container>
          <Row>
            <Col className="col-12">
              <Button>Road</Button>
              <Button>Gravel</Button>
              <Button>MTB</Button>
              <Button>Electric</Button>
              <Button>Kids</Button>
            </Col>
          </Row>
        </Container>
        <Container fluid className="p-0">
          <Toaster />
          <Row className="m-3">
            {filteredProducts &&
              filteredProducts.map(function (item, index) {
                return (
                  <Col className="col-lg-6  col-xl-4 col-md-12 mb-4 col-12 p-2">
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
                              {item.company}
                            </Card.Text>
                            <Card.Text className="fw-bold ">
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
