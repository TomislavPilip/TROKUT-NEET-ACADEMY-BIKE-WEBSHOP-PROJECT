import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src={
              "https://markoprojekt.com/_SHOP/files/products/ORBEA%20ONNA_20%20blue.jpg?id=10827446&preset=product-fullsize"
            }
            alt=""
            width={"600px"}
            height={"500px"}
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src={
              "https://markoprojekt.com/_SHOP/files/products/ORBEA%20RALLON%20M-LTD.jpg?id=10827135&preset=product-fullsize"
            }
            alt=""
            width={"900px"}
            height={"800px"}
          />
        </div>
        <Carousel.Caption className="text-black bg-primary w-30">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src={
              "https://markoprojekt.com/_SHOP/files/products/Rocky%20Soul%2020.jpg?id=10827014&preset=product-main-jpg"
            }
            alt=""
            width={"600px"}
            height={"500px"}
          />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
