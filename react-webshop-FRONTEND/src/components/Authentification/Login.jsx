import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Login.css";
import { useState } from "react";

export function Login() {
  const [modal, setModal] = useState("login-container");
  const navigate = useNavigate();

  function closeModal() {
    setModal("close-modal");

    navigate("/");
  }

  return (
    <div className={modal}>
      <div className="login-modal">
        <div>
          <form action="">
            <h1>Login </h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <Icon
                className="icon"
                icon="iconamoon:profile-fill"
                width="2em"
                height="2em"
                style={{ color: "white" }}
              />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <Icon
                className="icon"
                icon="material-symbols:lock"
                width="2em"
                height="2em"
                style={{ color: "white" }}
              />
            </div>
            <div className="remember-forgot">
              <label htmlFor="">
                <input type="checkbox" placeholder="Username" /> Remember me
              </label>
              <a href="">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <Link to={"/authentification/register"}>Sign Up</Link>
              </p>
            </div>

            <Icon
              onClick={closeModal}
              className="close-modal-icon"
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
