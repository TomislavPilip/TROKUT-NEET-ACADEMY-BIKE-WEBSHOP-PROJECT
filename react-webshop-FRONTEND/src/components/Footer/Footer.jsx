import { Container, Row, Col } from "react-bootstrap";

import { Icon } from "@iconify/react";
export function Footer() {
  return (
    <footer>
      <Container fluid className="p-4 pb-0 bg-dark text-white">
        <Row className="p-3 d-flex justify-content-center">
          <Col className="col-12  col-md-5 mb-3 d-flex align-items-center flex-row">
            <Col className="col-6  col-md-3 me-3  mb-3 d-flex align-items-end flex-column">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    About
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="col-6  col-md-5 mb-3 ms-3 d-flex align-items-start flex-column">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    About
                  </a>
                </li>
              </ul>
            </Col>
          </Col>
          <Col className="col-12  col-md-4 mb-3 d-flex justify-content-center">
            <iframe
              className="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.8166579994627!2d15.88817341286525!3d43.735135447005426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13352f5887acf33b%3A0x5f282692411335d3!2sUl.%20kralja%20Tomislava%2C%2022000%2C%20%C5%A0ibenik!5e0!3m2!1shr!2shr!4v1710746952770!5m2!1shr!2shr"
              width="400"
              height="285"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>

          <Col className="col-xxl-5 col-md-10  mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row align-items-center w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <Row className="d-flex align-items-center">
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 TomeBikeShop, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex justify-content-center">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <Icon
                    icon="bi:twitter"
                    width="2.2em"
                    height="2.2em"
                    style={{ color: "#13a4ec" }}
                  />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <Icon
                    icon="skill-icons:instagram"
                    width="2.2em"
                    height="2.2em"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <Icon icon="logos:facebook" width="2.2em" height="2.2em" />
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </footer>
  );
}
