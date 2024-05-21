import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import "./carouselHome.css";
import { carouselData } from "../../Database/carouseldata";
import { Link } from "react-router-dom";

export function CarouselHome() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1900 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1900, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Container
      fluid
      className="carousel-container ps-lg-5 ps-3 text-center bg-white"
    >
      <div className="p-5 fs-1 fw-bold text-danger text-decoration-underline">
        CATEGORIES
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
      >
        {carouselData.map(function (carousel) {
          return (
            <Link key={carousel.id} to={`/${carousel.category}`}>
              {" "}
              <div className="carousel-card">
                <div>
                  <img src={carousel.image} alt="" />
                  <h6>{carousel.category}</h6>
                </div>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </Container>
  );
}
