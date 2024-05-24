import "./Register.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [modal, setModal] = useState("register-container");
  const navigate = useNavigate();

  function closeRegisterModal() {
    setModal("close-register-modal");
    navigate("/");
  }
  return (
    <div className="register-container">
      <div className="register-modal">
        <div>
          <form action="">
            <h1>Register </h1>

            <div className="register-input-box">
              <input type="text" placeholder="Username" required />
              <Icon
                className="icon"
                icon="iconamoon:profile-fill"
                width="2em"
                height="2em"
                style={{ color: "grey" }}
              />
            </div>

            <div className="register-input-box">
              <input type="email" placeholder="Email" required />
              <Icon
                icon="ic:baseline-email"
                className="icon"
                width="2em"
                height="2em"
                style={{ color: "grey" }}
              />
            </div>
            <div className="register-input-box">
              <input type="password" placeholder="Password" required />
              <Icon
                className="icon"
                icon="mdi:password"
                width="2em"
                height="2em"
                style={{ color: "grey" }}
              />
            </div>
            <div className="register-input-box">
              <input type="phone" placeholder="Phone" required />
              <Icon
                className="icon"
                icon="ic:baseline-phone"
                width="2em"
                height="2em"
                style={{ color: "grey" }}
              />
            </div>

            <button type="submit">Sign Up</button>

            <Icon
              onClick={closeRegisterModal}
              className="close-register-modal-icon"
              icon="ic:outline-close"
              width="2em"
              height="2em"
              style={{ color: "white" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
