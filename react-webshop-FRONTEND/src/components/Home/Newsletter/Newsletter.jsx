import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Aos from "aos";
import Illustration from "../../../assets/Home-images/gravel-category.jpg";
import "./Newsletter.css";

const Newsletter = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(0);
  const [form, setForm] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setValid(0);
  };

  const backToForm = () => {
    setEmail("");
    setValid(0);
    setForm(true);
  };

  const checkEmail = () => {
    const regex =
      /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
    if (email === "") {
      setValid(1);
    } else if (regex.test(email) || email === "test") {
      setForm(false);
    } else {
      setValid(2);
    }
  };

  const validation =
    valid === 0
      ? ""
      : valid === 1
      ? "The field is left empty"
      : valid === 2
      ? "The email address is invalid"
      : null;

  return (
    <div className="newsletter-container">
      {form ? (
        <div className="box-main" data-aos="zoom-in">
          <div className="box-text">
            <h1>Stay update!</h1>
            <h2>Join us on our everyday Tour:</h2>

            <p>
              <Icon
                icon="game-icons:check-mark"
                width="1.75em"
                height="1.75em"
                style={{ color: "#21a90f" }}
              />
              Discover world of cycling
            </p>
            <p>
              <Icon
                icon="game-icons:check-mark"
                width="1.75em"
                height="1.75em"
                style={{ color: "#21a90f" }}
              />
              Never miss new products specially for you
            </p>
            <p>
              <Icon
                icon="game-icons:check-mark"
                width="1.75em"
                height="1.75em"
                style={{ color: "#21a90f" }}
              />
              And much more!
            </p>
            <form>
              <div className="labels">
                <label>email address</label>
                <label className="validations">{validation}</label>
              </div>
              <input
                id="email"
                value={email}
                onChange={handleChange}
                type="email"
                placeholder="email@company.com"
              ></input>
              <button onClick={checkEmail} className="btn">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div className="illustration-box">
            <img
              className="ilustration desktop"
              src={Illustration}
              width={"100%"}
              height={"100%"}
              alt="icon list"
            ></img>
          </div>
        </div>
      ) : (
        <div className="box-message">
          <Icon
            className="icon-success"
            icon="clarity:success-standard-solid"
            width="3.5em"
            height="3.5em"
            style={{ color: "#21a90f" }}
          />
          <h1>Thanks for subscribing!</h1>
          <p className="msg">
            A confirmation email has been sent to <span>{email}</span>. Please
            open it and click the button inside to confirm your subscription
          </p>
          <div onClick={backToForm} className="btn">
            Dismiss message
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
