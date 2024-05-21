import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "./seperateCategories.css";
import ScottImage from "../../../assets/SeperateCategories-images/scott-foil.webp";
import ClothesImage from "../../../assets/SeperateCategories-images/winter-clothing.webp";
import Gear from "../../../assets/SeperateCategories-images/gear.webp";
import Shimano from "../../../assets/SeperateCategories-images/shimanogruopset.jpg";
import { useEffect } from "react";

export function SeperateCategories() {
  const navigate = useNavigate();

  function openProduct() {
    navigate("/product/8");
  }

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="separate-categories-container">
      <Container xxl className="m-5">
        <Row className="d-flex justify-content-between border-bottom border-2 border-warning">
          <Col className="fs-2 fw-bold text-info ">BICYCLES AND GEAR</Col>
          <Col className="text-end fs-2 fw-bold text-danger">
            #SEPARATE CATEGORIES
          </Col>
        </Row>
        <Row className=" mt-3 d-flex justify-content-evenly">
          <Col
            onClick={openProduct}
            className="col-md-5 col-12 mt-md-0 mt-2    p-2"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
          >
            <h6 className="bg-dark p-2 mb-0">
              <span className="text-white">Elegance and Speed:</span>{" "}
              <span className="text-danger">Scott Foil</span>
            </h6>
            <div className="seperate scott-foil">
              <img
                className="img-fluid same-size-image scott-foil-image"
                src={ScottImage}
                alt=""
              />
            </div>
          </Col>
          <Col
            className="col-md-5 col-12 mt-md-0 mt-3  p-2"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
          >
            <h6 className="bg-dark p-2 mb-0 ">
              <span className="text-warning">Stay Warm:</span>{" "}
              <span className="text-info">Winter Collection</span>
            </h6>
            <div className="seperate winter-clothes">
              <img className="same-size-image" src={ClothesImage} alt="" />
            </div>
          </Col>
        </Row>
        <Row className="mt-2 d-flex justify-content-evenly">
          <Col
            onClick={openProduct}
            className="col-md-5 text-white col-12  p-2"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
          >
            <h6 className="bg-dark p-2 mb-0">
              <span className="text-white">Stay Update:</span>{" "}
              <span className="text-danger"> New Gear</span>
            </h6>
            <div className="seperate scott-foil">
              <img
                className="img-fluid same-size-image scott-foil-image"
                src={Gear}
                alt=""
              />
            </div>
          </Col>
          <Col
            className="col-md-5 col-12 mt-md-0 mt-2  p-2"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
          >
            <h6 className="bg-dark p-2 mb-0">
              <span className="text-warning">Keep shining:</span>{" "}
              <span className="text-info"> Shimano</span>
            </h6>
            <div className="seperate winter-clothes">
              <img className="same-size-image" src={Shimano} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
